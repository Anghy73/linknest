import { Button, buttonVariants } from "@/components/ui/button";
import { LinkDataBD } from "../../../types/link-data-type";
import { BsThreeDots } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { TbCopy } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { deleteLinkWithTags, getAllLinks } from "@/lib/actions";
import useLinksStore from "@/lib/store";
import { useState } from "react";
import Link from "next/link";

function LayoutInfo({ links }: { links: LinkDataBD[] }) {
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

  const handleCopy = async (linkId: number, shortUrl: string) => {
    try {
      await navigator.clipboard.writeText(`https://linknesti.vercel.app/shortlink/${shortUrl}`);
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

  if (!links || links.length === 0) {
    return (
      <div className="text-center text-slate-500 py-10">
        No se han encontrado links.
      </div>
    );
  }

  console.log(links);
  // const tagsLink = links.map((link) => link.linkTags);
  const tagsLink = links.map((link) => link.linkTags);

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 justify-items-center">
        {links?.map((link) => (
          <div
            className="flex flex-col gap-3 w-full border-2 p-2 rounded-md  border-black/30 max-w-[500px] pb-6"
            key={link.id}
          >
            <figure className="w-fll h-45 overflow-hidden object-contain row-span-2">
              <img
                className="w-full h-full object-contain"
                src={link.img}
                alt={`Image of ${link.title}`}
              />
            </figure>
            <div className="w-full grid grid-cols-1 grid-rows-4 px-3">
              <div className="flex pt-2">
                <figure className="w-20 h-15 rounded-full overflow-hidden object-contain p-1 mr-2">
                  <img
                    className="w-full h-full object-cover"
                    src={link.logo}
                    alt={`Icon of ${link.title}`}
                  />
                </figure>
                <div className="flex w-full flex-col items-start">
                  <div className="w-full flex justify-between items-center">
                    <a
                      className="font-medium underline text-lg w-40 text-start truncate overflow-hidden whitespace-nowrap"
                      href={link.url}
                      target="_blank"
                    >
                      {link.title}
                    </a>
                    <div className="">
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
                          <DropdownMenuLabel className="text-xl">
                            Options
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator></DropdownMenuSeparator>
                          <DropdownMenuItem>
                            <Link
                              href={`/link/${link.id}/edit`}
                              className="w-full"
                            >
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
                              onClick={() => handleCopy(link.id, link.shortUrl)}
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
                              onClick={() => deleteLink(link.id)}
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
                  </div>
                  <span className="text-slate-500 w-50 truncate overflow-hidden whitespace-nowrap text-start">
                    {link.url}
                  </span>
                </div>
              </div>
              <div className="row-span-3 pt-6">
                <p className="text-start">{link.description}</p>
              </div>
              <div className="flex py-4 gap-2">
                <span className="font-medium">Tags: </span>
                {link.linkTags.map((tag) => (
                  <Badge variant={"outline"} key={tag.id}>
                    {tag.tag.label}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Details: </span>
                <p className="text-start">{link.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LayoutInfo;
