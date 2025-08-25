import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, AlertTriangle, TrendingUp, Clock } from 'lucide-react';

export default function Detection() {
  const [timeRange, setTimeRange] = useState('week');

  // Simple data for charts
  const detectionTrends = [
    { date: '2024-01-01', detections: 45 },
    { date: '2024-01-02', detections: 32 },
    { date: '2024-01-03', detections: 67 },
    { date: '2024-01-04', detections: 28 },
    { date: '2024-01-05', detections: 89 },
    { date: '2024-01-06', detections: 54 },
    { date: '2024-01-07', detections: 41 },
  ];

  const threatTypes = [
    { category: 'Phishing', count: 35 },
    { category: 'Malware', count: 25 },
    { category: 'Social Engineering', count: 20 },
    { category: 'Data Breach', count: 12 },
  ];

  const severityData = [
    { severity: 'Critical', count: 23 },
    { severity: 'High', count: 45 },
    { severity: 'Medium', count: 67 },
    { severity: 'Low', count: 89 },
  ];

  const recentDetections = [
    { id: 1, type: 'Phishing Email', severity: 'High', time: '2 minutes ago', status: 'Blocked' },
    { id: 2, type: 'Suspicious Login', severity: 'Medium', time: '15 minutes ago', status: 'Investigated' },
    { id: 3, type: 'Malware Detection', severity: 'Critical', time: '1 hour ago', status: 'Quarantined' },
    { id: 4, type: 'Data Exfiltration', severity: 'High', time: '2 hours ago', status: 'Blocked' },
    { id: 5, type: 'Social Engineering', severity: 'Medium', time: '3 hours ago', status: 'Reported' },
  ];

  // KPI data
  const kpiData = {
    totalThreats: 1247,
    blockedThreats: 1189,
    detectionRate: '95.3%',
    responseTime: '2.3s'
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl font-medium text-gray-900">Detection Analytics</h1>
          <p className="text-gray-500 text-sm mt-1">Security threat monitoring and analysis</p>
        </div>

        {/* KPI Cards */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-gray-200">
            <div className="flex items-center lg:pl-0">
              <span className="text-gray-400 mr-3">
                <AlertTriangle className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wide mb-1">Total Threats</h3>
                <p className="text-3xl font-medium text-gray-900">{kpiData.totalThreats}</p>
              </div>
            </div>
            <div className="flex items-center lg:pl-8">
              <span className="text-gray-400 mr-3">
                <Shield className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wide mb-1">Blocked Threats</h3>
                <p className="text-3xl font-medium text-gray-900">{kpiData.blockedThreats}</p>
              </div>
            </div>
            <div className="flex items-center lg:pl-8">
              <span className="text-gray-400 mr-3">
                <TrendingUp className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wide mb-1">Detection Rate</h3>
                <p className="text-3xl font-medium text-gray-900">{kpiData.detectionRate}</p>
              </div>
            </div>
            <div className="flex items-center lg:pl-8">
              <span className="text-gray-400 mr-3">
                <Clock className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wide mb-1">Response Time</h3>
                <p className="text-3xl font-medium text-gray-900">{kpiData.responseTime}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Detection Trends */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">Detection Trends</h2>
              <div className="flex space-x-1">
                <button
                  onClick={() => setTimeRange('week')}
                  className={`px-3 py-1 text-xs rounded ${timeRange === 'week' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Week
                </button>
                <button
                  onClick={() => setTimeRange('month')}
                  className={`px-3 py-1 text-xs rounded ${timeRange === 'month' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Month
                </button>
                <button
                  onClick={() => setTimeRange('year')}
                  className={`px-3 py-1 text-xs rounded ${timeRange === 'year' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Year
                </button>
              </div>
            </div>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={detectionTrends}>
                  <CartesianGrid stroke="#F3F4F6" strokeDasharray="0" />
                  <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12} />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="detections" 
                    stroke="#374151" 
                    strokeWidth={1.5} 
                    dot={{ fill: '#374151', r: 3 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Threat Types */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Threat Categories</h2>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={threatTypes}>
                  <CartesianGrid stroke="#F3F4F6" strokeDasharray="0" />
                  <XAxis dataKey="category" stroke="#9CA3AF" fontSize={12} />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Bar dataKey="count" fill="#374151" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Severity Distribution */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Severity Levels</h2>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={severityData} layout="horizontal">
                  <CartesianGrid stroke="#F3F4F6" strokeDasharray="0" />
                  <XAxis type="number" stroke="#9CA3AF" fontSize={12} />
                  <YAxis dataKey="severity" type="category" stroke="#9CA3AF" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Bar dataKey="count" fill="#374151" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Detections */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Recent Detections</h2>
            <div className="space-y-4">
              {recentDetections.map((detection) => (
                <div key={detection.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{detection.type}</p>
                      <p className="text-xs text-gray-500">{detection.severity} • {detection.status}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{detection.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
