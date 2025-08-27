import React, { useState } from 'react';
import { 
  Bell, Download, Users, Search,
  Filter, ChevronDown, MoreHorizontal,
  Shield, AlertTriangle, UserPlus
} from "lucide-react";

export default function UserManagement() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Sample data
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "active",
      lastActive: "5 minutes ago",
      groups: 3,
      reports: 12
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Moderator",
      status: "active",
      lastActive: "2 hours ago",
      groups: 2,
      reports: 8
    },
    // Add more users as needed
  ];

  const filters = [
    { label: 'All Users', value: 'all' },
    { label: 'Admins', value: 'admin' },
    { label: 'Moderators', value: 'moderator' },
    { label: 'Standard Users', value: 'standard' },
  ];

  const stats = {
    totalUsers: 1250,
    activeUsers: 892,
    pendingApprovals: 15
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">User Management</h1>
            <p className="text-gray-500 text-sm mt-1">Manage user accounts and permissions</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-100 text-black border border-gray-200 px-3 py-2 rounded-md">
              <Bell className="w-5 h-5" />
            </button>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800">
              <UserPlus className="w-4 h-4" />
              Add User
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <Users className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">Total Users</h3>
            </div>
            <p className="text-2xl font-medium text-gray-900 mb-2">{stats.totalUsers}</p>
            <p className="text-sm text-gray-500">Registered accounts</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">Active Users</h3>
            </div>
            <p className="text-2xl font-medium text-gray-900 mb-2">{stats.activeUsers}</p>
            <p className="text-sm text-gray-500">Currently active</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">Pending Approvals</h3>
            </div>
            <p className="text-2xl font-medium text-gray-900 mb-2">{stats.pendingApprovals}</p>
            <p className="text-sm text-gray-500">Awaiting review</p>
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
                placeholder="Search users..."
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

        {/* Users Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Groups
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reports
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.groups}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.reports}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
