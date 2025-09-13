import type { MetaFunction, LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData, useFetcher, Form } from "@remix-run/react";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export const meta: MetaFunction = () => {
  return [
    { title: "Admin - Assignments - EduHub" },
    { name: "description", content: "Manage assignments, create new assignments, and track submissions" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    // Fetch assignments with faculty and course information
    const { data: assignments, error: assignmentsError } = await supabase
      .from('assignments')
      .select(`
        *,
        faculty:users!assignments_faculty_id_fkey(name),
        course:courses(name, code),
        submissions(id, status, grade)
      `)
      .order('created_at', { ascending: false });

    if (assignmentsError) throw assignmentsError;

    // Fetch faculty members for the dropdown
    const { data: faculty, error: facultyError } = await supabase
      .from('users')
      .select('id, name, department')
      .eq('role', 'faculty')
      .eq('is_active', true)
      .order('name');

    if (facultyError) throw facultyError;

    // Fetch courses for the dropdown
    const { data: courses, error: coursesError } = await supabase
      .from('courses')
      .select('id, name, code, department')
      .eq('is_active', true)
      .order('name');

    if (coursesError) throw coursesError;

    return json({ 
      assignments: assignments || [], 
      faculty: faculty || [], 
      courses: courses || [] 
    });
  } catch (error) {
    console.error('Database error:', error);
    return json({ assignments: [], faculty: [], courses: [] });
  }
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get('intent');

  if (intent === 'create') {
    try {
      const assignmentData = {
        title: formData.get('title'),
        description: formData.get('description'),
        instructions: formData.get('instructions'),
        deadline: formData.get('deadline'),
        faculty_id: formData.get('faculty_id'),
        course_id: formData.get('course_id'),
        department: formData.get('department'),
        year: parseInt(formData.get('year') as string) || null,
        max_points: parseInt(formData.get('max_points') as string) || 100,
        submission_type: formData.get('submission_type') || 'file',
        is_published: formData.get('is_published') === 'true'
      };

      const { error } = await supabase
        .from('assignments')
        .insert([assignmentData]);

      if (error) {
        console.error('Error creating assignment:', error);
        return json({ error: error.message }, { status: 400 });
      }

      return redirect('/admin/assignments');
    } catch (error) {
      console.error('Action error:', error);
      return json({ error: 'Failed to create assignment' }, { status: 500 });
    }
  }

  return json({ error: 'Invalid action' }, { status: 400 });
}

export default function AdminAssignments() {
  const { assignments, faculty, courses } = useLoaderData<typeof loader>();
  const fetcher = useFetcher();

  const getSubmissionStats = (assignmentSubmissions: any[]) => {
    const total = assignmentSubmissions.length;
    const graded = assignmentSubmissions.filter(s => s.grade !== null).length;
    const pending = assignmentSubmissions.filter(s => s.status === 'submitted').length;
    return { total, graded, pending };
  };

  const isOverdue = (deadline: string) => {
    return new Date(deadline) < new Date();
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">📚 Admin - Assignments</h1>
          <p className="text-xl text-gray-600 mt-2">Manage assignments and track submissions</p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-3xl font-bold text-blue-600">{assignments.length}</div>
          <div className="text-sm text-gray-500">Total Assignments</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-3xl font-bold text-green-600">
            {assignments.filter(a => !isOverdue(a.deadline)).length}
          </div>
          <div className="text-sm text-gray-500">Active</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-3xl font-bold text-red-600">
            {assignments.filter(a => isOverdue(a.deadline)).length}
          </div>
          <div className="text-sm text-gray-500">Overdue</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-3xl font-bold text-purple-600">
            {assignments.reduce((sum, a) => sum + (a.submissions?.length || 0), 0)}
          </div>
          <div className="text-sm text-gray-500">Total Submissions</div>
        </div>
      </div>

      {/* Create Assignment Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Create New Assignment</h2>
        <Form method="post" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="hidden" name="intent" value="create" />
          
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Assignment Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter assignment title"
            />
          </div>

          <div>
            <label htmlFor="max_points" className="block text-sm font-medium text-gray-700 mb-2">
              Maximum Points
            </label>
            <input
              type="number"
              id="max_points"
              name="max_points"
              defaultValue="100"
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter assignment description"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-2">
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter detailed instructions"
            />
          </div>

          <div>
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
              Deadline *
            </label>
            <input
              type="datetime-local"
              id="deadline"
              name="deadline"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="faculty_id" className="block text-sm font-medium text-gray-700 mb-2">
              Faculty *
            </label>
            <select
              id="faculty_id"
              name="faculty_id"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Faculty</option>
              {faculty.map((f: any) => (
                <option key={f.id} value={f.id}>
                  {f.name} ({f.department})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="course_id" className="block text-sm font-medium text-gray-700 mb-2">
              Course
            </label>
            <select
              id="course_id"
              name="course_id"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Course (Optional)</option>
              {courses.map((c: any) => (
                <option key={c.id} value={c.id}>
                  {c.code} - {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
              Department
            </label>
            <input
              type="text"
              id="department"
              name="department"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Computer Science"
            />
          </div>

          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
              Year
            </label>
            <select
              id="year"
              name="year"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Years</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>

          <div>
            <label htmlFor="submission_type" className="block text-sm font-medium text-gray-700 mb-2">
              Submission Type
            </label>
            <select
              id="submission_type"
              name="submission_type"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="file">File Upload</option>
              <option value="text">Text Entry</option>
              <option value="both">Both File and Text</option>
            </select>
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="is_published"
                value="true"
                defaultChecked
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Publish immediately</span>
            </label>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={fetcher.state === 'submitting'}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {fetcher.state === 'submitting' ? 'Creating...' : 'Create Assignment'}
            </button>
          </div>
        </Form>

        {fetcher.data?.error && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            Error: {fetcher.data.error}
          </div>
        )}
      </div>

      {/* Assignments List */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold">All Assignments ({assignments.length})</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assignment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course/Faculty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deadline
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submissions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {assignments.map((assignment: any) => {
                const stats = getSubmissionStats(assignment.submissions || []);
                const overdue = isOverdue(assignment.deadline);
                
                return (
                  <tr key={assignment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{assignment.title}</div>
                        <div className="text-sm text-gray-500">{assignment.max_points} points</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm text-gray-900">
                          {assignment.course?.code} - {assignment.course?.name}
                        </div>
                        <div className="text-sm text-gray-500">{assignment.faculty?.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`text-sm ${overdue ? 'text-red-600' : 'text-gray-900'}`}>
                        {new Date(assignment.deadline).toLocaleDateString()}
                      </div>
                      <div className={`text-xs ${overdue ? 'text-red-500' : 'text-gray-500'}`}>
                        {new Date(assignment.deadline).toLocaleTimeString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {stats.total} total
                      </div>
                      <div className="text-xs text-gray-500">
                        {stats.graded} graded, {stats.pending} pending
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        overdue ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {overdue ? 'Overdue' : 'Active'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          View
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          
          {assignments.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No assignments found. Create your first assignment above.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
