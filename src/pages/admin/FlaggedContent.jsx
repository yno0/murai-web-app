import React, { useState } from 'react';
import { 
  Bell, Download, AlertTriangle, Check, X,
  Filter, Search, ChevronDown, MoreHorizontal
} from "lucide-react";

export default function FlaggedContent() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Sample data
  const flaggedItems = [
    {
      id: 1,
      content: "This is inappropriate content that was flagged...",
      user: "john_doe",
      platform: "Instagram",
      timestamp: "10 minutes ago",
      severity: "high",
      status: "pending"
    },
    {
      id: 2,
      content: "Another flagged content example...",
      user: "jane_smith",
      platform: "Facebook",
      timestamp: "1 hour ago",
      severity: "medium",
      status: "pending"
    },
    // Add more items as needed
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'High Severity', value: 'high' },
    { label: 'Medium Severity', value: 'medium' },
    { label: 'Low Severity', value: 'low' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">Flagged Content</h1>
            <p className="text-gray-500 text-sm mt-1">Review and manage flagged content</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-100 text-black border border-gray-200 px-3 py-2 rounded-md">
              <Bell className="w-5 h-5" />
            </button>
            <button className="bg-gray-100 text-black border border-gray-200 px-4 py-2 rounded-md flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </button>
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
                placeholder="Search content..."
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

        {/* Content List */}
        <div className="bg-white rounded-lg border border-gray-200">
          {flaggedItems.map((item, index) => (
            <div
              key={item.id}
              className={`p-6 ${
                index !== flaggedItems.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.severity === 'high' ? 'bg-red-100 text-red-700' :
                      item.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {item.severity.charAt(0).toUpperCase() + item.severity.slice(1)} Severity
                    </span>
                    <span className="text-sm text-gray-500">{item.platform}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{item.timestamp}</span>
                  </div>
                  <p className="text-gray-900 mb-2">{item.content}</p>
                  <p className="text-sm text-gray-500">Reported by: {item.user}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg hover:bg-green-50 text-green-600 transition-colors">
                    <Check className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors">
                    <X className="w-5 h-5" />
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
