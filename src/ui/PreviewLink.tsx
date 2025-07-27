import { getDataUrl } from "@/lib/actions"
import Image from "next/image";

type dataUrl = {
  title?: string
  data?: {image?: { url?: string } }
}

function PreviewLink(dataUrl: dataUrl | null) {
  console.log(dataUrl?.data?.image?.url);
  
  // const data = await getDataUrl()
  return (
    <div>
      <h3>PreviewLink</h3>
      {
        dataUrl?.data?.image?.url && <img className="max-w-xl" src={dataUrl.data.image.url}></img>
      }
    </div>
  )
}

export default PreviewLink