import React from 'react';
import { 
  Bell, Printer, Shield, AlertTriangle, Users, Settings, 
  FileText, Download, Plus, Eye, Activity, ChevronRight,
  BarChart3, PieChart, TrendingUp, Clock, ArrowUpRight
} from "lucide-react";

export default function Home() {
  
  // Simple data for overview
  const statusData = {
    accountStatus: 'Active',
    totalDetections: 24,
    totalVisitedSites: 156,
    issuesFound: 12,
    lastScan: '2 hours ago'
  };

  const quickActions = [
    { label: 'View Reports', icon: FileText, action: () => console.log('View Reports'), href: '/client/report' },
    { label: 'Create Group', icon: Plus, action: () => console.log('Create Group'), href: '/client/group' },
    { label: 'Invite Member', icon: Users, action: () => console.log('Invite Member') },
    { label: 'Settings', icon: Settings, action: () => console.log('Settings') },
  ];

  const recentActivity = [
    { type: 'New Member Added', account: 'Sarah joined "Family Group"', time: '2 hours ago', status: 'success' },
    { type: 'Issue Found', account: 'John - Instagram Account', time: '1 day ago', status: 'warning' },
    { type: 'Group Created', account: '"Extended Family" group', time: '3 days ago', status: 'info' },
    { type: 'Report Generated', account: 'All Family Members', time: '1 week ago', status: 'success' },
  ];

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-2 py-4">
        {/* Header */}
        <div className=" flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">Overview</h1>
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
        <div className="border-b border-gray-200 -mx-2 mt-3 mb-6"></div>

        
        {/* Overview Analytics */}
        <div className="space-y-6 mb-6">
          {/* KPIs and Donut Chart Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {/* Total Detections */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-bold text-gray-900">{statusData.totalDetections}</p>
                      <p className="text-sm text-gray-600">Total Detections</p>
                    </div>
                    <div className="flex items-end space-x-1 h-12">
                      <div className="w-2 bg-blue-200 rounded-t h-8"></div>
                      <div className="w-2 bg-blue-300 rounded-t h-10"></div>
                      <div className="w-2 bg-blue-400 rounded-t h-6"></div>
                      <div className="w-2 bg-blue-500 rounded-t h-12"></div>
                      <div className="w-2 bg-blue-300 rounded-t h-7"></div>
                      <div className="w-2 bg-blue-200 rounded-t h-9"></div>
                    </div>
                  </div>
                </div>
                {/* Visited Sites */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-bold text-gray-900">{statusData.totalVisitedSites}</p>
                      <p className="text-sm text-gray-600">Visited Sites</p>
                    </div>
                    <div className="flex items-end space-x-1 h-12">
                      <div className="w-2 bg-green-200 rounded-t h-10"></div>
                      <div className="w-2 bg-green-300 rounded-t h-8"></div>
                      <div className="w-2 bg-green-400 rounded-t h-12"></div>
                      <div className="w-2 bg-green-500 rounded-t h-6"></div>
                      <div className="w-2 bg-green-300 rounded-t h-9"></div>
                      <div className="w-2 bg-green-200 rounded-t h-7"></div>
                    </div>
                  </div>
                </div>
                {/* Issues Found */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <AlertTriangle className="w-6 h-6 text-amber-600" />
                    </div>
                    <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-bold text-gray-900">{statusData.issuesFound}</p>
                      <p className="text-sm text-gray-600">Issues Found</p>
                    </div>
                    <div className="flex items-end space-x-1 h-12">
                      <div className="w-2 bg-amber-200 rounded-t h-6"></div>
                      <div className="w-2 bg-amber-300 rounded-t h-9"></div>
                      <div className="w-2 bg-amber-400 rounded-t h-7"></div>
                      <div className="w-2 bg-amber-500 rounded-t h-11"></div>
                      <div className="w-2 bg-amber-300 rounded-t h-8"></div>
                      <div className="w-2 bg-amber-200 rounded-t h-10"></div>
                    </div>
                  </div>
                </div>
                {/* Threat Blocked */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-bold text-gray-900">92%</p>
                      <p className="text-sm text-gray-600">Threat Blocked</p>
                    </div>
                    <div className="flex items-end space-x-1 h-12">
                      <div className="w-2 bg-purple-200 rounded-t h-8"></div>
                      <div className="w-2 bg-purple-300 rounded-t h-11"></div>
                      <div className="w-2 bg-purple-400 rounded-t h-9"></div>
                      <div className="w-2 bg-purple-500 rounded-t h-12"></div>
                      <div className="w-2 bg-purple-300 rounded-t h-7"></div>
                      <div className="w-2 bg-purple-200 rounded-t h-10"></div>
                    </div>
                  </div>
                </div>
          </div>

          {/* Detection Trend and Quick Actions Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {/* Detection Trend Graph */}
            <div className="md:col-span-3 bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-medium text-[#015763]">Detection Trend</h3>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    Weekly
                  </button>
                  <button className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    Monthly
                  </button>
                </div>
              </div>
              <div className="h-64 flex items-center justify-center text-gray-400">
                <BarChart3 className="w-6 h-6 mr-2" />
                <span>Detection trend graph will be implemented here</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="md:col-span-2 bg-gradient-to-br from-[#015763] to-[#015763]/80 rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-medium text-white">Quick Actions</h3>
              </div>
              <div className="flex flex-col space-y-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.href ? () => window.location.href = action.href : action.action}
                    className="flex items-center p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all w-full group"
                  >
                    <div className="p-2 rounded-lg">
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white ml-3">{action.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-white/70 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity - Full Width */}
        <div className="space-y-6 border border-gray-200 px-6 pt-6 mt-6 rounded-xl">
          <div className="flex items-start justify-between ">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
              <p className="text-sm text-gray-500 mt-1">Monitor your recent activities and updates</p>
            </div>
            <div className="flex items-center bg-gray-100 p-1 rounded-full">
              <button 
                className="px-4 py-2 text-sm font-medium rounded-full transition-all
                  bg-white text-gray-900 shadow-sm"
              >
                Today
              </button>
              <button 
                className="px-4 py-2 text-sm font-medium rounded-full transition-all
                  text-gray-600 hover:text-gray-900 hover:bg-white/50"
              >
                Last Week
              </button>
              <button 
                className="px-4 py-2 text-sm font-medium rounded-full transition-all
                  text-gray-600 hover:text-gray-900 hover:bg-white/50"
              >
                Last Month
              </button>
            </div>
          </div>
          <div className="bg-white ">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const getStatusColor = (status) => {
                  switch(status) {
                    case 'success': return 'bg-green-50 text-green-600';
                    case 'warning': return 'bg-amber-50 text-amber-600';
                    case 'info': return 'bg-blue-50 text-blue-600';
                    default: return 'bg-gray-50 text-gray-600';
                  }
                };
                return (
                  <div key={index} className="flex items-center space-x-3 p-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors rounded-lg">
                    <div className={`p-2 rounded-lg ${getStatusColor(activity.status)}`}>
                      <Activity className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.type}</p>
                      <p className="text-xs text-gray-500">{activity.account}</p>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Last Scan Info */}
        <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Last scan: {statusData.lastScan}</span>
          </div>
          <button className="text-sm text-gray-900 font-medium hover:text-gray-700">
            Run New Scan
          </button>
        </div>
      </div>
    </div>
  );
}

