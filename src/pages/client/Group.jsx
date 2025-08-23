import React, { useState, useRef, useEffect } from 'react';
import { MoreHorizontal, Plus, Users, Eye, Edit, Trash2, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Group() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);
  const [inviteMethod, setInviteMethod] = useState('code'); // 'code' or 'email'
  const [emails, setEmails] = useState('');
  const menuRef = useRef(null);
  
  // Generate a random invitation code (you might want to replace this with your actual code generation logic)
  const invitationCode = "MURAI-" + Math.random().toString(36).substring(2, 8).toUpperCase();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    }
    if (document) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  // Close modal on escape key
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setShowInviteModal(false);
        setActiveMenu(null);
      }
    }
    if (document) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, []);

  const handleAction = (action, groupId) => {
    setActiveMenu(null); // Close menu
    switch (action) {
      case 'view':
        navigate(`/group-details/${groupId}`);
        break;
      case 'edit':
        navigate(`/edit-group/${groupId}`);
        break;
      case 'delete':
        // Add delete confirmation logic here
        console.log('Delete group:', groupId);
        break;
      default:
        break;
    }
  };

  const handleInvite = async (emails) => {
    if (!activeGroup) {
      console.error('No active group selected');
      return;
    }

    try {
      // TODO: Implement your API call here
      console.log('Sending invites to:', emails, 'for group:', activeGroup.name);
      // Example API call:
      // await api.sendInvites(activeGroup.id, emails);
      
      // Close modal and show success message
      setShowInviteModal(false);
      setEmails(''); // Reset emails input
      // You might want to add a toast notification here
    } catch (error) {
      console.error('Failed to send invites:', error);
      // Handle error (show error message)
    }
  };
  
  // Example groups data - replace with your actual data
  const [groups] = useState([
    { id: 1, name: 'Marketing Team', members: 10, lastActive: '2024-03-15' },
    { id: 2, name: 'Development Team', members: 8, lastActive: '2024-03-14' },
    { id: 3, name: 'Content Moderators', members: 5, lastActive: '2024-03-13' },
  ]);
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Groups</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your groups and their settings</p>
        </div>
        <button 
          onClick={() => navigate('/create-group')}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Create Group
        </button>
      </div>

      {/* Groups List */}
      <div className="space-y-4">
        {groups.map((group) => (
          <div 
            key={group.id}
            className="group border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-200 bg-white"
          >
            {/* Make the entire card clickable except the menu button */}
            <div 
              className="p-6 flex items-center cursor-pointer"
              onClick={() => navigate(`/group-details/${group.id}`)}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <h3 className="text-lg font-medium text-gray-900">{group.name}</h3>
                </div>
                <div className="flex items-center gap-6">
                  <p className="text-gray-500 text-sm">
                    {group.members} members
                  </p>
                  <p className="text-gray-500 text-sm">
                    Last active: {new Date(group.lastActive).toLocaleDateString()}
                  </p>
                </div>
              </div>
              
              <div className="relative" ref={menuRef}>
                <button 
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors ml-4"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click when clicking menu
                    setActiveMenu(activeMenu === group.id ? null : group.id);
                  }}
                >
                  <MoreHorizontal className="w-5 h-5 text-gray-500" />
                </button>

                {/* Dropdown Menu */}
                {activeMenu === group.id && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                    <button
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAction('view', group.id);
                      }}
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    <button
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAction('edit', group.id);
                      }}
                    >
                      <Edit className="w-4 h-4" />
                      <span>Edit Group</span>
                    </button>
                    <button
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenu(null); // Close the dropdown
                        setActiveGroup(group); // Set the active group
                        setShowInviteModal(true); // Show the invite modal
                      }}
                    >
                      <UserPlus className="w-4 h-4" />
                      <span>Invite Members</span>
                    </button>
                    <div className="border-t border-gray-200 my-1"></div>
                    <button
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAction('delete', group.id);
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete Group</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {groups.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Groups Yet</h3>
          <p className="text-gray-500 mb-4">Create your first group to start managing team access</p>
          <button 
            onClick={() => navigate('/create-group')}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors mx-auto"
          >
            <Plus className="w-5 h-5" />
            Create Group
          </button>
        </div>
      )}

      {/* Invite Modal */}
      {showInviteModal && activeGroup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg mx-4">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">
                  Invite Members to {activeGroup.name}
                </h2>
                <button
                  onClick={() => setShowInviteModal(false)}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Invite Method Selector */}
              <div className="flex gap-4 mb-6">
                <button
                  className={`flex-1 py-2 px-4 rounded-lg border ${
                    inviteMethod === 'code'
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  } transition-colors`}
                  onClick={() => setInviteMethod('code')}
                >
                  Invitation Code
                </button>
                <button
                  className={`flex-1 py-2 px-4 rounded-lg border ${
                    inviteMethod === 'email'
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  } transition-colors`}
                  onClick={() => setInviteMethod('email')}
                >
                  Email Invites
                </button>
              </div>

              {/* Invitation Code Section */}
              {inviteMethod === 'code' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Share this code with your team members
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      readOnly
                      value={invitationCode}
                      className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-mono text-lg text-center"
                    />
                    <button
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(invitationCode);
                          // You could add a temporary "Copied!" message here
                        } catch (err) {
                          console.error('Failed to copy:', err);
                        }
                      }}
                      className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    This code will expire in 7 days
                  </p>
                </div>
              )}

              {/* Email Invites Section */}
              {inviteMethod === 'email' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter email addresses (one per line)
                  </label>
                  <textarea
                    value={emails}
                    onChange={(e) => setEmails(e.target.value)}
                    placeholder="john@example.com&#10;jane@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 min-h-[120px]"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Separate multiple email addresses with a new line
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowInviteModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              {inviteMethod === 'email' && (
                <button
                  onClick={() => {
                    const emailList = emails.split('\n')
                      .map(email => email.trim())
                      .filter(email => email.length > 0);
                    handleInvite(emailList);
                  }}
                  className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Send Invites
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}