import { create } from 'zustand'
import { LinkData, LinkDataBD } from '../../types/link-data-type';
import { persist } from 'zustand/middleware';

interface LinkStoreI {
  links: LinkDataBD[],
  guestId: string
  // addLink: (link: LinkData) => void
  saveLinks: (links: LinkDataBD[]) => void
  setGuestId: (guestId: string) => void
}

const useLinksStore = create(
  persist<LinkStoreI>((set) => ({
    links: [],
    guestId: "",
    // addLink: (link) => {
    //   set((state) => ({ links: [...state.links, link] }))
    // },
    saveLinks: (links) => {
      console.log(links);
      set((state) => ({ links: links}))
    },
    setGuestId: (guestId) => {
      set((state) => ({ guestId: guestId }))
    }
  }),
    { name: 'links' }
  )
);

export default useLinksStore