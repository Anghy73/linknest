"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BsThreeDots } from "react-icons/bs";
import { MdDownloadDone, MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { TbCopy } from "react-icons/tb";
import { Button, buttonVariants } from "@/components/ui/button";
import { LinkDataBD } from "../../../types/link-data-type";
import { deleteLinkWithTags, getAllLinks } from "@/lib/actions";
import useLinksStore from "@/lib/store";
import { useEffect, useState } from "react";
import LinkEditForm from "./link-edit-form";
import Link from "next/link";

function LayoutSimple({ links }: { links: LinkDataBD[] }) {
  const [copyStatus, setCopyStatus] = useState<
    { status: boolean; linkId: number | null } | undefined
  >();
  const guestId = useLinksStore((store) => store.guestId);
  const saveLinks = useLinksStore((store) => store.saveLinks);

  const deleteLink = async (linkId: number) => {
    const res = await deleteLinkWithTags(linkId);
    if (!res) return;
    const linksFresh = await getAllLinks(guestId);
    saveLinks(linksFresh);
  };

  const handleCopy = async (linkId: number, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus({
        status: true,
        linkId: linkId,
      });
    } catch (err) {
      setCopyStatus({
        status: false,
        linkId: null,
      });
      console.log(err);
    }
  };

  useEffect(() => {
    const setCopyStatusValue = () => {
      if (copyStatus) {
        setTimeout(() => {
          setCopyStatus({
            status: false,
            linkId: null,
          });
        }, 2000);
      }
    };
    setCopyStatusValue();
  }, [copyStatus]);

  if (!links || links.length === 0) {
    return (
      <div className="text-center text-slate-500 py-10">
        No se han encontrado links.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {links?.map((link) => (
        <div
          className="w-full flex justify-center items-center max-w-6xl py-2 px-3 border-2 rounded-2xl border-black/30"
          key={link.id}
        >
          <figure className="w-10 h-10 rounded-full overflow-hidden p-1 mr-2">
            <img
              className="w-full h-full object-contain"
              src={link.logo}
              alt={`Icon of ${link.title}`}
            />
          </figure>
          <div className="flex flex-col items-start flex-1">
            <div className="flex gap-2 justify-center items-center">
              <a
                className="font-medium underline text-lg"
                href={link.url}
                target="_blank"
              >
                {link.title}
              </a>
              <Button
                onClick={() => handleCopy(link.id, link.url)}
                variant={"ghost"}
                className="cursor-pointer"
              >
                {copyStatus?.status ? (
                  link.id == copyStatus.linkId ? (
                    <MdDownloadDone />
                  ) : (
                    <TbCopy></TbCopy>
                  )
                ) : (
                  <TbCopy></TbCopy>
                )}
              </Button>
            </div>
            <span className="text-slate-500 w-45 truncate overflow-hidden whitespace-nowrap text-start">{link.url}</span>
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
                <Link href={`/link/${link.id}/edit`} className="w-full">
                  <span
                    className={`${buttonVariants({
                      variant: "ghost",
                    })} cursor-pointer w-full flex justify-start`}
                  >
                    <MdEdit></MdEdit>
                    Edit
                  </span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span
                  onClick={() => handleCopy(link.id, link.url)}
                  className={`${buttonVariants({
                    variant: "ghost",
                  })} cursor-pointer w-full flex justify-start`}
                >
                  <FaLink></FaLink>
                  Share
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  onClick={() => deleteLink(link.id)}
                  className={`${buttonVariants({
                    variant: "ghost",
                  })} cursor-pointer w-full flex justify-start`}
                >
                  <MdDelete></MdDelete>
                  Delete
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  );
}

export default LayoutSimple;
