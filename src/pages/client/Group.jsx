import React, { useState, useRef, useEffect } from 'react';
import { MoreHorizontal, Plus, Users, Eye, Edit, Trash2, UserPlus, Clock } from 'lucide-react';
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

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [groupToDelete, setGroupToDelete] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [groupToEdit, setGroupToEdit] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [groupName, setGroupName] = useState('');

  const handleAction = (action, group) => {
    setActiveMenu(null); // Close menu
    switch (action) {
      case 'view':
                 navigate(`/client/group-details/${group.id}`);
        break;
      case 'edit':
        setGroupToEdit(group);
        setGroupName(group.name);
        setShowEditModal(true);
        break;
      case 'delete':
        setGroupToDelete(group);
        setShowDeleteModal(true);
        break;
      default:
        break;
    }
  };

  const handleDelete = async () => {
    if (!groupToDelete) return;
    
    try {
      // TODO: Implement delete API call
      console.log('Deleting group:', groupToDelete.id);
      setShowDeleteModal(false);
      setGroupToDelete(null);
      // Refresh groups list
    } catch (error) {
      console.error('Failed to delete group:', error);
    }
  };

  const handleEdit = async () => {
    if (!groupToEdit) return;
    
    try {
      // TODO: Implement edit API call
      console.log('Editing group:', groupToEdit.id, 'new name:', groupName);
      setShowEditModal(false);
      setGroupToEdit(null);
      setGroupName('');
      // Refresh groups list
    } catch (error) {
      console.error('Failed to edit group:', error);
    }
  };

  const handleCreate = async () => {
    try {
      // TODO: Implement create API call
      console.log('Creating group:', groupName);
      setShowCreateModal(false);
      setGroupName('');
      // Refresh groups list
    } catch (error) {
      console.error('Failed to create group:', error);
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
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-2">
        {/* Header */}
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-medium text-gray-900">Groups</h1>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#015763] text-white hover:bg-[#015763]/90 h-9 px-4 py-2"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Group
          </button>
        </div>
        <div className="border-b border-gray-200 -mx-2"></div>

        {/* Groups List */}
        <div className="rounded-md border border-gray-200 mt-6">
          <div className="divide-y divide-gray-200">
            {groups.map((group) => (
              <div 
                key={group.id}
                className="bg-white hover:bg-gray-50/50 transition-colors"
              >
                <div 
                  className="p-6 flex items-center cursor-pointer"
                                     onClick={() => navigate(`/client/group-details/${group.id}`)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-[#015763]/10 rounded-lg">
                        <Users className="w-5 h-5 text-[#015763]" />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900">{group.name}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Users className="w-3.5 h-3.5 mr-1 text-[#015763]" />
                        {group.members} members
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1 text-[#015763]" />
                        Last active: {new Date(group.lastActive).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="relative" ref={menuRef}>
                    <button 
                                             className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ml-4"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card click when clicking menu
                        setActiveMenu(activeMenu === group.id ? null : group.id);
                      }}
                    >
                      <MoreHorizontal className="h-4 w-4 text-gray-500" />
                    </button>

                    {/* Dropdown Menu */}
                    {activeMenu === group.id && (
                                            <div className="absolute right-0 z-50 min-w-[12rem] overflow-hidden rounded-md border border-gray-200 bg-white p-2 shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
                        <div className="relative">
                          <button
                             className="relative flex w-full select-none items-center rounded-md px-3 py-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-gray-100 hover:text-gray-900 text-gray-700"
                             onClick={(e) => {
                               e.stopPropagation();
                               handleAction('view', group);
                             }}
                          >
                            <Eye className="mr-2 h-3.5 w-3.5 text-gray-500" />
                            <span>View Details</span>
                          </button>
                          <button
                                                         className="relative flex w-full select-none items-center rounded-md px-3 py-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-gray-100 hover:text-gray-900 text-gray-700"
                             onClick={(e) => {
                               e.stopPropagation();
                               handleAction('edit', group);
                             }}
                          >
                            <Edit className="mr-2 h-3.5 w-3.5 text-gray-500" />
                            <span>Edit Group</span>
                          </button>
                          <button
                                                         className="relative flex w-full select-none items-center rounded-md px-3 py-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-gray-100 hover:text-gray-900 text-gray-700"
                             onClick={(e) => {
                               e.stopPropagation();
                               setActiveMenu(null); // Close the dropdown
                               setActiveGroup(group); // Set the active group
                               setShowInviteModal(true); // Show the invite modal
                             }}
                          >
                            <UserPlus className="mr-2 h-3.5 w-3.5 text-gray-500" />
                            <span>Invite Members</span>
                          </button>
                          <div className="my-2 h-px bg-gray-200"></div>
                          <button
                                                         className="relative flex w-full select-none items-center rounded-md px-3 py-2 text-sm outline-none transition-colors focus:bg-red-50 focus:text-red-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-red-50 hover:text-red-900 text-red-600"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAction('delete', group);
                            }}
                          >
                            <Trash2 className="mr-2 h-3.5 w-3.5 text-red-600" />
                            <span>Delete Group</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {groups.length === 0 && (
          <div className="rounded-md border border-gray-200 bg-white">
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 rounded-full bg-[#015763]/10 flex items-center justify-center mb-4">
                <Users className="w-10 h-10 text-[#015763]" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No Groups Yet</h3>
              <p className="mt-2 text-sm text-gray-500 max-w-sm">Create your first group to start managing team access and collaboration settings.</p>
              <button 
                onClick={() => setShowCreateModal(true)}
                className="mt-6 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#015763] text-white hover:bg-[#015763]/90 h-9 px-4 py-2"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Group
              </button>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && groupToDelete && (
          <div className="fixed inset-0 bg-black/50 z-50">
            <div className="fixed inset-0 overflow-y-auto">
              <div className="min-h-full flex items-center justify-center p-4">
                <div className="relative bg-white w-full max-w-md rounded-lg shadow-lg animate-in fade-in-0 zoom-in-95">
                  <div className="p-4">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="p-3 rounded-full bg-red-100">
                        <Trash2 className="h-6 w-6 text-red-600" />
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900">Delete Group</h2>
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete "{groupToDelete.name}"? This action cannot be undone.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 border-t p-4">
                    <button
                      onClick={() => {
                        setShowDeleteModal(false);
                        setGroupToDelete(null);
                      }}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 h-9 px-4 py-2"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleDelete}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-600 text-white hover:bg-red-700 h-9 px-4 py-2"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Group Modal */}
        {showEditModal && groupToEdit && (
          <div className="fixed inset-0 bg-black/50 z-50">
            <div className="fixed inset-0 overflow-y-auto">
              <div className="min-h-full flex items-center justify-center p-4">
                <div className="relative bg-white w-full max-w-lg rounded-lg shadow-lg animate-in fade-in-0 zoom-in-95">
                  <div className="flex items-center justify-between border-b px-4 py-3">
                    <h2 className="text-lg font-semibold leading-none">Edit Group</h2>
                    <button
                      onClick={() => {
                        setShowEditModal(false);
                        setGroupToEdit(null);
                        setGroupName('');
                      }}
                      className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#015763] focus:ring-offset-2 disabled:pointer-events-none"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Group Name
                        </label>
                        <input
                          type="text"
                          value={groupName}
                          onChange={(e) => setGroupName(e.target.value)}
                          className="flex h-9 w-full rounded-md border border-gray-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#015763] disabled:cursor-not-allowed disabled:opacity-50 mt-1.5"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 border-t p-4">
                    <button
                      onClick={() => {
                        setShowEditModal(false);
                        setGroupToEdit(null);
                        setGroupName('');
                      }}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 h-9 px-4 py-2"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleEdit}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#015763] text-white hover:bg-[#015763]/90 h-9 px-4 py-2"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Create Group Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 z-50">
            <div className="fixed inset-0 overflow-y-auto">
              <div className="min-h-full flex items-center justify-center p-4">
                <div className="relative bg-white w-full max-w-lg rounded-lg shadow-lg animate-in fade-in-0 zoom-in-95">
                  <div className="flex items-center justify-between border-b px-4 py-3">
                    <h2 className="text-lg font-semibold leading-none">Create New Group</h2>
                    <button
                      onClick={() => {
                        setShowCreateModal(false);
                        setGroupName('');
                      }}
                      className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#015763] focus:ring-offset-2 disabled:pointer-events-none"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Group Name
                        </label>
                        <input
                          type="text"
                          value={groupName}
                          onChange={(e) => setGroupName(e.target.value)}
                          placeholder="Enter group name"
                          className="flex h-9 w-full rounded-md border border-gray-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#015763] disabled:cursor-not-allowed disabled:opacity-50 mt-1.5"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 border-t p-4">
                    <button
                      onClick={() => {
                        setShowCreateModal(false);
                        setGroupName('');
                      }}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 h-9 px-4 py-2"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleCreate}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#015763] text-white hover:bg-[#015763]/90 h-9 px-4 py-2"
                    >
                      Create Group
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Invite Modal */}
        {showInviteModal && activeGroup && (
          <div className="fixed inset-0 bg-black/50 z-50">
            <div className="fixed inset-0 overflow-y-auto">
              <div className="min-h-full flex items-center justify-center p-4">
                <div className="relative bg-white w-full max-w-lg rounded-lg shadow-lg animate-in fade-in-0 zoom-in-95">
                  {/* Modal Header */}
                  <div className="flex items-center justify-between border-b px-4 py-3">
                    <h2 className="text-lg font-semibold leading-none">
                      Invite Members to {activeGroup.name}
                    </h2>
                    <button
                      onClick={() => setShowInviteModal(false)}
                      className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#015763] focus:ring-offset-2 disabled:pointer-events-none"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Modal Body */}
                  <div className="p-4">
                    {/* Invite Method Selector */}
                    <div className="flex gap-2 mb-6">
                      <button
                        className={`flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 ${
                          inviteMethod === 'code'
                            ? 'bg-[#015763] text-white'
                            : 'border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900'
                        }`}
                        onClick={() => setInviteMethod('code')}
                      >
                        Invitation Code
                      </button>
                      <button
                        className={`flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 ${
                          inviteMethod === 'email'
                            ? 'bg-[#015763] text-white'
                            : 'border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900'
                        }`}
                        onClick={() => setInviteMethod('email')}
                      >
                        Email Invites
                      </button>
                    </div>

                    {/* Invitation Code Section */}
                    {inviteMethod === 'code' && (
                      <div>
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Share this code with your team members
                        </label>
                        <div className="flex gap-2 mt-2">
                          <input
                            type="text"
                            readOnly
                            value={invitationCode}
                            className="flex h-9 w-full rounded-md border border-gray-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#015763] disabled:cursor-not-allowed disabled:opacity-50 font-mono text-center"
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
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#015763] text-white hover:bg-[#015763]/90 h-9 px-4 py-2"
                          >
                            Copy
                          </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          This code will expire in 7 days
                        </p>
                      </div>
                    )}

                    {/* Email Invites Section */}
                    {inviteMethod === 'email' && (
                      <div>
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Enter email addresses (one per line)
                        </label>
                        <textarea
                          value={emails}
                          onChange={(e) => setEmails(e.target.value)}
                          placeholder="john@example.com&#10;jane@example.com"
                          className="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#015763] disabled:cursor-not-allowed disabled:opacity-50 mt-2"
                        />
                        <p className="text-sm text-gray-500 mt-2">
                          Separate multiple email addresses with a new line
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Modal Footer */}
                  <div className="flex items-center justify-end gap-2 border-t p-4">
                    <button
                      onClick={() => setShowInviteModal(false)}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 h-9 px-4 py-2"
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
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#015763] text-white hover:bg-[#015763]/90 h-9 px-4 py-2"
                      >
                        Send Invites
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}