// src/store/ui-store.ts
import { create } from 'zustand';
import { FeatureId } from '@/types';

interface UIState {
  // Features Modal
  activeFeature: FeatureId | null;
  openFeature: (id: FeatureId) => void;
  closeFeature: () => void;

  // Contact Modal
  isContactModalOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
}

// <UIState> указывает TS, какой формы должен быть стейт
export const useUIStore = create<UIState>((set) => ({
  // Features
  activeFeature: null,
  openFeature: (id) => set({ activeFeature: id }),
  closeFeature: () => set({ activeFeature: null }),

  // Contact Modal
  isContactModalOpen: false,
  openContactModal: () => set({ isContactModalOpen: true }),
  closeContactModal: () => set({ isContactModalOpen: false }),
}));