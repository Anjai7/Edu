import React from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import {
  PlusIcon,
  BookOpenIcon,
  TrashIcon,
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";
import { createSupabaseServerClient } from "~/lib/supabase.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Homework Management - EduHub Admin" },
    { name: "description", content: "Assign and track homework" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const supabase = createSupabaseServerClient(request);

  const [
    { data: homework },
    { data: courses },
    { data: faculty }
  ] = await Promise.all([
    supabase.from('assignments').select('*, courses (name), users!assignments_faculty_id_fkey (full_name)').eq('type', 'homework').order('created_at', { ascending: false }),
    supabase.from('courses').select('*').order('name'),
    supabase.from('users').select('*').eq('role', 'faculty').order('full_name')
  ]);

  return json({
    homework: homework || [],
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
    const due_date = formData.get('due_date') as string;
    const max_points = parseInt(formData.get('max_points') as string);

    const { data: homework, error } = await supabase
      .from('assignments')
      .insert({
        title,
        description,
        course_id: parseInt(course_id),
        faculty_id: parseInt(faculty_id),
        due_date,
        max_points,
        type: 'homework',
        status: 'active'
      })
      .select()
      .single();

    if (error) {
      return json({ error: error.message }, { status: 400 });
    }

    // Create announcement for students
    await supabase.from('announcements').insert({
      title: `New Homework: ${title}`,
      content: `New homework "${title}" has been assigned. Due date: ${new Date(due_date).toLocaleDateString()}. Description: ${description}`,
      type: 'homework',
      priority: 'high',
      target_audience: 'students',
      created_by: parseInt(faculty_id)
    });

    return json({ success: true, homework });
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

export default function AdminHomework() {
  const { homework, courses, faculty } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon, current: false },
    { name: 'Assignments', href: '/admin/assignments', icon: DocumentTextIcon, current: false },
    { name: 'Records', href: '/admin/records', icon: AcademicCapIcon, current: false },
    { name: 'Homework', href: '/admin/homework', icon: BookOpenIcon, current: true },
    { name: 'Exams', href: '/admin/exams', icon: DocumentTextIcon, current: false },
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
            <h1 className="text-lg font-semibold text-gray-900">Homework</h1>
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
              <h1 className="text-3xl font-bold text-gray-900 hidden lg:block">Homework</h1>
              <p className="text-gray-600 mt-2">Assign and track homework</p>
            </div>
            <button
              onClick={() => setShowCreateForm(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Homework
            </button>
          </div>

          {actionData?.error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
              {actionData.error}
            </div>
          )}
          {actionData?.success && (
            <div className="mb-4 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg">
              Homework added successfully and announcement posted to students!
            </div>
          )}

          {showCreateForm && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Add New Homework</h3>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      name="title"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      name="description"
                      rows={3}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
                    <select
                      name="course_id"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                    <input
                      type="datetime-local"
                      name="due_date"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Max Points</label>
                    <input
                      type="number"
                      name="max_points"
                      min="1"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md"
                    >
                      Add Homework
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
              <h3 className="text-lg font-medium text-gray-900">All Homework</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {homework.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  No homework assigned yet. Click "Add Homework" to get started.
                </div>
              ) : (
                homework.map((hw) => (
                  <div key={hw.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <BookOpenIcon className="h-5 w-5 text-gray-400 mr-3" />
                          <div>
                            <h4 className="text-lg font-medium text-gray-900">{hw.title}</h4>
                            <p className="text-sm text-gray-500">
                              {hw.courses?.name} • {hw.users?.full_name}
                            </p>
                            {hw.description && (
                              <p className="text-gray-600 mt-1">{hw.description}</p>
                            )}
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                              <span>Due: {new Date(hw.due_date).toLocaleDateString()}</span>
                              <span className="mx-2">•</span>
                              <span>{hw.max_points} points</span>
                              <span className="mx-2">•</span>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                hw.status === 'active' 
                                  ? 'bg-orange-100 text-orange-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {hw.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Form method="post" className="inline">
                          <input type="hidden" name="intent" value="delete" />
                          <input type="hidden" name="id" value={hw.id} />
                          <button
                            type="submit"
                            className="text-red-600 hover:text-red-800"
                            onClick={(e) => {
                              if (!confirm('Are you sure you want to delete this homework?')) {
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
