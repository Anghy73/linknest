import { create } from 'zustand'
import { LinkData, LinkDataBD } from '../../types/link-data-type';
import { persist } from 'zustand/middleware';

interface LinkStoreI {
  links: LinkDataBD[],
  // addLink: (link: LinkData) => void
  saveLinks: (links: LinkDataBD[]) => void
}

const useLinksStore = create(
  persist<LinkStoreI>((set) => ({
    links: [],
    // addLink: (link) => {
    //   set((state) => ({ links: [...state.links, link] }))
    // },
    saveLinks: (links) => {
      console.log(links);
      set((state) => ({ links: links}))
    }
  }),
    { name: 'links' }
  )
);

export default useLinksStore