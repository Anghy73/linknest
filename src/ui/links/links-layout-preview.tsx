import { buttonVariants } from "@/components/ui/button";
import { BsThreeDots } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

import { LinkDataBD } from "../../../types/link-data-type";

function LayoutPreview({ links }: { links: LinkDataBD[] }) {
  console.log(links);
  if (!links || links.length === 0) {
    return (
      <div className="text-center text-slate-500 py-10">
        No se han encontrado links.
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 px-20 justify-items-center">
        {links?.map((link) => (
          <a key={link.id} href={link.url} target="_blank" className="grid w-full">
            <div className="grid grid-rows-3 grid-cols-1 auto-rows-fr border-2 p-2 rounded-md border-black/30">
              <figure className="w-full h-50 row-span-2">
                <img
                  className="w-full h-full object-contain"
                  src={link.img}
                  alt={`Image of ${link.title}`}
                />
              </figure>
              <div className="flex flex-col justify-center items-start text-start bg-gray-300 p-2 px-3 rounded-md">
                <span className="opacity-70 w-55 overflow-hidden whitespace-nowrap text-ellipsis">{link.url}</span>
                <h4 className="font-medium text-lg leading-6">
                  {link.title}
                </h4>
                <p className="w-55 overflow-hidden whitespace-nowrap text-ellipsis">
                  {link.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default LayoutPreview;
