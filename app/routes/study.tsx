import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Button } from "~/components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "AI Study Buddy - EduHub" },
    { name: "description", content: "Your personalized AI-powered study companion" },
  ];
};

export default function StudyBuddy() {
  const [learningStyle, setLearningStyle] = useState<string>("");
  const [currentTopic, setCurrentTopic] = useState("");
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const generateRecommendations = () => {
    // Mock AI recommendations based on learning style
    const mockRecommendations = {
      visual: [
        "Create mind maps for complex concepts",
        "Use diagrams and flowcharts to break down information",
        "Watch educational videos on the topic",
        "Create visual flashcards with images"
      ],
      auditory: [
        "Record yourself explaining concepts",
        "Join study groups for discussion",
        "Listen to educational podcasts",
        "Use text-to-speech for reading materials"
      ],
      kinesthetic: [
        "Create physical models or demonstrations",
        "Take frequent breaks while studying",
        "Use hands-on activities and experiments",
        "Walk while reviewing notes"
      ],
      reading: [
        "Summarize text in your own words",
        "Create detailed written notes",
        "Use highlighting and annotation techniques",
        "Read multiple sources on the same topic"
      ]
    };

    if (learningStyle && currentTopic) {
      setRecommendations(mockRecommendations[learningStyle as keyof typeof mockRecommendations] || []);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Study Buddy</h1>
        <p className="text-xl text-gray-600">
          Get personalized study recommendations based on your learning style
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Learning Style Assessment</h2>
        
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What's your preferred learning style?
            </label>
            <select
              value={learningStyle}
              onChange={(e) => setLearningStyle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select your learning style</option>
              <option value="visual">Visual (Learn through seeing)</option>
              <option value="auditory">Auditory (Learn through hearing)</option>
              <option value="kinesthetic">Kinesthetic (Learn through doing)</option>
              <option value="reading">Reading/Writing (Learn through text)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What topic are you studying today?
            </label>
            <input
              type="text"
              value={currentTopic}
              onChange={(e) => setCurrentTopic(e.target.value)}
              placeholder="e.g., Calculus derivatives, World War II, Organic Chemistry"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <Button onClick={generateRecommendations} variant="primary">
          Get Study Recommendations
        </Button>
      </div>

      {recommendations.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">
            Recommended Study Techniques for {currentTopic}
          </h3>
          <ul className="space-y-3">
            {recommendations.map((rec, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-medium">
                  {index + 1}
                </div>
                <span className="text-gray-700">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Spaced Repetition</h3>
          <p className="text-gray-600 mb-4">
            Review your flashcards based on your performance and retention rates.
          </p>
          <Button variant="secondary">Start Flashcard Review</Button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Focus Session</h3>
          <p className="text-gray-600 mb-4">
            Start a distraction-free study session with gamified focus tracking.
          </p>
          <Button variant="secondary">Start Focus Session</Button>
        </div>
      </div>
    </div>
  );
}
