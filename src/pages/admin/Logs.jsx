import React, { useState } from 'react';
import { 
  Bell, Download, Activity, Search,
  Filter, ChevronDown, Clock,
  AlertTriangle, CheckCircle, XCircle,
  RefreshCw
} from "lucide-react";

export default function Logs() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Sample data
  const logs = [
    {
      id: 1,
      type: "system",
      action: "Model Retraining",
      description: "ML model successfully retrained with new dataset",
      timestamp: "10 minutes ago",
      status: "success"
    },
    {
      id: 2,
      type: "moderation",
      action: "Content Removed",
      description: "Harmful content removed from Group A",
      timestamp: "1 hour ago",
      status: "warning"
    },
    {
      id: 3,
      type: "user",
      action: "User Banned",
      description: "User account restricted due to multiple violations",
      timestamp: "2 hours ago",
      status: "error"
    },
    // Add more logs as needed
  ];

  const filters = [
    { label: 'All Logs', value: 'all' },
    { label: 'System', value: 'system' },
    { label: 'Moderation', value: 'moderation' },
    { label: 'User', value: 'user' },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Activity className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">System Logs</h1>
            <p className="text-gray-500 text-sm mt-1">Monitor system activities and events</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-100 text-black border border-gray-200 px-3 py-2 rounded-md">
              <Bell className="w-5 h-5" />
            </button>
            <button className="bg-gray-100 text-black border border-gray-200 px-4 py-2 rounded-md flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Logs
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
                placeholder="Search logs..."
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

        {/* Logs List */}
        <div className="bg-white rounded-lg border border-gray-200">
          {logs.map((log, index) => (
            <div
              key={log.id}
              className={`p-6 ${
                index !== logs.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {getStatusIcon(log.status)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      log.type === 'system' ? 'bg-blue-100 text-blue-700' :
                      log.type === 'moderation' ? 'bg-purple-100 text-purple-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {log.type.charAt(0).toUpperCase() + log.type.slice(1)}
                    </span>
                    <span className="text-sm font-medium text-gray-900">{log.action}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{log.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600">{log.description}</p>
                </div>
                <button className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Auto-refresh Status */}
        <div className="mt-6 bg-gray-50 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Auto-refreshing every 30 seconds</span>
          </div>
          <button className="text-sm text-gray-900 font-medium hover:text-gray-700 flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Refresh Now
          </button>
        </div>
      </div>
    </div>
  );
}
