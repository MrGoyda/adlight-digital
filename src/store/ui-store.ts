// src/store/ui-store.ts
import { create } from 'zustand';
import { FeatureId } from '@/types';

interface UIState {
  // Features Modal (Существующий функционал)
  activeFeature: FeatureId | null;
  openFeature: (id: FeatureId) => void;
  closeFeature: () => void;

  // Contact Modal (Обновленный функционал)
  isContactModalOpen: boolean;
  bookingSubject: string | null; // <-- Новое поле: тема заявки
  openContactModal: (subject?: string) => void; // <-- Теперь принимает опциональный аргумент
  closeContactModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  // Features
  activeFeature: null,
  openFeature: (id) => set({ activeFeature: id }),
  closeFeature: () => set({ activeFeature: null }),

  // Contact Modal
  isContactModalOpen: false,
  bookingSubject: null,
  
  // Открытие модалки: если передали тему (subject), сохраняем её
  openContactModal: (subject) => set({ 
    isContactModalOpen: true, 
    bookingSubject: subject || null 
  }),
  
  // Закрытие модалки: сбрасываем тему, чтобы она не висела в памяти
  closeContactModal: () => set({ 
    isContactModalOpen: false, 
    bookingSubject: null 
  }),
}));