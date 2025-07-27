'use server'

export const getDataUrl = async () => {
  try {
    // const data = fetch('https://api.microlink.io/')
    console.log('click');
    
    const data = await fetch('https://api.microlink.io/?url=urlexample.com')
    const json = await data.json()
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}