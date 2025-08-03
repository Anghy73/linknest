import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function ShortIdPage(props: {
  params: Promise<{
    shortId: string;
  }>;
}) {
  const { shortId } = await props.params;
  const data = await prisma.shortLink.findUnique({
    where: {
      shortUrl: shortId,
    },
  });

  console.log(data);

  if (!data) {
    redirect('/')
  }

  redirect(data.url)
  // return {
    // redirect: {
    //   destination: data.url,
    // },
  // };
}
