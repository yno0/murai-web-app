import React, { useState } from 'react';
import { 
  Bell, Download, FileText, Check, X,
  Filter, Search, ChevronDown, MoreHorizontal,
  AlertTriangle, ThumbsUp, ThumbsDown
} from "lucide-react";

export default function UserReports() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Sample data
  const reports = [
    {
      id: 1,
      content: "Reported inappropriate language in group chat",
      reporter: "sarah_jones",
      reportedUser: "user123",
      platform: "Instagram",
      timestamp: "2 hours ago",
      status: "pending",
      type: "language",
      evidence: "Screenshot attached"
    },
    {
      id: 2,
      content: "Suspicious behavior detected in comments",
      reporter: "mike_smith",
      reportedUser: "user456",
      platform: "Facebook",
      timestamp: "5 hours ago",
      status: "pending",
      type: "behavior",
      evidence: "Multiple screenshots"
    },
  ];

  const filters = [
    { label: 'All Reports', value: 'all' },
    { label: 'Language', value: 'language' },
    { label: 'Behavior', value: 'behavior' },
    { label: 'Other', value: 'other' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">User Reports</h1>
            <p className="text-gray-500 text-sm mt-1">Review and validate user-submitted reports</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-100 text-black border border-gray-200 px-3 py-2 rounded-md">
              <Bell className="w-5 h-5" />
            </button>
            <button className="bg-gray-100 text-black border border-gray-200 px-4 py-2 rounded-md flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Reports
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <FileText className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">Total Reports</h3>
            </div>
            <p className="text-2xl font-medium text-gray-900 mb-2">156</p>
            <p className="text-sm text-gray-500">This month</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <ThumbsUp className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">Valid Reports</h3>
            </div>
            <p className="text-2xl font-medium text-gray-900 mb-2">89%</p>
            <p className="text-sm text-gray-500">Accuracy rate</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">Pending Review</h3>
            </div>
            <p className="text-2xl font-medium text-gray-900 mb-2">23</p>
            <p className="text-sm text-gray-500">Requires attention</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedFilter === filter.value
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search reports..."
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm flex items-center gap-2">
              <Filter className="w-4 h-4" />
              More Filters
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Reports List */}
        <div className="bg-white rounded-lg border border-gray-200">
          {reports.map((report, index) => (
            <div
              key={report.id}
              className={`p-6 ${
                index !== reports.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      {report.type.charAt(0).toUpperCase() + report.type.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">{report.platform}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{report.timestamp}</span>
                  </div>
                  <p className="text-gray-900 mb-2">{report.content}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Reporter: {report.reporter}</span>
                    <span>•</span>
                    <span>Reported User: {report.reportedUser}</span>
                    <span>•</span>
                    <span>Evidence: {report.evidence}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    className="px-3 py-1.5 rounded-lg bg-green-50 text-green-600 text-sm font-medium hover:bg-green-100 transition-colors"
                    title="Mark as Valid"
                  >
                    Valid Report
                  </button>
                  <button 
                    className="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition-colors"
                    title="Mark as Invalid"
                  >
                    False Report
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
