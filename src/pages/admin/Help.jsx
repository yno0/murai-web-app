import React from 'react';
import { 
  Bell, Download, BookOpen,
  FileText, Users, Settings,
  HelpCircle, Mail
} from "lucide-react";

export default function Help() {
  const helpSections = [
    {
      title: "Getting Started",
      icon: BookOpen,
      items: [
        { title: "Admin Dashboard Overview", link: "#" },
        { title: "Managing User Accounts", link: "#" },
        { title: "Content Moderation Guidelines", link: "#" },
        { title: "System Configuration", link: "#" }
      ]
    },
    {
      title: "Content Management",
      icon: FileText,
      items: [
        { title: "Reviewing Flagged Content", link: "#" },
        { title: "Processing User Reports", link: "#" },
        { title: "Content Filtering Rules", link: "#" },
        { title: "Export and Reporting", link: "#" }
      ]
    },
    {
      title: "User Management",
      icon: Users,
      items: [
        { title: "User Roles and Permissions", link: "#" },
        { title: "Managing Groups", link: "#" },
        { title: "User Activity Monitoring", link: "#" },
        { title: "Account Restrictions", link: "#" }
      ]
    },
    {
      title: "System Settings",
      icon: Settings,
      items: [
        { title: "System Configuration", link: "#" },
        { title: "API Integration", link: "#" },
        { title: "Notification Settings", link: "#" },
        { title: "Backup and Recovery", link: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">Help Center</h1>
            <p className="text-gray-500 text-sm mt-1">Documentation and guides for administrators</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-100 text-black border border-gray-200 px-3 py-2 rounded-md">
              <Bell className="w-5 h-5" />
            </button>
            <button className="bg-gray-100 text-black border border-gray-200 px-4 py-2 rounded-md flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Guide
            </button>
          </div>
        </div>

        {/* Quick Help */}
        <div className="mb-8 bg-gray-50 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white rounded-lg">
              <HelpCircle className="w-6 h-6 text-gray-400" />
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">Need immediate assistance?</h2>
              <p className="text-gray-600 mb-4">Our support team is available 24/7 to help you with any questions or issues.</p>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors">
                <Mail className="w-4 h-4" />
                Contact Support
              </button>
            </div>
          </div>
        </div>

        {/* Help Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {helpSections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <section.icon className="w-5 h-5 text-gray-400" />
                <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.link}
                      className="block text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-8 bg-gray-50 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Check out our video tutorials and webinars</span>
          </div>
          <button className="text-sm text-gray-900 font-medium hover:text-gray-700">
            View Resources
          </button>
        </div>
      </div>
    </div>
  );
}
