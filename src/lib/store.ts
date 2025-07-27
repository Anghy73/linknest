import { create } from 'zustand'
import { LinkData } from '../../types/link-data-type';
import { persist } from 'zustand/middleware';

interface LinkStoreI {
  links: LinkData[],
  addLink: (link: LinkData) => void
}

const useLinksStore = create(
  persist<LinkStoreI>((set) => ({
    links: [],
    addLink: (link) => {
      set((state) => ({ links: [...state.links, link] }))
    }
  }),
    { name: 'links' }
  )
);

export default useLinksStore