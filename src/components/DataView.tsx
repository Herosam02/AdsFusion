import React, { useState } from 'react';
import { useShareApp } from '../context/ShareAppContext';
import { ShareApplication } from '../types/ShareApplication';
import { Download, Edit, Trash2, Search, X } from 'lucide-react';
import { exportToExcel } from '../utils/excelExport';
import EditApplicationModal from './EditApplicationModal';

const DataView: React.FC = () => {
  const { applications, deleteApplication, loading } = useShareApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [editingApplication, setEditingApplication] = useState<ShareApplication | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExportToExcel = () => {
    exportToExcel(filteredApplications, 'share_applications');
  };

  const handleDeleteApplication = (id: string) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      deleteApplication(id);
    }
  };

  const handleEditClick = (application: ShareApplication) => {
    setEditingApplication(application);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingApplication(null);
  };

  // Filter applications based on search term
  const filteredApplications = applications.filter((app) => {
    const searchString = searchTerm.toLowerCase();
    return (
      app.surname.toLowerCase().includes(searchString) ||
      app.firstName.toLowerCase().includes(searchString) ||
      app.email.toLowerCase().includes(searchString) ||
      app.phoneNumber.toLowerCase().includes(searchString)
    );
  });

  // Format date for display
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-0">Applications Data</h2>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search applications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
          
          <button
            onClick={handleExportToExcel}
            disabled={filteredApplications.length === 0}
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md
            text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
            transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="h-4 w-4 mr-2" />
            Export to Excel
          </button>
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : applications.length === 0 ? (
        <div className="bg-gray-50 rounded-md p-8 text-center">
          <p className="text-gray-600">No applications submitted yet.</p>
        </div>
      ) : filteredApplications.length === 0 ? (
        <div className="bg-gray-50 rounded-md p-8 text-center">
          <p className="text-gray-600">No applications match your search.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shares</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredApplications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{app.surname}, {app.firstName}</div>
                    <div className="text-sm text-gray-500">{app.otherNames}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{app.email}</div>
                    <div className="text-sm text-gray-500">{app.phoneNumber}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{app.sharesApplied} shares</div>
                    <div className="text-sm text-gray-500">{app.amountPaid ? `₦${app.amountPaid}` : 'N/A'}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(app.createdAt)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditClick(app)}
                        className="text-indigo-600 hover:text-indigo-900 transition-colors duration-200"
                        title="Edit"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteApplication(app.id!)}
                        className="text-red-600 hover:text-red-900 transition-colors duration-200"
                        title="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {isModalOpen && editingApplication && (
        <EditApplicationModal 
          application={editingApplication}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default DataView;