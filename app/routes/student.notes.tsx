import type { LoaderFunctionArgs, MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData, useNavigate, useFetcher } from "@remix-run/react";
import { useState } from "react";
import {
  BookOpenIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  DocumentTextIcon,
  BellIcon,
  CogIcon,
  ArrowRightOnRectangleIcon,
  TrophyIcon,
  ChartBarIcon,
  TagIcon,
  StarIcon
} from "@heroicons/react/24/outline";
import { createSupabaseServerClient } from "~/lib/supabase.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Notes - EduHub Student" },
    { name: "description", content: "Manage your study notes and materials" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const supabase = createSupabaseServerClient(request);
  
  // For demo purposes, we'll use student ID 1
  const currentStudentId = 1;

  // Get all notes for the student
  const { data: notes } = await supabase
    .from('notes')
    .select(`
      *,
      courses(name)
    `)
    .eq('student_id', currentStudentId)
    .order('created_at', { ascending: false });

  // Get courses for dropdown
  const { data: courses } = await supabase
    .from('courses')
    .select('*')
    .order('name');

  return json({
    notes: notes || [],
    courses: courses || []
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const supabase = createSupabaseServerClient(request);
  const formData = await request.formData();
  const intent = formData.get('intent');
  const currentStudentId = 1; // For demo purposes

  if (intent === 'create') {
    const { data, error } = await supabase
      .from('notes')
      .insert({
        student_id: currentStudentId,
        title: formData.get('title'),
        content: formData.get('content'),
        course_id: formData.get('course_id') ? parseInt(formData.get('course_id') as string) : null,
        tags: formData.get('tags') ? (formData.get('tags') as string).split(',').map(tag => tag.trim()) : [],
        is_favorite: false
      })
      .select();

    if (error) {
      return json({ error: error.message }, { status: 400 });
    }
    return json({ success: true, note: data[0] });
  }

  if (intent === 'update') {
    const noteId = formData.get('noteId');
    const { data, error } = await supabase
      .from('notes')
      .update({
        title: formData.get('title'),
        content: formData.get('content'),
        course_id: formData.get('course_id') ? parseInt(formData.get('course_id') as string) : null,
        tags: formData.get('tags') ? (formData.get('tags') as string).split(',').map(tag => tag.trim()) : [],
      })
      .eq('id', noteId)
      .eq('student_id', currentStudentId)
      .select();

    if (error) {
      return json({ error: error.message }, { status: 400 });
    }
    return json({ success: true, note: data[0] });
  }

  if (intent === 'delete') {
    const noteId = formData.get('noteId');
    const { error } = await supabase
      .from('notes')
      .delete()
      .eq('id', noteId)
      .eq('student_id', currentStudentId);

    if (error) {
      return json({ error: error.message }, { status: 400 });
    }
    return json({ success: true });
  }

  if (intent === 'favorite') {
    const noteId = formData.get('noteId');
    const isFavorite = formData.get('isFavorite') === 'true';
    const { error } = await supabase
      .from('notes')
      .update({ is_favorite: !isFavorite })
      .eq('id', noteId)
      .eq('student_id', currentStudentId);

    if (error) {
      return json({ error: error.message }, { status: 400 });
    }
    return json({ success: true });
  }

  return json({ error: 'Invalid action' }, { status: 400 });
}

export default function StudentNotes() {
  const { notes, courses } = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const fetcher = useFetcher();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingNote, setEditingNote] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const handleLogout = async () => {
    try {
      localStorage.removeItem('student_session');
      sessionStorage.clear();
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Logout error:', error);
      navigate('/', { replace: true });
    }
  };

  const navigation = [
    { name: 'Dashboard', href: '/student/dashboard', icon: HomeIcon, current: false },
    { name: 'Assignments', href: '/student/assignments', icon: DocumentTextIcon, current: false },
    { name: 'Attendance', href: '/student/attendance', icon: CalendarDaysIcon, current: false },
    { name: 'Performance', href: '/student/academic-performance', icon: ChartBarIcon, current: false },
    { name: 'Leaderboard', href: '/student/leaderboard', icon: TrophyIcon, current: false },
    { name: 'Notes', href: '/student/notes', icon: BookOpenIcon, current: true },
    { name: 'Announcements', href: '/student/announcements', icon: BellIcon, current: false },
    { name: 'Profile', href: '/student/profile', icon: CogIcon, current: false },
  ];

  // Filter notes based on search and filters
  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = selectedCourse === 'all' || note.course_id?.toString() === selectedCourse;
    const matchesTag = selectedTag === 'all' || (note.tags && note.tags.includes(selectedTag));
    
    return matchesSearch && matchesCourse && matchesTag;
  });

  // Get all unique tags
  const allTags = [...new Set(notes.flatMap(note => note.tags || []))];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    if (editingNote) {
      formData.append('intent', 'update');
      formData.append('noteId', editingNote.id.toString());
    } else {
      formData.append('intent', 'create');
    }
    
    fetcher.submit(formData, { method: 'post' });
    setShowCreateModal(false);
    setEditingNote(null);
  };

  const handleDelete = (noteId: number) => {
    if (confirm('Are you sure you want to delete this note?')) {
      const formData = new FormData();
      formData.append('intent', 'delete');
      formData.append('noteId', noteId.toString());
      fetcher.submit(formData, { method: 'post' });
    }
  };

  const handleFavorite = (noteId: number, isFavorite: boolean) => {
    const formData = new FormData();
    formData.append('intent', 'favorite');
    formData.append('noteId', noteId.toString());
    formData.append('isFavorite', isFavorite.toString());
    fetcher.submit(formData, { method: 'post' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Right Navigation Bar */}
      <div className="fixed right-0 top-0 h-full w-72 bg-slate-800 shadow-2xl transform translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 lg:z-30">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">EduHub</h2>
                <p className="text-sm text-slate-300">Student Portal</p>
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
              
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors text-slate-300 hover:bg-red-600 hover:text-white mt-4"
              >
                <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5" />
                <span>Logout</span>
              </button>
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
                    <p className="text-sm text-slate-300">Student Portal</p>
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
                  
                  {/* Mobile Logout Button */}
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleLogout();
                    }}
                    className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors text-slate-300 hover:bg-red-600 hover:text-white mt-4"
                  >
                    <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5" />
                    <span>Logout</span>
                  </button>
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
            <h1 className="text-lg font-semibold text-gray-900">Notes</h1>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-gray-500 hover:text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 hidden lg:block">📝 My Notes</h1>
                <p className="text-gray-600 mt-2">Organize and manage your study notes</p>
              </div>
              <button
                onClick={() => setShowCreateModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <PlusIcon className="h-5 w-5 mr-2" />
                New Note
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search notes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Courses</option>
                {courses.map(course => (
                  <option key={course.id} value={course.id.toString()}>
                    {course.name}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Tags</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
              
              <div className="text-sm text-gray-500 self-center">
                {filteredNotes.length} of {notes.length} notes
              </div>
            </div>
          </div>

          {/* Notes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <div key={note.id} className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 truncate flex-1 mr-2">
                    {note.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleFavorite(note.id, note.is_favorite)}
                      className={`p-1 rounded ${note.is_favorite ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                    >
                      <StarIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => {
                        setEditingNote(note);
                        setShowCreateModal(true);
                      }}
                      className="p-1 text-gray-400 hover:text-blue-500"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(note.id)}
                      className="p-1 text-gray-400 hover:text-red-500"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {note.content}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>
                    {note.courses?.name || 'No course'}
                  </span>
                  <span>
                    {new Date(note.created_at).toLocaleDateString()}
                  </span>
                </div>
                
                {note.tags && note.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {note.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
                      >
                        <TagIcon className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredNotes.length === 0 && (
            <div className="text-center py-12">
              <BookOpenIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No notes found</h3>
              <p className="mt-1 text-sm text-gray-500">
                {notes.length === 0 ? 'Get started by creating your first note.' : 'Try adjusting your search or filters.'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Create/Edit Note Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => {
              setShowCreateModal(false);
              setEditingNote(null);
            }}></div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <fetcher.Form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {editingNote ? 'Edit Note' : 'Create New Note'}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        required
                        defaultValue={editingNote?.title || ''}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="course_id" className="block text-sm font-medium text-gray-700">
                        Course (Optional)
                      </label>
                      <select
                        name="course_id"
                        id="course_id"
                        defaultValue={editingNote?.course_id || ''}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">No course</option>
                        {courses.map(course => (
                          <option key={course.id} value={course.id}>
                            {course.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                        Content
                      </label>
                      <textarea
                        name="content"
                        id="content"
                        rows={6}
                        required
                        defaultValue={editingNote?.content || ''}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                        Tags (comma-separated)
                      </label>
                      <input
                        type="text"
                        name="tags"
                        id="tags"
                        defaultValue={editingNote?.tags?.join(', ') || ''}
                        placeholder="e.g. important, exam, review"
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    {editingNote ? 'Update' : 'Create'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowCreateModal(false);
                      setEditingNote(null);
                    }}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </fetcher.Form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
