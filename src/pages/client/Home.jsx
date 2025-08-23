import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, AreaChart, Area
} from 'recharts';
import { Bell, Printer, CircleDot, Percent, MonitorDot, TrendingUp } from "lucide-react";

// Dummy data - replace with actual API data later
const trendData = [
  { date: '2024-03-01', detections: 7 },
  { date: '2024-03-02', detections: 15 },
  { date: '2024-03-03', detections: 12 },
  { date: '2024-03-04', detections: 17 },
  { date: '2024-03-05', detections: 16 },
  { date: '2024-03-06', detections: 20 },
  { date: '2024-03-07', detections: 14 },
];

const sourceData = [
  { 
    source: 'Facebook',
    detections: [4, 7, 5, 8, 6, 9, 4],
    total: 43,
    percentage: 40
  },
  {
    source: 'Twitter',
    detections: [2, 5, 6, 4, 7, 5, 8],
    total: 37,
    percentage: 35
  },
  {
    source: 'Instagram',
    detections: [1, 3, 4, 5, 3, 6, 2],
    total: 24,
    percentage: 25
  }
];

const categoryData = [
  { category: 'Harassment', count: 45 },
  { category: 'Hate Speech', count: 32 },
  { category: 'Misinformation', count: 28 },
  { category: 'Spam', count: 15 },
];

const languageData = [
  { language: 'English', percentage: 45 },
  { language: 'Tagalog', percentage: 35 },
  { language: 'Mixed', percentage: 20 },
];

const sourceDistribution = [
  { source: 'Facebook', count: 156 },
  { source: 'Twitter', count: 89 },
  { source: 'Instagram', count: 67 },
];

export default function Home() {
  const [timeRange, setTimeRange] = useState('week');
  
  // Dummy KPI data - replace with actual data
  const kpiData = {
    totalDetections: 156,
    averageScore: 85,
    activeMonitoring: 12,
    detectionRate: '92%'
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Greeting Section */}
        <div className="mb-12 flex justify-between">
          <div>
          <h1 className="text-2xl font-medium text-gray-900">Welcome back to MURAi, Mhark!</h1>
          <p className="text-gray-500 text-sm mt-1">Here's your dashboard overview</p>
          </div>
          <div className='flex gap-2 h-10'>
           <button className="bg-gray-100 text-black border border-gray-200 px-3 py-2 rounded-md">
             <Bell className="w-5 h-5" />
           </button>
           <button className="bg-gray-100 text-black border border-gray-200 px-4 py-2 rounded-md flex items-center gap-2">
             <Printer className="w-4 h-4" />
             Print
           </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-gray-200">
            <div className="flex items-center lg:pl-0">
              <span className="text-gray-400 mr-3">
                <CircleDot className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wide mb-1">Total Detections</h3>
                <p className="text-3xl font-medium text-gray-900">{kpiData.totalDetections}</p>
              </div>
            </div>
            <div className="flex items-center lg:pl-8">
              <span className="text-gray-400 mr-3">
                <Percent className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wide mb-1">Average Score</h3>
                <p className="text-3xl font-medium text-gray-900">{kpiData.averageScore}%</p>
              </div>
            </div>
            <div className="flex items-center lg:pl-8">
              <span className="text-gray-400 mr-3">
                <MonitorDot className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wide mb-1">Active Monitoring</h3>
                <p className="text-3xl font-medium text-gray-900">{kpiData.activeMonitoring}</p>
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
          </div>
        </div>

        {/* Graph Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Overall Detection Trend */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">Detection Trend</h2>
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
                <LineChart data={trendData}>
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

          {/* Source Distribution */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Distribution by Source</h2>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={sourceData}
                  layout="horizontal"
                  margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                >
                  <CartesianGrid stroke="#F3F4F6" strokeDasharray="0" />
                  <XAxis type="number" stroke="#9CA3AF" fontSize={12} />
                  <YAxis dataKey="source" type="category" stroke="#9CA3AF" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Bar 
                    dataKey="total" 
                    fill="#374151"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Detection Categories</h2>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData}>
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

          {/* Language Distribution */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Language Distribution</h2>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={languageData} layout="horizontal">
                  <CartesianGrid stroke="#F3F4F6" strokeDasharray="0" />
                  <XAxis type="number" stroke="#9CA3AF" fontSize={12} />
                  <YAxis dataKey="language" type="category" stroke="#9CA3AF" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Bar dataKey="percentage" fill="#374151" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

