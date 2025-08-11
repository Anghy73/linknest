import prisma from "@/lib/prisma";
import LinkEditForm from "@/ui/links/link-edit-form";
import { notFound } from "next/navigation";

async function EditLinkPage(props: {
  params: Promise<{linkId: number}>
}) {
  const params = await props.params
  const linkId = params.linkId
  console.log(linkId);

  const link = await prisma.link.findUnique({
    where: {
      id: Number(linkId)
    },
    include: {
      linkTags: {
        include: {
          tag: true
        }
      }
    }
  })

  console.log(link);

  if (!link) {
    notFound();
  }
  
  return (
    <main className="w-full h-screen gird place-content-center">
      <h3 className="text-center font-medium text-xl mb-6">Edit Link</h3>
      <LinkEditForm link={link} ></LinkEditForm>
    </main>
  )
}

export default EditLinkPage