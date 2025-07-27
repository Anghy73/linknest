'use server'

export const getDataUrl = async (url: FormDataEntryValue | null) => {

  // const data = {
  //   url: formData.get('url')
  // }

  

  // console.log(data);

  try {
    // const data = fetch('https://api.microlink.io/')
    console.log('click');
    
    const data = await fetch(`https://api.microlink.io/?url=${url}`)
    if (!data.ok) throw new Error('Error en la solicitud: ' + data.status)
    const json = await data.json()
    console.log(json);
    return { dataUrl: json }
  } catch (error) {
    console.log(error);
  }
}