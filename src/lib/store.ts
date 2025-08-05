import { create } from 'zustand'
import { LinkData, LinkDataBD, Tag } from '../../types/link-data-type';
import { persist } from 'zustand/middleware';

interface LinkStoreI {
  links: LinkDataBD[],
  guestId: string,
  tagsFilter: Tag[],
  // addLink: (link: LinkData) => void
  saveLinks: (links: LinkDataBD[]) => void
  setGuestId: (guestId: string) => void
  setTagsFilter: (tagsFilter: Tag[]) => void
}

const useLinksStore = create(
  persist<LinkStoreI>((set) => ({
    links: [],
    guestId: "",
    tagsFilter: [],
    // addLink: (link) => {
    //   set((state) => ({ links: [...state.links, link] }))
    // },
    saveLinks: (links) => {
      console.log(links);
      set((state) => ({ links: links}))
    },
    setGuestId: (guestId) => {
      set((state) => ({ guestId: guestId }))
    },
    setTagsFilter: (tagsFilter) => {
      set((state) => ({ tagsFilter: tagsFilter }))
    },
  }),
    { name: 'links' }
  )
);

export default useLinksStore