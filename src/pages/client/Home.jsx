import React, { useState } from 'react';
import { 
  Bell, Printer, Shield, AlertTriangle, Users, Settings, 
  FileText, Download, Plus, Eye, Activity, ChevronRight,
  BarChart3, PieChart, TrendingUp, Clock
} from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview');
  
  // Simple data for overview
  const statusData = {
    accountStatus: 'Active',
    totalGroups: 2,
    totalMembers: 5,
    issuesFound: 12,
    lastScan: '2 hours ago'
  };

  const quickActions = [
    { label: 'View Reports', icon: FileText, action: () => console.log('View Reports'), href: '/client/report' },
    { label: 'Create Group', icon: Plus, action: () => console.log('Create Group'), href: '/client/group' },
    { label: 'Invite Member', icon: Users, action: () => console.log('Invite Member') },
    { label: 'Settings', icon: Settings, action: () => console.log('Settings') },
  ];

  const navigationSections = [
    { 
      id: 'overview', 
      label: 'Overview', 
      icon: Eye, 
      description: 'Account status and quick summary'
    },
    { 
      id: 'groups', 
      label: 'My Groups', 
      icon: Users, 
      description: 'Manage your family groups and members',
      href: '/client/group'
    },
    { 
      id: 'activity', 
      label: 'Recent Activity', 
      icon: Activity, 
      description: 'Latest scans and findings'
    },
    { 
      id: 'reports', 
      label: 'Reports & Analytics', 
      icon: BarChart3, 
      description: 'View detailed reports and insights',
      href: '/client/detections'
    },
  ];

  const recentActivity = [
    { type: 'New Member Added', account: 'Sarah joined "Family Group"', time: '2 hours ago', status: 'success' },
    { type: 'Issue Found', account: 'John - Instagram Account', time: '1 day ago', status: 'warning' },
    { type: 'Group Created', account: '"Extended Family" group', time: '3 days ago', status: 'info' },
    { type: 'Report Generated', account: 'All Family Members', time: '1 week ago', status: 'success' },
  ];

  const myGroups = [
    { 
      name: 'Family Group', 
      members: 3, 
      role: 'Admin', 
      lastActivity: '2 hours ago',
      description: 'Main family protection group'
    },
    { 
      name: 'Extended Family', 
      members: 2, 
      role: 'Admin', 
      lastActivity: '1 day ago',
      description: 'Cousins and relatives'
    },
  ];

  const groupMembers = [
    { name: 'John Pentinio', role: 'Member', accounts: 2, status: 'Protected', lastSeen: '1 hour ago' },
    { name: 'Sarah Pentinio', role: 'Member', accounts: 3, status: 'Protected', lastSeen: '3 hours ago' },
    { name: 'Mike Pentinio', role: 'Member', accounts: 1, status: 'Pending', lastSeen: '1 day ago' },
  ];

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* My Groups */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 text-gray-400 mr-2" />
                <h3 className="text-sm font-medium text-gray-900">My Groups</h3>
              </div>
              <p className="text-2xl font-medium text-gray-900 mb-2">{statusData.totalGroups}</p>
              <p className="text-sm text-gray-500">Family protection groups</p>
            </div>

            {/* Total Members */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-5 h-5 text-gray-400 mr-2" />
                <h3 className="text-sm font-medium text-gray-900">Protected Members</h3>
              </div>
              <p className="text-2xl font-medium text-gray-900 mb-2">{statusData.totalMembers}</p>
              <p className="text-sm text-gray-500">Family members under protection</p>
            </div>

            {/* Issues Found */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-5 h-5 text-gray-400 mr-2" />
                <h3 className="text-sm font-medium text-gray-900">Issues Found</h3>
              </div>
              <p className="text-2xl font-medium text-gray-900 mb-2">{statusData.issuesFound}</p>
              <p className="text-sm text-gray-500">Potential concerns detected</p>
            </div>
          </div>
        );

      case 'groups':
        return (
          <div className="space-y-6">
            {/* My Groups */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">My Groups</h3>
                <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors">
                  Create New Group
                </button>
              </div>
              <div className="space-y-4">
                {myGroups.map((group, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{group.name}</p>
                        <p className="text-sm text-gray-500">{group.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{group.members} members</p>
                      <p className="text-xs text-gray-500">Role: {group.role}</p>
                      <p className="text-xs text-gray-500">Last activity: {group.lastActivity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Group Members */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">Group Members</h3>
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  Invite Member
                </button>
              </div>
              <div className="space-y-4">
                {groupMembers.map((member, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-600">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.accounts} accounts • {member.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{member.status}</p>
                      <p className="text-xs text-gray-500">Last seen: {member.lastSeen}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'activity':
        return (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border-b border-gray-100 last:border-b-0">
                  <Activity className="w-4 h-4 text-gray-400" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.type}</p>
                    <p className="text-xs text-gray-500">{activity.account}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'reports':
        return (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Reports & Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/client/detections" className="block p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">Detection Analytics</p>
                      <p className="text-sm text-gray-500">View detailed threat analysis</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </a>
              <a href="/client/report" className="block p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">Generate Report</p>
                      <p className="text-sm text-gray-500">Create comprehensive reports</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </a>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">Welcome back, Mhark!</h1>
            <p className="text-gray-500 text-sm mt-1">Your social media protection dashboard</p>
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

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.href ? () => window.location.href = action.href : action.action}
                className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <action.icon className="w-6 h-6 text-gray-400 mb-2" />
                <span className="text-sm font-medium text-gray-900">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => section.href ? window.location.href = section.href : setActiveSection(section.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeSection === section.id && !section.href
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Section Content */}
        <div className="mb-8">
          {renderSectionContent()}
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

