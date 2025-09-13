import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Button } from "~/components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Collaborative Notes - EduHub" },
    { name: "description", content: "Take and share notes with real-time collaboration" },
  ];
};

export default function Notes() {
  const [notes] = useState([
    {
      id: "1",
      title: "Calculus - Derivatives",
      subject: "Mathematics",
      lastModified: "2024-01-15",
      isCollaborative: true,
      collaborators: ["Alice", "Bob"]
    },
    {
      id: "2", 
      title: "World War II Timeline",
      subject: "History",
      lastModified: "2024-01-14",
      isCollaborative: false,
      collaborators: []
    },
    {
      id: "3",
      title: "Organic Chemistry Reactions",
      subject: "Chemistry", 
      lastModified: "2024-01-13",
      isCollaborative: true,
      collaborators: ["Charlie", "Diana", "Eve"]
    }
  ]);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Notes</h1>
          <p className="text-xl text-gray-600">
            Collaborative note-taking with real-time synthesis
          </p>
        </div>
        <Button variant="primary">Create New Note</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Recent Notes</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {notes.map((note) => (
                <div key={note.id} className="p-6 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {note.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{note.subject}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Modified {note.lastModified}</span>
                        {note.isCollaborative && (
                          <span className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Collaborative</span>
                          </span>
                        )}
                      </div>
                    </div>
                    {note.isCollaborative && (
                      <div className="flex -space-x-2">
                        {note.collaborators.slice(0, 3).map((collaborator, index) => (
                          <div
                            key={index}
                            className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-white"
                          >
                            {collaborator[0]}
                          </div>
                        ))}
                        {note.collaborators.length > 3 && (
                          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-white">
                            +{note.collaborators.length - 3}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">AI Note Synthesis</h3>
            <p className="text-gray-600 text-sm mb-4">
              Let AI help you synthesize and organize your notes automatically.
            </p>
            <Button variant="secondary" className="w-full">
              Synthesize Notes
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["Mathematics", "History", "Chemistry", "Physics", "Biology", "Literature"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full cursor-pointer hover:bg-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Study Groups</h3>
            <p className="text-gray-600 text-sm mb-4">
              Share notes with your study groups.
            </p>
            <div className="space-y-2">
              <div className="p-3 border border-gray-200 rounded-md">
                <div className="font-medium text-sm">Math Study Group</div>
                <div className="text-xs text-gray-500">5 members</div>
              </div>
              <div className="p-3 border border-gray-200 rounded-md">
                <div className="font-medium text-sm">Chemistry Lab Partners</div>
                <div className="text-xs text-gray-500">3 members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
