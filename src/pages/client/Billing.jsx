import React, { useState } from 'react';
import { 
  CreditCard, CheckCircle, 
  Download, X, ArrowRight
} from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function Billing() {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [activeTab, setActiveTab] = useState('billing'); // 'billing' or 'usage'

  // Sample detection logs
  const detectionLogs = [
    {
      id: 1,
      timestamp: '2025-08-27 14:30',
      content: 'Inappropriate language detected',
      severity: 'high',
      group: 'Family Group 1',
      user: 'John Doe'
    },
    {
      id: 2,
      timestamp: '2025-08-27 13:15',
      content: 'Suspicious link blocked',
      severity: 'medium',
      group: 'Family Group 2',
      user: 'Jane Smith'
    },
    {
      id: 3,
      timestamp: '2025-08-27 12:45',
      content: 'Content warning issued',
      severity: 'low',
      group: 'Family Group 1',
      user: 'Mike Johnson'
    },
    {
      id: 4,
      timestamp: '2025-08-27 11:30',
      content: 'Access blocked to restricted content',
      severity: 'high',
      group: 'Family Group 3',
      user: 'Sarah Wilson'
    }
  ];

  // Sample usage data for graphs
  const dates = [
    'Aug 1', 'Aug 5', 'Aug 10', 'Aug 15', 'Aug 20', 'Aug 25'
  ];

  const usageData = {
    labels: dates,
    datasets: [
      {
        fill: true,
        label: 'Total Scans',
        data: [150, 220, 180, 280, 250, 300],
        borderColor: 'rgb(0, 0, 0)',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        tension: 0.4,
      },
      {
        fill: true,
        label: 'Detections',
        data: [12, 18, 15, 25, 20, 28],
        borderColor: 'rgb(255, 0, 0)',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const groupData = {
    labels: ['Family Group 1', 'Family Group 2', 'Family Group 3'],
    datasets: [
      {
        label: 'Usage',
        data: [150, 120, 90],
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  const availablePlans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$4.99',
      features: [
        'Basic scanning',
        'Up to 2 family groups',
        'Standard detection features',
        'Email support'
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$9.99',
      features: [
        'Unlimited scanning',
        'Up to 5 family groups',
        'Advanced detection features',
        'Priority support',
        'Detailed analytics'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$19.99',
      features: [
        'Unlimited everything',
        'Unlimited family groups',
        'Custom detection rules',
        '24/7 priority support',
        'Advanced analytics',
        'API access'
      ]
    }
  ];

  const currentPlan = {
    name: 'Pro Plan',
    price: '$9.99',
    period: 'month',
    features: [
      'Unlimited scanning',
      'Up to 5 family groups',
      'Advanced detection features',
      'Priority support',
      'Detailed analytics'
    ]
  };

  const billingHistory = [
    {
      id: 1,
      date: '2025-08-01',
      amount: '$9.99',
      status: 'Paid',
      invoice: '#INV-001'
    },
    {
      id: 2,
      date: '2025-07-01',
      amount: '$9.99',
      status: 'Paid',
      invoice: '#INV-002'
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('billing')}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            activeTab === 'billing'
              ? 'bg-black text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Billing & Subscription
        </button>
        <button
          onClick={() => setActiveTab('usage')}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            activeTab === 'usage'
              ? 'bg-black text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Usage & Analytics
        </button>
      </div>

             {activeTab === 'billing' ? (
         <>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             {/* Left Column - Current Plan & Payment */}
             <div className="lg:col-span-2 space-y-6">
               {/* Current Plan Card */}
               <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                 <div className="flex justify-between items-start mb-6">
                   <div>
                     <h2 className="text-xl font-semibold mb-2">Current Plan</h2>
                     <p className="text-gray-600">Your subscription renews on Sep 1, 2025</p>
                   </div>
                   <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                     Active
                   </span>
                 </div>

                 <div className="flex items-baseline mb-6">
                   <span className="text-4xl font-bold">{currentPlan.price}</span>
                   <span className="text-gray-600 ml-2">per {currentPlan.period}</span>
                 </div>

                 <div className="space-y-4 mb-8">
                   {currentPlan.features.map((feature, index) => (
                     <div key={index} className="flex items-center">
                       <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                       <span className="text-gray-700">{feature}</span>
                     </div>
                   ))}
                 </div>

                 <div className="flex flex-wrap gap-4">
                   <button 
                     className="flex-1 bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition font-medium"
                     onClick={() => setShowUpgradeModal(true)}
                   >
                     Upgrade Plan
                   </button>
                   <button className="flex-1 border border-gray-300 px-6 py-2.5 rounded-lg hover:bg-gray-50 transition text-gray-700 font-medium">
                     Cancel Subscription
                   </button>
                 </div>
               </div>

               {/* Payment Method Card */}
               <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                 <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                 <div className="flex items-center justify-between">
                   <div className="flex items-center">
                     <div className="bg-gray-50 p-2 rounded-lg mr-4">
                       <CreditCard className="w-6 h-6 text-gray-700" />
                     </div>
                     <div>
                       <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                       <p className="text-sm text-gray-600">Expires 12/25</p>
                     </div>
                   </div>
                   <button className="px-4 py-2 text-gray-700 hover:text-black transition font-medium">
                     Update
                   </button>
                 </div>
               </div>
             </div>

             {/* Right Column - Billing History */}
             <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-fit">
               <h2 className="text-xl font-semibold mb-6">Billing History</h2>
               <div className="space-y-4">
                 {billingHistory.map((item) => (
                   <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                     <div>
                       <p className="font-medium text-gray-900">{item.amount}</p>
                       <p className="text-sm text-gray-600">{item.date}</p>
                     </div>
                     <button className="flex items-center text-gray-700 hover:text-black transition font-medium">
                       <Download className="w-4 h-4 mr-2" />
                       <span>Invoice</span>
                     </button>
                   </div>
                 ))}
               </div>
             </div>
           </div>


         </>
       ) : (
         <div className="space-y-8">
           {/* Analytics Overview */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
               <h2 className="text-xl font-semibold mb-6">Usage Overview</h2>
               <div className="h-64">
                 <Line options={options} data={usageData} />
               </div>
             </div>

             <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
               <h2 className="text-xl font-semibold mb-6">Group Usage</h2>
               <div className="h-64">
                 <Bar options={options} data={groupData} />
               </div>
             </div>
           </div>

           {/* Detection Logs - Minimalistic */}
           <div className="bg-white rounded-lg border border-gray-200 shadow-sm divide-y divide-gray-100">
             <div className="px-6 py-4">
               <h2 className="text-xl font-semibold">Recent Detections</h2>
             </div>
             {detectionLogs.map((log) => (
               <div key={log.id} className="px-6 py-3 flex items-center justify-between hover:bg-gray-50">
                 <div className="flex items-center space-x-4">
                   <span className={`w-2 h-2 rounded-full ${
                     log.severity === 'high' ? 'bg-red-500' :
                     log.severity === 'medium' ? 'bg-yellow-500' :
                     'bg-green-500'
                   }`} />
                   <div>
                     <p className="text-gray-900">{log.content}</p>
                     <p className="text-sm text-gray-500">{log.timestamp} • {log.group}</p>
                   </div>
                 </div>
                 <span className="text-sm text-gray-500">{log.user}</span>
               </div>
             ))}
           </div>
         </div>
       )}

       {/* Upgrade Modal */}
       {showUpgradeModal && (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
           <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4">
             <div className="flex justify-between items-center mb-6">
               <h2 className="text-2xl font-semibold">Choose a Plan</h2>
               <button 
                 onClick={() => {
                   setShowUpgradeModal(false);
                   setSelectedPlan(null);
                 }}
                 className="text-gray-500 hover:text-gray-700"
               >
                 <X className="w-6 h-6" />
               </button>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {availablePlans.map((plan) => (
                 <div 
                   key={plan.id}
                   className={`p-6 rounded-lg border-2 transition-all cursor-pointer ${
                     selectedPlan === plan.id 
                       ? 'border-black' 
                       : 'border-gray-200 hover:border-gray-300'
                   }`}
                   onClick={() => setSelectedPlan(plan.id)}
                 >
                   <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                   <p className="text-3xl font-bold mb-4">{plan.price}<span className="text-sm text-gray-600">/month</span></p>
                   <ul className="space-y-3">
                     {plan.features.map((feature, index) => (
                       <li key={index} className="flex items-start">
                         <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                         <span className="text-sm">{feature}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div>

             <div className="mt-8 flex justify-end gap-4">
               <button
                 onClick={() => {
                   setShowUpgradeModal(false);
                   setSelectedPlan(null);
                 }}
                 className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
               >
                 Cancel
               </button>
               <button
                 onClick={() => {
                   console.log('Upgrading to:', selectedPlan);
                   setShowUpgradeModal(false);
                   setSelectedPlan(null);
                 }}
                 className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition flex items-center"
                 disabled={!selectedPlan}
               >
                 Upgrade Plan <ArrowRight className="w-4 h-4 ml-2" />
               </button>
             </div>
           </div>
         </div>
       )}
     </div>
   );
 }
