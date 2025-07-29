import { Skeleton } from "@/components/ui/skeleton";
import { Data, LinkData } from "../../../types/link-data-type";

// interface urlDataI {
//   author: null
//   date: string,
//   description: string,
//   image: {url: 'https://react.dev/images/og-home.png', type: 'png', size: 292630, height: 567, width: 1080},
//   lang: "en",
//   logo: {url: 'https://react.dev/apple-touch-icon.png', type: 'png', size: 5670, height: 180, width: 180},
//   publisher: "react.dev",
//   title: "React",
//   url: "https://react.dev/",
// }

function PreviewLink({
  urlData,
  urlDataLoader,
}: {
  urlData: Data | null;
  urlDataLoader: boolean;
}) {
  console.log(urlData);

  console.log("sdkhaskjdh");

  // if (!urlData) return;

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h3 className="mr-auto mb-2 font-medium">Preview Link</h3>
      <div className="w-full max-w-md">
        {urlData?.image.url ? (
          <figure className="w-full h-50">
            <img
              className="w-full h-full object-contain"
              src={urlData?.image?.url}
            ></img>
          </figure>
        ) : (
          <div className="w-full h-auto">
            <h3 className="font-bold">{urlData?.title}</h3>
          </div>
        )}
        {urlDataLoader && (
          <div className="">
            <Skeleton className="w-full h-40"></Skeleton>
            <div className="flex flex-col gap-2 mt-3">
              <Skeleton className="w-full h-6"></Skeleton>
              <Skeleton className="w-full h-6"></Skeleton>
              <Skeleton className="w-full h-6"></Skeleton>
            </div>
          </div>
        )}
        {urlData && (
          <div className="flex flex-col justify-center items-start bg-gray-200 p-2 px-3 rounded-md">
            <span className="opacity-70">{urlData?.url}</span>
            <h4 className="font-medium text-lg leading-6">{urlData?.title}</h4>
            <p className="w-80 overflow-hidden whitespace-nowrap text-ellipsis">
              {urlData?.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PreviewLink;
