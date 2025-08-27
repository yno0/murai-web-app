import React from 'react';
import { 
  Bell, Download, Users, AlertTriangle, 
  BarChart2, Activity, Shield, Clock
} from "lucide-react";

export default function AdminDashboard() {
  // Sample data
  const stats = {
    totalUsers: 1250,
    activeIssues: 48,
    detectionRate: '94%',
    lastUpdate: '10 minutes ago'
  };

  const recentActivity = [
    { type: 'New Detection', details: 'Harmful content detected in Group A', time: '5 min ago', status: 'warning' },
    { type: 'User Report', details: 'Manual report submitted by user', time: '15 min ago', status: 'info' },
    { type: 'System Update', details: 'ML model retrained successfully', time: '1 hour ago', status: 'success' },
    { type: 'User Banned', details: 'User account restricted due to violations', time: '2 hours ago', status: 'error' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">Monitor and manage system performance</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-100 text-black border border-gray-200 px-3 py-2 rounded-md">
              <Bell className="w-5 h-5" />
            </button>
            <button className="bg-gray-100 text-black border border-gray-200 px-4 py-2 rounded-md flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Data
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <Users className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">Total Users</h3>
            </div>
            <p className="text-2xl font-medium text-gray-900 mb-2">{stats.totalUsers}</p>
            <p className="text-sm text-gray-500">Active platform users</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">Active Issues</h3>
            </div>
            <p className="text-2xl font-medium text-gray-900 mb-2">{stats.activeIssues}</p>
            <p className="text-sm text-gray-500">Pending resolution</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">Detection Rate</h3>
            </div>
            <p className="text-2xl font-medium text-gray-900 mb-2">{stats.detectionRate}</p>
            <p className="text-sm text-gray-500">Accuracy this week</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <Activity className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">System Status</h3>
            </div>
            <p className="text-2xl font-medium text-green-500 mb-2">Active</p>
            <p className="text-sm text-gray-500">All systems operational</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 border-b border-gray-100 last:border-b-0">
                <Activity className="w-4 h-4 text-gray-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.type}</p>
                  <p className="text-xs text-gray-500">{activity.details}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Last update: {stats.lastUpdate}</span>
          </div>
          <button className="text-sm text-gray-900 font-medium hover:text-gray-700">
            Refresh Data
          </button>
        </div>
      </div>
    </div>
  );
}
