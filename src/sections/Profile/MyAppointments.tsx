"use client"

import React, { ReactNode, useState } from 'react';
import { ArrowRight, Calendar, Clock, Wrench, DollarSign, CheckCircle, XCircle, AlertCircle, Activity, Zap, Info, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

interface Reservation {
  id: number;
  date: string;
  time: string;
  service: string;
  price: number;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  duration: string;
}

type StatusType = Reservation['status'];

const MyAppointments: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 3;

  // Sample data - expanded for better pagination demo
  const allReservations: Reservation[] = [
    {
      id: 1,
      date: '2024-03-15',
      time: '10:00 AM',
      service: 'Individual Holistic Psychotherapy',
      price: 75.00,
      status: 'confirmed',
      duration: '60 min'
    },
    {
      id: 2,
      date: '2024-03-16',
      time: '2:30 PM',
      service: 'Holistic Psychotherapy for Couples',
      price: 65.00,
      status: 'pending',
      duration: '90 min'
    },
    {
      id: 3,
      date: '2024-03-17',
      time: '11:15 AM',
      service: 'Holistic Walk & Talk Therapy by Phone',
      price: 120.00,
      status: 'completed',
      duration: '75 min'
    },
    {
      id: 4,
      date: '2024-03-18',
      time: '9:00 AM',
      service: 'Massage Therapy',
      price: 95.00,
      status: 'cancelled',
      duration: '60 min'
    },
    {
      id: 5,
      date: '2024-03-19',
      time: '3:45 PM',
      service: 'Color & Highlights',
      price: 180.00,
      status: 'confirmed',
      duration: '120 min'
    },
    {
      id: 6,
      date: '2024-03-20',
      time: '1:00 PM',
      service: 'Deep Conditioning',
      price: 45.00,
      status: 'pending',
      duration: '45 min'
    },
    {
      id: 7,
      date: '2024-03-21',
      time: '4:30 PM',
      service: 'Eyebrow Threading',
      price: 25.00,
      status: 'confirmed',
      duration: '30 min'
    },
    {
      id: 8,
      date: '2024-03-22',
      time: '10:30 AM',
      service: 'Full Body Massage',
      price: 140.00,
      status: 'completed',
      duration: '90 min'
    }
  ];

  // Calculate pagination
  const totalPages: number = Math.ceil(allReservations.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentReservations: Reservation[] = allReservations.slice(startIndex, endIndex);

  const handlePreviousPage = (): void => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = (): void => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const getStatusIcon = (status: StatusType): ReactNode => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-blue-500" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: StatusType): string => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-medium w-20 text-center inline-block";
    switch (status) {
      case 'confirmed':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'completed':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'cancelled':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="max-w-full">
        <Link href={"/profile"} className='flex items-center gap-2 mb-4 transition-colors hover:text-secondary'> <ChevronLeft /> Back  </Link>
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="bg-gray-50 px-6 py-4">
          <h2 className="text-xl font-semibold">Reservations</h2>
          <p className="opacity-80 text-sm mt-1">Manage and view all your reservations</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Date
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Time
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4" />
                    Service
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Price
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    Status
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Duration
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Details
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentReservations.map((reservation: Reservation, index: number) => (
                <tr 
                  key={reservation.id} 
                  className={`hover:bg-gray-50 transition-colors ${
                    (startIndex + index) % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {formatDate(reservation.date)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {reservation.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {reservation.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    ${reservation.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(reservation.status)}
                      <span className={getStatusBadge(reservation.status)}>
                        {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {reservation.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link href={"/appointments/1"} className='text-sm font-semibold underline text-primary transition-colors hover:text-secondary'>See details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-700 text-center sm:text-left">
              Showing <span className="font-medium">{startIndex + 1}</span> to <span className="font-medium">{Math.min(endIndex, allReservations.length)}</span> of{' '}
              <span className="font-medium">{allReservations.length}</span> results
            </p>
            <div className="flex items-center gap-2">
              <button 
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-3 py-1 text-sm border border-gray-300 rounded-md transition-colors ${
                  currentPage === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white hover:bg-gray-50 text-gray-700'
                }`}
              >
                Previous
              </button>
              <span className="px-2 sm:px-3 py-1 text-sm text-gray-700 whitespace-nowrap">
                Page {currentPage} of {totalPages}
              </span>
              <button 
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  currentPage === totalPages 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-300' 
                    : 'bg-primary text-white hover:bg-primary-600'
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;