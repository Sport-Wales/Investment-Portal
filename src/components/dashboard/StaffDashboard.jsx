// src/components/dashboard/StaffDashboard.jsx
import React, { useState } from 'react';
import { 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  Calendar,
  FileText,
  HelpCircle,
  X,
  Clock,
  ChevronRight
} from 'lucide-react';

// Add this to the mock data section
const followUps = [
    {
      id: 1,
      partner: 'Welsh Athletics',
      type: 'Documentation',
      dueDate: '2024-01-21',
      priority: 'high',
      task: 'Review updated Governance Improvement Plan',
      assignedTo: 'John Smith'
    },
    {
      id: 2,
      partner: 'Swim Wales',
      type: 'Meeting Action',
      dueDate: '2024-01-23',
      priority: 'medium',
      task: 'Send quarterly review meeting notes',
      assignedTo: 'Sarah Jones'
    },
    {
      id: 3,
      partner: 'Tennis Wales',
      type: 'Support',
      dueDate: '2024-01-25',
      priority: 'low',
      task: 'Check capability framework progress',
      assignedTo: 'John Smith'
    }
  ];

const StaffDashboard = ({ partners, onPartnerSelect }) => {
  const [activeModal, setActiveModal] = useState(null);
  
  // Mock data (replace with real data)
  const dashboardStats = {
    partners: {
      count: 60,
      partners: [
        { id: 'welsh-athletics', name: 'Welsh Athletics', status: 'All requirements met', date: '2024-01-15' },
        { id: 'swim-wales', name: 'Swim Wales', status: 'Completed sign-off process', date: '2024-01-14' }
      ]
    },
    signedOff: {
      count: 15,
      partners: [
        { id: 'welsh-athletics', name: 'Welsh Athletics', status: 'All requirements met', date: '2024-01-15' },
        { id: 'swim-wales', name: 'Swim Wales', status: 'Completed sign-off process', date: '2024-01-14' }
      ]
    },
    atRisk: {
      count: 8,
      partners: [
        { id: 'tennis-wales', name: 'Tennis Wales', status: 'Missing quarterly update', date: '2024-01-20' },
        { id: 'basketball-wales', name: 'Basketball Wales', status: 'Incomplete documentation', date: '2024-01-22' }
      ]
    },
    meetingRequests: {
      count: 4,
      partners: [
        { id: 'welsh-cycling', name: 'Welsh Cycling', status: 'Requested quarterly review', date: '2024-01-25' },
        { id: 'hockey-wales', name: 'Hockey Wales', status: 'Support meeting requested', date: '2024-01-26' }
      ]
    },
    needSupport: {
      count: 12,
      partners: [
        { id: 'welsh-boxing', name: 'Welsh Boxing', status: 'Needs help with capability framework', date: '2024-01-18' },
        { id: 'welsh-netball', name: 'Wales Netball', status: 'Requires documentation support', date: '2024-01-19' }
      ]
    }
  };

  // Mock upcoming meetings data
  const upcomingMeetings = [
    {
      id: 1,
      partner: 'Welsh Athletics',
      type: 'Quarterly Review',
      date: '2024-01-20',
      time: '10:00 AM',
      status: 'confirmed',
      description: 'Q4 progress review and planning for next quarter'
    },
    {
      id: 2,
      partner: 'Swim Wales',
      type: 'Support Meeting',
      date: '2024-01-22',
      time: '2:00 PM',
      status: 'pending',
      description: 'Capability framework assistance'
    }
  ];

  // Mock activity data
  const partnerActivity = [
    { name: 'Welsh Athletics', category: 'NGB', activity: 85, status: 'on-track' },
    { name: 'Swim Wales', category: 'NGB', activity: 78, status: 'at-risk' },
    { name: 'Tennis Wales', category: 'NGB', activity: 92, status: 'signed-off' },
    { name: 'Disability Sport Wales', category: 'NP', activity: 88, status: 'on-track' },
    { name: 'North Wales SP', category: 'SP', activity: 72, status: 'at-risk' }
  ];

  // Stat Card Component
  const StatCard = ({ icon: Icon, title, count, color, onClick }) => (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center cursor-pointer hover:bg-gray-50 transition-colors"
    >
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="h-6 w-6" />
      </div>
      <span className="mt-4 text-4xl font-bold text-gray-900">{count}</span>
      <span className="mt-1 text-sm text-gray-500">{title}</span>
    </div>
  );

  // Modal Component
  const Modal = ({ title, icon: Icon, color, children, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center">
            <div className={`p-2 rounded-full ${color} mr-3`}>
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );

  {/* Overview Stats */}
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <StatCard
          icon={Users}
          title="Total Partners"
          count={dashboardStats.partners.count}
          color="bg-blue-10 text-sw-blue"
    
        />

        <StatCard
          icon={CheckCircle}
          title="Signed Off"
          count={dashboardStats.signedOff.count}
          color="bg-green-50 text-sw-green"
          onClick={() => setActiveModal('signedOff')}
        />
        <StatCard
          icon={AlertTriangle}
          title="At Risk"
          count={dashboardStats.atRisk.count}
          color="bg-red-50 text-sw-red"
          onClick={() => setActiveModal('atRisk')}
        />
        <StatCard
          icon={Calendar}
          title="Meeting Requests"
          count={dashboardStats.meetingRequests.count}
          color="bg-amber-50 text-sw-yellow"
          onClick={() => setActiveModal('meetings')}
        />
        <StatCard
          icon={HelpCircle}
          title="Need Support"
          count={dashboardStats.needSupport.count}
          color="bg-blue-50 text-sw-blue"
          onClick={() => setActiveModal('support')}
        />
      </div>

      {/* Upcoming Meetings Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Scheduled Meetings */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Upcoming Meetings</h2>
          <div className="space-y-4">
            {upcomingMeetings.map(meeting => (
              <div 
                key={meeting.id}
                className="flex items-start p-4 bg-gray-50 rounded-lg"
              >
                <Calendar className={`h-5 w-5 mt-0.5 ${
                  meeting.status === 'confirmed' ? 'text-sw-green' : 'text-sw-yellow'
                }`} />
                <div className="ml-3 flex-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-gray-900">{meeting.partner}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      meeting.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {meeting.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{meeting.type}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(meeting.date).toLocaleDateString()} at {meeting.time}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">{meeting.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Follow-ups */}
        <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Required Follow-ups</h2>
        <div className="space-y-4">
            {followUps.map(followUp => (
            <div key={followUp.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start">
                <div className="flex-1">
                    <div className="flex items-center">
                    <h3 className="font-medium text-gray-900">{followUp.partner}</h3>
                    <span className={`ml-3 px-2 py-1 text-xs rounded-full ${
                        followUp.priority === 'high' ? 'bg-red-100 text-red-800' :
                        followUp.priority === 'medium' ? 'bg-amber-100 text-amber-800' :
                        'bg-blue-100 text-blue-800'
                    }`}>
                        {followUp.priority} priority
                    </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{followUp.task}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    Due: {new Date(followUp.dueDate).toLocaleDateString()}
                    <span className="mx-2">•</span>
                    <Users className="h-4 w-4 mr-1" />
                    {followUp.assignedTo}
                    </div>
                </div>
                <button className="ml-4 text-sw-blue hover:text-sw-blue-dark">
                    <ChevronRight className="h-5 w-5" />
                </button>
                </div>
            </div>
            ))}
        </div>
        </div>
      </div>

      {/* Partner Activity Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Partner Activity</h2>
          <select className="text-sm border-gray-300 rounded-md">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
        <div className="space-y-4">
          {partnerActivity.map(partner => (
            <div key={partner.name} className="flex items-center">
              <span className="w-32 text-sm text-gray-600">{partner.name}</span>
              <div className="flex-1 mx-4">
                <div className="h-4 bg-gray-100 rounded-full">
                  <div 
                    className={`h-4 rounded-full ${
                      partner.status === 'on-track' ? 'bg-sw-blue' :
                      partner.status === 'at-risk' ? 'bg-sw-red' :
                      'bg-sw-green'
                    }`}
                    style={{ width: `${partner.activity}%` }}
                  />
                </div>
              </div>
              <span className="w-16 text-sm text-gray-600">{partner.activity}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {activeModal === 'signedOff' && (
        <Modal
          title="Signed Off Partners"
          icon={CheckCircle}
          color="bg-green-50 text-sw-green"
          onClose={() => setActiveModal(null)}
        >
          <div className="space-y-4">
            {dashboardStats.signedOff.partners.map(partner => (
              <div 
                key={partner.id}
                onClick={() => onPartnerSelect(partner.id)}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{partner.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{partner.status}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </Modal>
      )}

      {/* At Risk Modal */}
        {activeModal === 'atRisk' && (
        <Modal
            title="At Risk Partners"
            icon={AlertTriangle}
            color="bg-red-50 text-sw-red"
            onClose={() => setActiveModal(null)}
        >
            <div className="space-y-4">
            {dashboardStats.atRisk.partners.map(partner => (
                <div 
                key={partner.id}
                onClick={() => onPartnerSelect(partner.id)}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer border border-red-100"
                >
                <div className="flex justify-between items-start">
                    <div>
                    <h3 className="font-medium text-gray-900">{partner.name}</h3>
                    <p className="text-sm text-red-600 mt-1">{partner.status}</p>
                    <p className="text-sm text-gray-500 mt-1">
                        Deadline: {new Date(partner.date).toLocaleDateString()}
                    </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
                </div>
            ))}
            </div>
        </Modal>
        )}

        {/* Meeting Requests Modal */}
        {activeModal === 'meetings' && (
        <Modal
            title="Meeting Requests"
            icon={Calendar}
            color="bg-amber-50 text-sw-yellow"
            onClose={() => setActiveModal(null)}
        >
            <div className="space-y-4">
            {dashboardStats.meetingRequests.partners.map(partner => (
                <div 
                key={partner.id}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer border border-amber-100"
                >
                <div className="flex justify-between items-start">
                    <div>
                    <h3 className="font-medium text-gray-900">{partner.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{partner.status}</p>
                    <p className="text-sm text-gray-500 mt-1">
                        Requested for: {new Date(partner.date).toLocaleDateString()}
                    </p>
                    </div>
                    <div className="flex space-x-2">
                    <button 
                        className="px-3 py-1 bg-sw-blue text-white text-sm rounded-md hover:bg-opacity-90"
                        onClick={() => {/* Handle scheduling */}}
                    >
                        Schedule
                    </button>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                </div>
                </div>
            ))}
            </div>
        </Modal>
        )}

        {/* Need Support Modal */}
        {activeModal === 'support' && (
        <Modal
            title="Partners Needing Support"
            icon={HelpCircle}
            color="bg-blue-50 text-sw-blue"
            onClose={() => setActiveModal(null)}
        >
            <div className="space-y-4">
            {dashboardStats.needSupport.partners.map(partner => (
                <div 
                key={partner.id}
                onClick={() => onPartnerSelect(partner.id)}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer border border-blue-100"
                >
                <div className="flex justify-between items-start">
                    <div>
                    <h3 className="font-medium text-gray-900">{partner.name}</h3>
                    <p className="text-sm text-blue-600 mt-1">{partner.status}</p>
                    <p className="text-sm text-gray-500 mt-1">
                        Requested: {new Date(partner.date).toLocaleDateString()}
                    </p>
                    </div>
                    <div className="flex items-center space-x-2">
                    <button 
                        className="px-3 py-1 bg-sw-blue text-white text-sm rounded-md hover:bg-opacity-90"
                        onClick={(e) => {
                        e.stopPropagation();
                        // Handle contact action
                        }}
                    >
                        Contact
                    </button>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                </div>
                </div>
            ))}
            </div>
        </Modal>
        )}
    </div>
  );
};

export default StaffDashboard;