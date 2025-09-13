import React from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import {
  PlusIcon,
  CalendarDaysIcon,
  TrashIcon,
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  BookOpenIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";
import { createSupabaseServerClient } from "~/lib/supabase.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Event Management - EduHub Admin" },
    { name: "description", content: "Schedule and manage events" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const supabase = createSupabaseServerClient(request);

  const { data: events } = await supabase
    .from('events')
    .select('*')
    .order('event_date', { ascending: true });

  return json({
    events: events || []
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const supabase = createSupabaseServerClient(request);
  const formData = await request.formData();
  const intent = formData.get('intent');

  if (intent === 'create') {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const event_date = formData.get('event_date') as string;
    const location = formData.get('location') as string;
    const event_type = formData.get('event_type') as string;

    const { data: event, error } = await supabase
      .from('events')
      .insert({
        title,
        description,
        event_date,
        location,
        event_type,
        status: 'active'
      })
      .select()
      .single();

    if (error) {
      return json({ error: error.message }, { status: 400 });
    }

    // Create announcement for students
    await supabase.from('announcements').insert({
      title: `New Event: ${title}`,
      content: `Event "${title}" has been scheduled for ${new Date(event_date).toLocaleDateString()} at ${new Date(event_date).toLocaleTimeString()}. Location: ${location}. ${description}`,
      type: 'event',
      priority: 'medium',
      target_audience: 'students',
      created_by: 1 // Admin user
    });

    return json({ success: true, event });
  }

  if (intent === 'delete') {
    const id = formData.get('id') as string;
    
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', parseInt(id));

    if (error) {
      return json({ error: error.message }, { status: 400 });
    }

    return json({ success: true });
  }

  return json({ error: 'Invalid action' }, { status: 400 });
}

export default function AdminEvents() {
  const { events } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon, current: false },
    { name: 'Assignments', href: '/admin/assignments', icon: DocumentTextIcon, current: false },
    { name: 'Records', href: '/admin/records', icon: AcademicCapIcon, current: false },
    { name: 'Homework', href: '/admin/homework', icon: BookOpenIcon, current: false },
    { name: 'Exams', href: '/admin/exams', icon: DocumentTextIcon, current: false },
    { name: 'Events', href: '/admin/events', icon: CalendarDaysIcon, current: true },
    { name: 'Leaderboard', href: '/admin/leaderboard', icon: ChartBarIcon, current: false },
  ];

  const eventTypes = [
    { value: 'academic', label: 'Academic' },
    { value: 'sports', label: 'Sports' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'workshop', label: 'Workshop' },
    { value: 'seminar', label: 'Seminar' },
    { value: 'meeting', label: 'Meeting' },
    { value: 'other', label: 'Other' }
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
            <h1 className="text-lg font-semibold text-gray-900">Events</h1>
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
              <h1 className="text-3xl font-bold text-gray-900 hidden lg:block">Events</h1>
              <p className="text-gray-600 mt-2">Schedule and manage events</p>
            </div>
            <button
              onClick={() => setShowCreateForm(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Create Event
            </button>
          </div>

          {actionData?.error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
              {actionData.error}
            </div>
          )}
          {actionData?.success && (
            <div className="mb-4 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg">
              Event created successfully and announcement posted to students!
            </div>
          )}

          {showCreateForm && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Create New Event</h3>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
                    <input
                      type="text"
                      name="title"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      name="description"
                      rows={3}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                    <select
                      name="event_type"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date & Time</label>
                    <input
                      type="datetime-local"
                      name="event_date"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      name="location"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="e.g. Main Auditorium, Sports Ground"
                    />
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md"
                    >
                      Create Event
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
              <h3 className="text-lg font-medium text-gray-900">All Events</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {events.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  No events scheduled yet. Click "Create Event" to get started.
                </div>
              ) : (
                events.map((event) => (
                  <div key={event.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <CalendarDaysIcon className="h-5 w-5 text-gray-400 mr-3" />
                          <div>
                            <h4 className="text-lg font-medium text-gray-900">{event.title}</h4>
                            <p className="text-sm text-gray-500 capitalize">
                              {event.event_type} • {event.location}
                            </p>
                            <p className="text-gray-600 mt-1">{event.description}</p>
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                              <span>Date: {new Date(event.event_date).toLocaleDateString()}</span>
                              <span className="mx-2">•</span>
                              <span>Time: {new Date(event.event_date).toLocaleTimeString()}</span>
                              <span className="mx-2">•</span>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                event.status === 'active' 
                                  ? 'bg-purple-100 text-purple-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {event.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Form method="post" className="inline">
                          <input type="hidden" name="intent" value="delete" />
                          <input type="hidden" name="id" value={event.id} />
                          <button
                            type="submit"
                            className="text-red-600 hover:text-red-800"
                            onClick={(e) => {
                              if (!confirm('Are you sure you want to delete this event?')) {
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
