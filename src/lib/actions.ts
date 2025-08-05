'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "./prisma";
import { LinkTag } from "../../types/link-data-type";

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
  guestId: string
}

export const createLink = async (rawDataWithLink: CreateLinkWithTags) => {
  console.log(rawDataWithLink.guestId);

  const link = await prisma.link.create({
    data: {
      title: rawDataWithLink.title ?? '',
      description: rawDataWithLink.description ?? '',
      comment: rawDataWithLink.comment?.toString() ?? '',
      url: rawDataWithLink.url ?? '',
      img: rawDataWithLink.img ?? '',
      shortUrl: rawDataWithLink.shortUrl ?? '',
      logo: rawDataWithLink.logo ?? '',
      guestId: rawDataWithLink.guestId
    }
  })

  const tagIds = rawDataWithLink.linkTags.map(tag => tag);

  const linkTagRelations = tagIds.map((tagId) => ({
    linkId: link.id,
    tagId,
    guestId: rawDataWithLink.guestId
  }));

  await prisma.linkTag.createMany({
    data: linkTagRelations,
  });

  console.log(rawDataWithLink.url);
  console.log(rawDataWithLink.shortUrl);


  const shortLink = await prisma.shortLink.create({
    data: {
      url: rawDataWithLink.url ?? '',
      shortUrl: rawDataWithLink.shortUrl ?? '',
      guestId: rawDataWithLink.guestId
    }
  })

  revalidatePath('/account/user/id')
  return link
}


export const createTag = async ({ data, guestId }: { data: FormData, guestId: string | null }) => {
  const value = data.get('tagName')?.toString().toLocaleLowerCase()
  if (value?.trim() == '' || value == undefined) return

  // You need to provide guestId as a parameter to this function
  // Example: export const createTag = async (formData: FormData, guestId: string) => {
  // and pass guestId from the caller

  // const guestId = formData.get('guestId')?.toString(); // Or get guestId from function parameter

  // if (!guestId) return;

  const rawData = {
    value: value,
    label: value?.charAt(0).toLocaleUpperCase() + value?.slice(1),
    guestId: guestId ?? ''
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

export const getAllLinks = async (guestId: string | undefined) => {
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

export const getTags = async (guestId: string | null) => {
  if (!guestId) return
  return prisma.tag.findMany({
    where: {
      guestId: guestId
    }
  })
}

export async function deleteLinkWithTags(linkId: number) {
  try {
    // Elimina primero las relaciones LinkTag
    await prisma.linkTag.deleteMany({
      where: {
        linkId,
      },
    });

    // Luego elimina el Link
    const deletedLink = await prisma.link.delete({
      where: {
        id: linkId,
      },
    });
    revalidatePath('/account/user/id')
    return deletedLink;
  } catch (error) {
    console.error('Error deleting link with tags:', error);
    throw error;
  }
}

export async function sortLinksByFilter({ title, guestId }: { title: string | undefined, guestId: string }) {
  const linksByTitle = await prisma.link.findMany({
    where: {
      guestId: guestId,
      title: {
        contains: title,
        mode: "insensitive"
      },
    },
    include: {
      linkTags: {
        include: {
          tag: true 
        }
      }
    }
  })

  // if (linksByTitle.length == 0) return { msg: "Sin coincidencias" }
  return linksByTitle

}