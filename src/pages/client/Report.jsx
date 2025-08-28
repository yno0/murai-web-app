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

  const getStatusInfo = (status) => {
    switch (status) {
      case 'resolved':
        return {
          color: 'bg-[#015763]/10 text-[#015763]',
          icon: CheckCircle
        };
      case 'pending':
        return {
          color: 'bg-yellow-100 text-yellow-700',
          icon: Clock
        };
      case 'investigating':
        return {
          color: 'bg-[#015763]/20 text-[#015763]',
          icon: AlertCircle
        };
      default:
        return {
          color: 'bg-gray-100 text-gray-700',
          icon: AlertCircle
        };
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'high':
        return <AlertTriangle className="w-5 h-5 text-[#015763]" />;
      case 'medium':
        return <AlertCircle className="w-5 h-5 text-[#015763] opacity-80" />;
      case 'low':
        return <Flag className="w-5 h-5 text-[#015763] opacity-60" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-2">
        {/* Header */}
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-medium text-gray-900">Content Reports</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="w-4 h-4" />
            Export
          </button>
        </div>
        <div className="border-b border-gray-200 -mx-2"></div>

        {/* Table Header */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 mt-6 mb-6">
          {/* Search - Left side */}
          <div className="relative w-full sm:w-72">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search reports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-9 w-full rounded-md border border-gray-200 bg-white pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#015763] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          {/* Filters and Sort - Right side */}
          <div className="flex items-center space-x-2">
            {/* Filter Dropdown */}
            <div className="relative" ref={filterRef}>
              <button
                className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-gray-200 bg-white px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              >
                <Filter className="mr-2 h-4 w-4 text-[#015763]" />
                {filterOptions.find(f => f.value === activeFilter)?.label}
                <ChevronDown className={`ml-2 h-4 w-4 shrink-0 transition-transform duration-200 ${showFilterDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showFilterDropdown && (
                <div className="absolute right-0 z-10 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-md outline-none animate-in fade-in-0 zoom-in-95">
                  <div className="p-1">
                    {filterOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setActiveFilter(option.value);
                          setShowFilterDropdown(false);
                        }}
                        className={`relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 ${
                          activeFilter === option.value ? 'bg-gray-100 text-[#015763] font-medium' : 'text-gray-700'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative" ref={sortRef}>
              <button
                className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-gray-200 bg-white px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                onClick={() => setShowSortDropdown(!showSortDropdown)}
              >
                <ArrowUpDown className="mr-2 h-4 w-4 text-[#015763]" />
                {sortOptions.find(option => option.value === sortBy)?.label}
                <ChevronDown className={`ml-2 h-4 w-4 shrink-0 transition-transform duration-200 ${showSortDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showSortDropdown && (
                <div className="absolute right-0 z-10 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-md outline-none animate-in fade-in-0 zoom-in-95">
                  <div className="p-1">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setShowSortDropdown(false);
                        }}
                        className={`relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 ${
                          sortBy === option.value ? 'bg-gray-100 text-[#015763] font-medium' : 'text-gray-700'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sort Order Toggle */}
            <button
              onClick={() => {
                if (sortOrder === 'desc') {
                  setSortOrder('asc');
                } else {
                  setSortOrder('desc');
                }
              }}
              className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md border border-gray-200 bg-white text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              {sortOrder === 'desc' ? '↓' : '↑'}
            </button>
          </div>
        </div>

        {/* Reports List */}
        <div className="rounded-md border border-gray-200">
          <div className="divide-y divide-gray-200">
            {filteredReports.map((report) => (
              <div key={report.id} className="bg-white p-6 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#015763]/10 rounded-lg">
                    {getSeverityIcon(report.severity)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-sm font-medium leading-6 text-gray-900">{report.content}</h3>
                        <p className="mt-1 text-sm text-gray-500">{report.reportedText}</p>
                      </div>
                      <span 
                        className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusInfo(report.status).color}`}
                      >
                        {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3.5 w-3.5 text-[#015763]" />
                        {new Date(report.date).toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <User className="mr-1 h-3.5 w-3.5 text-[#015763]" />
                        {report.reportedBy}
                      </span>
                      <span className="flex items-center">
                        <MessageSquare className="mr-1 h-3.5 w-3.5 text-[#015763]" />
                        {report.group}
                      </span>
                    </div>
                    {report.response && (
                      <div className="mt-3 border-l-2 border-[#015763]/20 pl-3">
                        <p className="text-xs text-gray-600">
                          <span className="font-medium text-[#015763]">Response: </span>
                          {report.response}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredReports.length === 0 && (
          <div className="rounded-md border border-gray-200 bg-white">
            <div className="flex min-h-[300px] flex-col items-center justify-center text-center p-8">
              <AlertTriangle className="h-10 w-10 text-gray-400" />
              <h3 className="mt-4 text-sm font-semibold text-gray-900">No reports found</h3>
              <p className="mt-2 text-sm text-gray-500">No reports found matching your search criteria. Try adjusting your filters.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}