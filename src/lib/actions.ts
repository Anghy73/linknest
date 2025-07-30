'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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