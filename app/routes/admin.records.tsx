import React from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import {
  PlusIcon,
  AcademicCapIcon,
  TrashIcon,
  PencilIcon,
  XMarkIcon,
  Bars3Icon
} from "@heroicons/react/24/outline";
import { createSupabaseServerClient } from "~/lib/supabase.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Student Records - EduHub Admin" },
    { name: "description", content: "View and manage student academic records" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const supabase = createSupabaseServerClient(request);

  const [
    { data: students, error: studentsError },
    { data: courses, error: coursesError }
  ] = await Promise.all([
    supabase
      .from('users')
      .select('*')
      .eq('role', 'student')
      .order('full_name'),
    supabase.from('courses').select('*').order('name')
  ]);

  // Get student records with grades
  const { data: records, error: recordsError } = await supabase
    .from('submissions')
    .select(`
      *,
      assignments (title, max_points, course_id),
      users (full_name, email),
      courses (name)
    `)
    .not('grade', 'is', null)
    .order('created_at', { ascending: false });

  if (studentsError) console.error('Error loading students:', studentsError);
  if (coursesError) console.error('Error loading courses:', coursesError);
  if (recordsError) console.error('Error loading records:', recordsError);

  return json({
    students: students || [],
    courses: courses || [],
    records: records || []
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const supabase = createSupabaseServerClient(request);
  const formData = await request.formData();
  const intent = formData.get('intent');

  if (intent === 'add_record') {
    const student_id = formData.get('student_id') as string;
    const course_id = formData.get('course_id') as string;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const grade = formData.get('grade') as string;
    const points = formData.get('points') as string;

    // Create a manual record entry
    const { data: record, error } = await supabase
      .from('submissions')
      .insert({
        student_id: parseInt(student_id),
        assignment_id: null, // Manual record
        content: description,
        grade: parseFloat(grade),
        points_earned: parseInt(points),
        status: 'graded',
        submitted_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      return json({ error: error.message }, { status: 400 });
    }

    // Create announcement
    await supabase.from('announcements').insert({
      title: `New Record Added: ${title}`,
      content: `A new academic record "${title}" has been added to your profile.`,
      type: 'record',
      priority: 'low',
      target_audience: 'students',
      created_by: 1 // Admin user
    });

    return json({ success: true, record });
  }

  return json({ error: 'Invalid action' }, { status: 400 });
}

export default function AdminRecords() {
  const { students, courses, records } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const [showAddForm, setShowAddForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'Assignments', href: '/admin/assignments' },
    { name: 'Records', href: '/admin/records', current: true },
    { name: 'Homework', href: '/admin/homework' },
    { name: 'Exams', href: '/admin/exams' },
    { name: 'Events', href: '/admin/events' },
    { name: 'Leaderboard', href: '/admin/leaderboard' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Navigation - Same as assignments */}
      <div className="fixed right-0 top-0 h-full w-72 bg-slate-800 shadow-2xl transform translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 lg:z-30">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">EduHub</h2>
                <p className="text-sm text-slate-300">Admin Portal</p>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="lg:hidden text-slate-300 hover:text-white"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="flex-1 px-4 py-6 overflow-y-auto">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    item.current
                      ? 'bg-slate-700 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <AcademicCapIcon className="mr-3 h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu - Same structure */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="relative ml-auto h-full w-72 bg-slate-800 shadow-2xl">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white">EduHub</h2>
                    <p className="text-sm text-slate-300">Admin Portal</p>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-300 hover:text-white"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="flex-1 px-4 py-6 overflow-y-auto">
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        item.current
                          ? 'bg-slate-700 text-white'
                          : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <AcademicCapIcon className="mr-3 h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:mr-72">
        <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Student Records</h1>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-gray-500 hover:text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 hidden lg:block">Student Records</h1>
              <p className="text-gray-600 mt-2">View and manage student academic records</p>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Record
            </button>
          </div>

          {/* Messages */}
          {actionData?.error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
              {actionData.error}
            </div>
          )}
          {actionData?.success && (
            <div className="mb-4 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg">
              Record added successfully!
            </div>
          )}

          {/* Add Record Form */}
          {showAddForm && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Add Student Record</h3>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <Form method="post" className="space-y-4">
                  <input type="hidden" name="intent" value="add_record" />
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Student
                    </label>
                    <select
                      name="student_id"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select a student</option>
                      {students.map((student) => (
                        <option key={student.id} value={student.id}>
                          {student.full_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Course
                    </label>
                    <select
                      name="course_id"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select a course</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Record Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="e.g. Midterm Exam, Project Submission"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      name="description"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Grade (%)
                      </label>
                      <input
                        type="number"
                        name="grade"
                        min="0"
                        max="100"
                        step="0.1"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Points
                      </label>
                      <input
                        type="number"
                        name="points"
                        min="0"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
                    >
                      Add Record
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          )}

          {/* Records List */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">All Records</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {records.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  No records found. Click "Add Record" to get started.
                </div>
              ) : (
                records.map((record) => (
                  <div key={record.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <AcademicCapIcon className="h-5 w-5 text-gray-400 mr-3" />
                          <div>
                            <h4 className="text-lg font-medium text-gray-900">
                              {record.assignments?.title || 'Manual Record'}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {record.users?.full_name} • {record.courses?.name}
                            </p>
                            {record.content && (
                              <p className="text-gray-600 mt-1">{record.content}</p>
                            )}
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                              <span>Grade: {record.grade}%</span>
                              <span className="mx-2">•</span>
                              <span>Points: {record.points_earned}</span>
                              <span className="mx-2">•</span>
                              <span>{new Date(record.created_at).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          record.grade >= 90 
                            ? 'bg-green-100 text-green-800' 
                            : record.grade >= 80 
                            ? 'bg-blue-100 text-blue-800'
                            : record.grade >= 70
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {record.grade >= 90 ? 'A' : record.grade >= 80 ? 'B' : record.grade >= 70 ? 'C' : 'D'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
