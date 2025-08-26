import React, { useState, useEffect, useRef } from 'react';
import { 
  AlertTriangle, Filter, Search, ChevronDown, Clock,
  CheckCircle, XCircle, AlertCircle, Flag, ArrowUpDown,
  Calendar, User, MessageSquare
} from "lucide-react";

export default function Reports() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  
  const filterRef = useRef(null);
  const sortRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilterDropdown(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setShowSortDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Mock data for reports
  const reports = [
    {
      id: 1,
      content: "Inappropriate language detected in chat",
      reportedText: "This is the flagged content that was reported",
      date: "2025-08-27T14:30:00",
      status: "resolved",
      severity: "high",
      category: "language",
      response: "Content has been blocked and user has been warned",
      group: "Family Group 1",
      reportedBy: "John Smith"
    },
    {
      id: 2,
      content: "Suspicious link detected",
      reportedText: "http://suspicious-link.com",
      date: "2025-08-27T12:15:00",
      status: "pending",
      severity: "medium",
      category: "link",
      response: null,
      group: "Family Group 2",
      reportedBy: "Jane Doe"
    },
    {
      id: 3,
      content: "Bullying content detected",
      reportedText: "Messages containing potential bullying content",
      date: "2025-08-26T18:45:00",
      status: "investigating",
      severity: "high",
      category: "harassment",
      response: "Under investigation by moderation team",
      group: "Family Group 1",
      reportedBy: "Mike Johnson"
    },
    {
      id: 4,
      content: "Age-inappropriate content",
      reportedText: "Content not suitable for age group",
      date: "2025-08-26T15:20:00",
      status: "resolved",
      severity: "medium",
      category: "content",
      response: "Content has been filtered",
      group: "Family Group 3",
      reportedBy: "Sarah Wilson"
    }
  ];

  const filterOptions = [
    { label: 'All Reports', value: 'all' },
    { label: 'Resolved', value: 'resolved' },
    { label: 'Pending', value: 'pending' },
    { label: 'Investigating', value: 'investigating' }
  ];

  const sortOptions = [
    { label: 'Date', value: 'date' },
    { label: 'Severity', value: 'severity' },
    { label: 'Status', value: 'status' }
  ];

  // Filter and sort reports
  const filteredReports = reports
    .filter(report => {
      const matchesFilter = activeFilter === 'all' || report.status === activeFilter;
      const matchesSearch = searchQuery === '' || 
        report.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.reportedText.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'date') {
        comparison = new Date(b.date) - new Date(a.date);
      } else if (sortBy === 'severity') {
        const severityOrder = { high: 3, medium: 2, low: 1 };
        comparison = severityOrder[b.severity] - severityOrder[a.severity];
      } else if (sortBy === 'status') {
        const statusOrder = { pending: 3, investigating: 2, resolved: 1 };
        comparison = statusOrder[b.status] - statusOrder[a.status];
      }
      return sortOrder === 'desc' ? comparison : -comparison;
    });

  const getStatusColor = (status) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'investigating':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'high':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'medium':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'low':
        return <Flag className="w-5 h-5 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Content Reports</h1>
        <p className="text-gray-600">View and manage all reported content from your groups</p>
      </div>

      {/* Filters and Search */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="flex space-x-2">
          <div className="relative inline-block text-left flex-1" ref={filterRef}>
            <button
              className="flex items-center justify-between w-full px-4 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-colors"
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              <Filter className="w-4 h-4 mr-2" />
              <span>{filterOptions.find(f => f.value === activeFilter)?.label}</span>
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-200 ${showFilterDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showFilterDropdown && (
              <div className="absolute left-0 w-56 mt-2 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 border border-gray-200 animate-in fade-in-0 zoom-in-95">
                <div className="py-1">
                  {filterOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setActiveFilter(option.value);
                        setShowFilterDropdown(false);
                      }}
                      className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${
                        activeFilter === option.value ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search reports..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          />
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="flex space-x-2">
          <div className="relative inline-block text-left" ref={sortRef}>
            <button
              className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-colors"
              onClick={() => setShowSortDropdown(!showSortDropdown)}
            >
              Sort by: {sortOptions.find(option => option.value === sortBy)?.label}
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-200 ${showSortDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showSortDropdown && (
              <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 border border-gray-200 animate-in fade-in-0 zoom-in-95">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setShowSortDropdown(false);
                      }}
                      className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${
                        sortBy === option.value ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => {
              if (sortOrder === 'desc') {
                setSortOrder('asc');
              } else {
                setSortOrder('desc');
              }
            }}
            className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center"
          >
            <ArrowUpDown className="w-4 h-4 mr-2" />
            {sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}
          </button>
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="divide-y divide-gray-200">
          {filteredReports.map((report) => (
            <div key={report.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  {getSeverityIcon(report.severity)}
                  <div>
                    <h3 className="font-medium">{report.content}</h3>
                    <p className="mt-1 text-sm text-gray-600">{report.reportedText}</p>
                    <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(report.date).toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {report.reportedBy}
                      </span>
                      <span className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        {report.group}
                      </span>
                    </div>
                  </div>
                </div>
                <span 
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}
                >
                  {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                </span>
              </div>
              {report.response && (
                <div className="mt-4 ml-9 pl-4 border-l-2 border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Response: </span>
                    {report.response}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {filteredReports.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No reports found matching your criteria</p>
        </div>
      )}
    </div>
  );
}