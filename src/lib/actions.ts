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

export const createLink = async (formData: FormData) => {
  console.log('hi');

  const rawData = {
    url: formData.get('url'),
    shortUrl: formData.get('shortUrl'),
    commentLink: formData.get('commentLink')
  }

  console.log(rawData);
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