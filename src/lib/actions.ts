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
}

export const createLink = async (rawDataWithLink: CreateLinkWithTags) => {
  console.log('hi fron server');
  console.log(rawDataWithLink);
  console.log(rawDataWithLink.linkTags);

  const link = await prisma.link.create({
    data: {
      title: rawDataWithLink.title ?? '',
      description: rawDataWithLink.description ?? '',
      comment: rawDataWithLink.comment?.toString() ?? '',
      url: rawDataWithLink.url ?? '',
      img: rawDataWithLink.img ?? '',
      shortUrl: rawDataWithLink.shortUrl ?? '',
      logo: rawDataWithLink.logo ?? '',
    }
  })

  const tagIds = rawDataWithLink.linkTags.map(id => id) ; // tus IDs de tag (asegúrate que existan)

  const linkTagRelations = tagIds.map((tagId) => ({
    linkId: link.id,
    tagId,
  }));

  await prisma.linkTag.createMany({
    data: linkTagRelations,
  });



  console.log(link.id);
  // linkTags: {
  //       connect: rawDataWithLink.linkTags.map(id => ({ id }))
  //     }


  revalidatePath('/user')
  redirect('/user')
}


export const createTag = async (formData: FormData) => {
  console.log('hi Tag');
  const value = formData.get('tagName')?.toString().toLocaleLowerCase()
  if (value?.trim() == '' || value == undefined) return

  const rawData = {
    value: value,
    label: value?.charAt(0).toLocaleUpperCase() + value?.slice(1)
  }

  console.log(rawData);
  // return rawData


  try {
    const tag = await prisma.tag.create({
      data: rawData
    })
    return tag
  } catch (error) {
    console.log(error);
  }
}

export const getTags = async () => {
  return prisma.tag.findMany()
}

export const getAllLinks = async () => {
  return prisma.link.findMany()
}