import React, { useState } from 'react';
import { 
  Bell, Download, BarChart2, PieChart,
  TrendingUp, Calendar, Filter, ChevronDown,
  Users, AlertTriangle, Shield
} from "lucide-react";

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  // Sample data
  const stats = {
    totalDetections: 2456,
    accuracyRate: '95%',
    avgResponseTime: '2.3m',
    userReports: 156
  };

  const periods = [
    { label: 'Last 7 Days', value: 'week' },
    { label: 'Last 30 Days', value: 'month' },
    { label: 'Last 3 Months', value: 'quarter' },
    { label: 'Last Year', value: 'year' },
  ];

  const reports = [
    {
      title: "Detection Trends",
      description: "Weekly detection patterns",
      change: "+12.5%",
      isPositive: false
    },
    {
      title: "User Reports Accuracy",
      description: "Valid vs. false reports",
      change: "+8.2%",
      isPositive: true
    },
    {
      title: "Response Time",
      description: "Average time to resolution",
      change: "-15.3%",
      isPositive: true
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">Analytics & Reports</h1>
            <p className="text-gray-500 text-sm mt-1">Comprehensive system performance metrics</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-100 text-black border border-gray-200 px-3 py-2 rounded-md">
              <Bell className="w-5 h-5" />
            </button>
            <button className="bg-gray-100 text-black border border-gray-200 px-4 py-2 rounded-md flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>

        {/* Time Period Selector */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex gap-2">
            {periods.map((period) => (
              <button
                key={period.value}
                onClick={() => setSelectedPeriod(period.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedPeriod === period.value
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Custom Range
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">Total Detections</h3>
            </div>
            <p className="text-2xl font-medium text-gray-900 mb-2">{stats.totalDetections}</p>
            <p className="text-sm text-gray-500">This period</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">Accuracy Rate</h3>
            </div>
            <p className="text-2xl font-medium text-gray-900 mb-2">{stats.accuracyRate}</p>
            <p className="text-sm text-gray-500">Detection accuracy</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">Response Time</h3>
            </div>
            <p className="text-2xl font-medium text-gray-900 mb-2">{stats.avgResponseTime}</p>
            <p className="text-sm text-gray-500">Average response</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <Users className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">User Reports</h3>
            </div>
            <p className="text-2xl font-medium text-gray-900 mb-2">{stats.userReports}</p>
            <p className="text-sm text-gray-500">Submitted reports</p>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {reports.map((report, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{report.title}</h3>
                  <p className="text-sm text-gray-500">{report.description}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  report.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {report.change}
                </span>
              </div>
              <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
                {/* Placeholder for charts */}
                <BarChart2 className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Export Options */}
        <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Configure report parameters</span>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-200 bg-white rounded-lg text-sm font-medium hover:bg-gray-50">
              Save as Template
            </button>
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
