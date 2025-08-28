import React from 'react'; 
import { Users, Shield, AlertTriangle, Clock, ArrowLeft, Settings, UserPlus } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const GroupDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Mock data - replace with actual data fetch
    const groupData = {
        name: 'Marketing Team',
        members: 10,
        lastActive: '2024-03-15',
        totalDetections: 1247,
        activeMonitoring: 156,
        riskScore: 82,
        members: [
            { id: 1, name: 'John Smith', email: 'john@example.com', role: 'Admin', status: 'active', joinedAt: '2024-01-15' },
            { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'Member', status: 'active', joinedAt: '2024-02-01' },
            { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Member', status: 'inactive', joinedAt: '2024-02-15' },
        ]
    };

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-2">
                {/* Header */}
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/groups')}
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-100 h-9 w-9"
                        >
                            <ArrowLeft className="h-4 w-4" />
                        </button>
                        <div>
                            <h1 className="text-2xl font-medium text-gray-900">{groupData.name}</h1>
                            <p className="text-sm text-gray-500">Manage group details and members</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => {/* Handle settings */}}
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 bg-white hover:bg-gray-100 h-9 px-4 py-2"
                        >
                            <Settings className="h-4 w-4 mr-2" />
                            Settings
                        </button>
                        <button
                            onClick={() => {/* Handle invite */}}
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#015763] text-white hover:bg-[#015763]/90 h-9 px-4 py-2"
                        >
                            <UserPlus className="h-4 w-4 mr-2" />
                            Invite Members
                        </button>
                    </div>
                </div>
                <div className="border-b border-gray-200 -mx-2"></div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 bg-[#015763]/10 rounded-lg">
                                <Shield className="h-4 w-4 text-[#015763]" />
                            </div>
                            <span className="text-sm font-medium text-gray-500">Total Detections</span>
                        </div>
                        <p className="text-2xl font-semibold text-gray-900">{groupData.totalDetections}</p>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 bg-[#015763]/10 rounded-lg">
                                <Users className="h-4 w-4 text-[#015763]" />
                            </div>
                            <span className="text-sm font-medium text-gray-500">Active Members</span>
                        </div>
                        <p className="text-2xl font-semibold text-gray-900">{groupData.members}</p>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 bg-[#015763]/10 rounded-lg">
                                <AlertTriangle className="h-4 w-4 text-[#015763]" />
                            </div>
                            <span className="text-sm font-medium text-gray-500">Risk Score</span>
                        </div>
                        <p className="text-2xl font-semibold text-gray-900">{groupData.riskScore}%</p>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 bg-[#015763]/10 rounded-lg">
                                <Clock className="h-4 w-4 text-[#015763]" />
                            </div>
                            <span className="text-sm font-medium text-gray-500">Active Monitoring</span>
                        </div>
                        <p className="text-2xl font-semibold text-gray-900">{groupData.activeMonitoring}</p>
                    </div>
                </div>

                {/* Members List */}
                <div className="mt-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-medium text-gray-900">Members</h2>
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Search members..."
                                className="h-9 rounded-md border border-gray-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#015763] disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                    </div>
                    <div className="rounded-md border border-gray-200">
                        <div className="divide-y divide-gray-200">
                            {groupData.members.map((member) => (
                                <div key={member.id} className="flex items-center justify-between p-4 hover:bg-gray-50/50">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">{member.name}</h3>
                                        <p className="text-sm text-gray-500">{member.email}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            member.status === 'active' 
                                                ? 'bg-[#015763]/10 text-[#015763]' 
                                                : 'bg-gray-100 text-gray-700'
                                        }`}>
                                            {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            Joined {new Date(member.joinedAt).toLocaleDateString()}
                                        </span>
                                        <span className="text-xs font-medium text-gray-700">
                                            {member.role}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupDetails;