"use client"

import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { ArrowRight, Calendar, Clock, Wrench, DollarSign, CheckCircle, XCircle, AlertCircle, Activity, Zap, Info, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import NormalButton from '@/components/custom/NormalButton';
import { format } from 'date-fns';

interface Reservation {
  id: number;
  booking_date: string;
  time: string;
  type: string;
  booked_at: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  duration: string;
  price : number;
  times : {start_time : string}[]
}

type StatusType = Reservation['status'];

// Helper to convert "14:00" to a Date object (today's date)
function timeStringToDate(timeStr: string) {
  const [hours, minutes] = timeStr?.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

const MyAppointments = ({bookings} : {bookings : Reservation[]}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 10;
  console.log(bookings)

  // Calculate pagination
  const totalPages: number = Math.ceil(bookings.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentReservations: Reservation[] = bookings.slice(startIndex, endIndex);

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

  // Handle Popup
  const [id, setId] = useState<string>("")
  const handlePopup = (id : string) => {
    setId(id)
  }

  return (
    <div className="max-w-full">
      <Link href={"/profile"} className='flex items-center gap-2 mb-4 transition-colors hover:text-secondary'> <ChevronLeft /> Back 
      </Link>
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
                    <Zap className="w-4 h-4" />
                    Duration
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
                    <Info className="w-4 h-4" />
                    Cancellation
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentReservations.length > 0 ? currentReservations.map((reservation: Reservation, index: number) => (
                <tr 
                  key={reservation.id} 
                  className={`hover:bg-gray-50 transition-colors ${
                    (startIndex + index) % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {formatDate(reservation.booking_date)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {format(timeStringToDate(reservation?.times[0]?.start_time), "h:mm a")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {reservation.times.length === 2 ? "60 Mins" : "90 Mins"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {reservation.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    ${reservation.price?.toFixed(2) || "No Price"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(reservation.status)}
                      <span className={getStatusBadge(reservation.status)}>
                        {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                    <button onClick={() => handlePopup(reservation.id.toString())} className='text-sm font-semibold underline text-red-500'>Cancel</button>
                    |
                    <button className='text-sm font-semibold underline text-primary'>Reschedule</button>
                  </td>
                </tr>
              )) : <p className='p-4 font-medium'>No Reservations Here</p> }
            </tbody>
          </table>
        </div>
        
        {currentReservations.length > 0 && <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-700 text-center sm:text-left">
              Showing <span className="font-medium">{startIndex + 1}</span> to <span className="font-medium">{Math.min(endIndex, bookings.length)}</span> of{' '}
              <span className="font-medium">{bookings.length}</span> results
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
        </div>}
      </div>
      {id && <Popup id={id} setId={setId} />}
    </div>
  );
};

const Popup = ({id , setId} : {id : string , setId : Dispatch<SetStateAction<string>>}) => {
  return (
    <div className='fixed inset-0 bg-black/60 z-[9] flex items-center justify-center'>
      <div className='p-6 bg-white rounded-2xl w-full max-w-[600px] relative' data-aos="fade-up">
        <p className='text-3xl text-center mb-4'>Cancel Reservation</p>
        <p className='text-center mb-8'> Are you sure you want to cancel this reservation? knowing that refunding your money might take up to 10 days </p>
        <div className='flex gap-4'>
          <NormalButton label="No, Don't Cancel" styles='flex-1' onClick={() => setId("")}/>
          <NormalButton label='Yes, Cancel Res.' styles='flex-1 bg-red-500 hover:!bg-red-500' />
        </div>
        {/* Close */}
        <XCircle className='absolute top-3 end-3 cursor-pointer transition-all text-primary hover:text-secondary' onClick={() => setId("")} />
      </div>
    </div>
  )
}

export default MyAppointments;