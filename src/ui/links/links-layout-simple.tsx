import useLinksStore from "@/lib/store";
import { LinkData } from "../../../types/link-data-type";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BsThreeDots } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { TbCopy } from "react-icons/tb";
import { Button, buttonVariants } from "@/components/ui/button";

function LayoutSimple() {
  const { links } = useLinksStore();
  console.log(links);

  return (
    <div className="flex flex-col items-center gap-6 px-20">
      <h2>links-layout-simple</h2>
      {links.map((link) => (
        <div
          className="w-full flex justify-between max-w-6xl py-2 px-3 border-2 rounded-2xl border-black/30"
          key={link.data.url}
        >
          <figure className="w-15 h-15 rounded-full overflow-hidden object-contain p-1 mr-2">
            <img
              className="w-full h-full"
              src={link.data.logo.url}
              alt={`Icon of ${link.data.title}`}
            />
          </figure>
          <div className="flex flex-col items-start flex-1">
            <div className="flex gap-2 justify-center items-center">
              <a
                className="font-medium underline text-lg"
                href={link.data.url}
                target="_blank"
              >
                {link.data.title}
              </a>
              <Button variant={"ghost"} className="cursor-pointer">
                <TbCopy></TbCopy>
              </Button>
            </div>
            <span className="text-slate-500">{link.data.url}</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <span
                className={`${buttonVariants({
                  variant: "ghost",
                })} cursor-pointer`}
              >
                <BsThreeDots size={20}></BsThreeDots>
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60">
              <DropdownMenuLabel className="text-xl">Options</DropdownMenuLabel>
              <DropdownMenuSeparator></DropdownMenuSeparator>
              <DropdownMenuItem>
                <span
                  className={`${buttonVariants({
                    variant: "ghost",
                  })} cursor-pointer w-full flex justify-start`}
                >
                  <MdEdit></MdEdit>
                  Edit
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span
                  className={`${buttonVariants({
                    variant: "ghost",
                  })} cursor-pointer w-full flex justify-start`}
                >
                  <FaLink></FaLink>
                  Share
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span
                  className={`${buttonVariants({
                    variant: "ghost",
                  })} cursor-pointer w-full flex justify-start`}
                >
                  <MdDelete></MdDelete>
                  Delete
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  );
}

export default LayoutSimple;
