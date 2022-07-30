import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { IFirstStore } from '@/store/interface';

export const useStore = create<IFirstStore>()(
  devtools(
    persist((set) => ({
      volume: 0,
      name: 'minh',
    }))
  )
);

// mountStoreDevtool('store1', useStore);
