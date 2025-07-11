// stores/useFormStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// interface service {
//     id : number;
//     title: string;
//     description: string;
//     duration: string;
//     price: string;
// }

interface FormData {
  service : number;
  // Questions
  medicalConditions: string;
  personalBeliefs: string;
  WhatToChange: string;
  physicalCare: "yes" | "no" | null;
  medication: "yes" | "no" | null;
  counseling: "yes" | "no" | null;
  counselingReason?: string;   
  hypnotized : "yes" | "no" | null;
  hyponatizedReason?: string;
  focus: string[];
  // Day & Time
  day : string;
  slots : string;
}

interface AppointmentStore {
  data: Partial<FormData>
  setData: (newData: Partial<FormData>) => void
  resetData: () => void
}

export const useAppointmentStore = create<AppointmentStore>()(
  persist(
    (set) => ({
      data: {},
      setData: (newData) =>
        set((state) => ({
          data: {
            ...state.data,
            ...newData,
          },
        })),
      resetData: () => set(() => ({data: {}})),
    }),
    {
      name: 'appointment-data', // key in sessionStorage
      storage: {
        getItem: (name) => {
          const item = sessionStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) =>
          sessionStorage.setItem(name, JSON.stringify(value)),
        removeItem: (name) => sessionStorage.removeItem(name),
      },
    }
  )
)
