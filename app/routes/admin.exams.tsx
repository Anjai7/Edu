import React from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import {
  PlusIcon,
  DocumentTextIcon,
  TrashIcon,
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  AcademicCapIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";
import { createSupabaseServerClient } from "~/lib/supabase.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Exam Management - EduHub Admin" },
    { name: "description", content: "Schedule and manage exams" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const supabase = createSupabaseServerClient(request);

  const [
    { data: exams },
    { data: courses },
    { data: faculty }
  ] = await Promise.all([
    supabase.from('assignments').select('*, courses (name), users!assignments_faculty_id_fkey (full_name)').eq('type', 'exam').order('created_at', { ascending: false }),
    supabase.from('courses').select('*').order('name'),
    supabase.from('users').select('*').eq('role', 'faculty').order('full_name')
  ]);

  return json({
    exams: exams || [],
    courses: courses || [],
    faculty: faculty || []
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const supabase = createSupabaseServerClient(request);
  const formData = await request.formData();
  const intent = formData.get('intent');

  if (intent === 'create') {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const course_id = formData.get('course_id') as string;
    const faculty_id = formData.get('faculty_id') as string;
    const exam_date = formData.get('exam_date') as string;
    const duration = formData.get('duration') as string;
    const max_points = parseInt(formData.get('max_points') as string);
    const room = formData.get('room') as string;

    const { data: exam, error } = await supabase
      .from('assignments')
      .insert({
        title,
        description,
        course_id: parseInt(course_id),
        faculty_id: parseInt(faculty_id),
        due_date: exam_date,
        max_points,
        type: 'exam',
        status: 'active'
      })
      .select()
      .single();

    if (error) {
      return json({ error: error.message }, { status: 400 });
    }

    // Create announcement for students
    await supabase.from('announcements').insert({
      title: `Exam Scheduled: ${title}`,
      content: `Exam "${title}" has been scheduled for ${new Date(exam_date).toLocaleDateString()} at ${new Date(exam_date).toLocaleTimeString()}. Duration: ${duration} minutes. Room: ${room}. Description: ${description}`,
      type: 'exam',
      priority: 'high',
      target_audience: 'students',
      created_by: parseInt(faculty_id)
    });

    return json({ success: true, exam });
  }

  if (intent === 'delete') {
    const id = formData.get('id') as string;
    
    const { error } = await supabase
      .from('assignments')
      .delete()
      .eq('id', parseInt(id));

    if (error) {
      return json({ error: error.message }, { status: 400 });
    }

    return json({ success: true });
  }

  return json({ error: 'Invalid action' }, { status: 400 });
}

export default function AdminExams() {
  const { exams, courses, faculty } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon, current: false },
    { name: 'Assignments', href: '/admin/assignments', icon: DocumentTextIcon, current: false },
    { name: 'Records', href: '/admin/records', icon: AcademicCapIcon, current: false },
    { name: 'Homework', href: '/admin/homework', icon: BookOpenIcon, current: false },
    { name: 'Exams', href: '/admin/exams', icon: DocumentTextIcon, current: true },
    { name: 'Events', href: '/admin/events', icon: CalendarDaysIcon, current: false },
    { name: 'Leaderboard', href: '/admin/leaderboard', icon: ChartBarIcon, current: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Right Navigation Bar */}
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
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      item.current
                        ? 'bg-slate-700 text-white'
                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <IconComponent className="mr-3 h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
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
                  {navigation.map((item) => {
                    const IconComponent = item.icon;
                    return (
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
                        <IconComponent className="mr-3 h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
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
            <h1 className="text-lg font-semibold text-gray-900">Exams</h1>
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
              <h1 className="text-3xl font-bold text-gray-900 hidden lg:block">Exams</h1>
              <p className="text-gray-600 mt-2">Schedule and manage exams</p>
            </div>
            <button
              onClick={() => setShowCreateForm(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Schedule Exam
            </button>
          </div>

          {actionData?.error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
              {actionData.error}
            </div>
          )}
          {actionData?.success && (
            <div className="mb-4 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg">
              Exam scheduled successfully and announcement posted to students!
            </div>
          )}

          {showCreateForm && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Schedule New Exam</h3>
                  <button
                    onClick={() => setShowCreateForm(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <Form method="post" className="space-y-4">
                  <input type="hidden" name="intent" value="create" />
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Exam Title</label>
                    <input
                      type="text"
                      name="title"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      name="description"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
                    <select
                      name="course_id"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Faculty</label>
                    <select
                      name="faculty_id"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Select faculty</option>
                      {faculty.map((member) => (
                        <option key={member.id} value={member.id}>
                          {member.full_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Exam Date & Time</label>
                    <input
                      type="datetime-local"
                      name="exam_date"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Duration (minutes)</label>
                      <input
                        type="number"
                        name="duration"
                        min="30"
                        max="300"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Max Points</label>
                      <input
                        type="number"
                        name="max_points"
                        min="1"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Room/Location</label>
                    <input
                      type="text"
                      name="room"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="e.g. Room 101, Lab A"
                    />
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
                    >
                      Schedule Exam
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          )}

          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Scheduled Exams</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {exams.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  No exams scheduled yet. Click "Schedule Exam" to get started.
                </div>
              ) : (
                exams.map((exam) => (
                  <div key={exam.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3" />
                          <div>
                            <h4 className="text-lg font-medium text-gray-900">{exam.title}</h4>
                            <p className="text-sm text-gray-500">
                              {exam.courses?.name} • {exam.users?.full_name}
                            </p>
                            {exam.description && (
                              <p className="text-gray-600 mt-1">{exam.description}</p>
                            )}
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                              <span>Date: {new Date(exam.due_date).toLocaleDateString()}</span>
                              <span className="mx-2">•</span>
                              <span>Time: {new Date(exam.due_date).toLocaleTimeString()}</span>
                              <span className="mx-2">•</span>
                              <span>{exam.max_points} points</span>
                              <span className="mx-2">•</span>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                exam.status === 'active' 
                                  ? 'bg-red-100 text-red-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {exam.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Form method="post" className="inline">
                          <input type="hidden" name="intent" value="delete" />
                          <input type="hidden" name="id" value={exam.id} />
                          <button
                            type="submit"
                            className="text-red-600 hover:text-red-800"
                            onClick={(e) => {
                              if (!confirm('Are you sure you want to delete this exam?')) {
                                e.preventDefault();
                              }
                            }}
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </Form>
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
