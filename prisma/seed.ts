import { Prisma, PrismaClient } from "./prismaApp/generated/prisma";

const prisma = new PrismaClient();

const linkData: Prisma.LinkCreateInput[] = [
  {
    title: "link one",
    description: "description of link one",
    logo: "https://react.dev/apple-touch-icon.png",
    img: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon@2.png?v=73d79a89bded",
    url: "https://stackoverflow.com/",
    shortUrl: "dasx",
    comment: "comment of link one stack with icon of react",
    linkTags: {
      create: [
        {
          tag: {
            create: {
              value: "tool",
              label: "Tool"
            }
          }
        }
      ]
    }
  }
]

export async function main() {
  for (const l of linkData) {
    await prisma.link.create({ data: l });
  }
}

main();