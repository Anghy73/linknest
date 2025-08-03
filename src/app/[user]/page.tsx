import React from "react";
import LayoutSimple from "@/ui/links/links-layout-simple";

export default async function Page() {
  // const links = await prisma.link.findMany();
  // console.log(links);

  // const { links } = useLinksStore();

  // const [currentUrl, setCurrentUrl] = useState<LinkData | null>(null);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const rawData = new FormData(e.currentTarget);
  //   const url = rawData.get("url");
  //   const data = await getDataUrl(url);
  //   if (data) {
  //     setCurrentUrl(data.dataUrl);
  //     addLink(data.dataUrl);
  //   }
  // };

  return (
    <div className="flex flex-col gap-10 justify-center items-center min-h-screen py-20">
      <h1>Link Nest</h1>
      <div className="w-full">
        <div className="text-center">
          <LayoutSimple></LayoutSimple>
        </div>
      </div>
    </div>
  );
}
