'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "./prisma";

export const getDataUrl = async (formdata: FormData) => {

  // const data = {
  //   url: formData.get('url')
  // }



  // console.log(data);

  try {
    // const data = fetch('https://api.microlink.io/')
    console.log('click');

    // const data = await fetch(`https://api.microlink.io/?url=${url}`)
    // if (!data.ok) throw new Error('Error en la solicitud: ' + data.status)
    // const json = await data.json()
    // console.log(json);
    // return { dataUrl: json }
  } catch (error) {
    console.log(error);
  }
}

interface CreateLinkWithTags {
  title: string | undefined
  description: string | undefined
  logo: string | undefined
  img: string | undefined
  url: string | undefined
  shortUrl: string
  comment: FormDataEntryValue | null
  linkTags: Array<number>
  guestId?: string | null
}

export const createLink = async (rawDataWithLink: CreateLinkWithTags) => {
  const link = await prisma.link.create({
    data: {
      title: rawDataWithLink.title ?? '',
      description: rawDataWithLink.description ?? '',
      comment: rawDataWithLink.comment?.toString() ?? '',
      url: rawDataWithLink.url ?? '',
      img: rawDataWithLink.img ?? '',
      shortUrl: rawDataWithLink.shortUrl ?? '',
      logo: rawDataWithLink.logo ?? '',
      guestId: rawDataWithLink.guestId ?? null
    }
  })

  const tagIds = rawDataWithLink.linkTags.map(id => id);

  const linkTagRelations = tagIds.map((tagId) => ({
    linkId: link.id,
    tagId,
  }));

  await prisma.linkTag.createMany({
    data: linkTagRelations,
  });

  console.log(rawDataWithLink.url);
  console.log(rawDataWithLink.shortUrl);
  

  const shortLink = await prisma.shortLink.create({
    data: {
      url: rawDataWithLink.url ?? '',
      shortUrl: rawDataWithLink.shortUrl ?? ''
    }
  })

  console.log(shortLink);

  revalidatePath('/user')
  // redirect(''
  return link
}


export const createTag = async (formData: FormData) => {
  const value = formData.get('tagName')?.toString().toLocaleLowerCase()
  if (value?.trim() == '' || value == undefined) return

  const rawData = {
    value: value,
    label: value?.charAt(0).toLocaleUpperCase() + value?.slice(1)
  }

  try {
    const tag = await prisma.tag.create({
      data: rawData
    })
    return tag
  } catch (error) {
    console.log(error);
  }
}

export const getAllLinks = async (guestId: string | null) => {
  return prisma.link.findMany({
    where: {
      guestId: guestId
    },
    include: {
      linkTags: {
        include: {
          tag: true
        }
      }
    }
  })
}

export const getTags = async () => {
  return prisma.tag.findMany()
}

// export const getAllLinks = async () => {
//   return prisma.link.findMany()
// }