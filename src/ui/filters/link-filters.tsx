import { Separator } from "@/components/ui/separator";
import LinkFilterByTag from "./link-filter-by-tag";
import LinkFilterByTitle from "./link-filter-by-title";
import { useEffect, useState } from "react";
import { getTags } from "@/lib/actions";
import { Tag } from "../../../types/link-data-type";
import { Button } from "@/components/ui/button";
import useLinksStore from "@/lib/store";

function LinkFilter() {
  const [tags, setTags] = useState<Tag[]>();
  const guestId = useLinksStore((store) => store.guestId)
  // const guestId = localStorage.getItem("guestId");

  useEffect(() => {
    const getAllTags = async () => {
      const data = await getTags(guestId);
      console.log(data);
      setTags(data);
    };

    getAllTags();
  }, []);
  return (
    <>
      <form className="w-full">
        <div className="flex items-center space-x-4 text-sm h-10 gap-5">
          <div className="flex justify-center items-center gap-2 flex-1">
            <span className="font-medium">Title: </span>
            <LinkFilterByTitle></LinkFilterByTitle>
          </div>
          <Separator orientation="vertical"></Separator>
          <div className="flex justify-center items-center gap-2">
            <span className="font-medium">Tags: </span>
          <LinkFilterByTag tags={tags}></LinkFilterByTag>
          </div>
          <Button type="button" variant={"default"} className="cursor-pointer">Apply</Button>
        </div>
        <Separator></Separator>
      </form>
    </>
  );
}

export default LinkFilter;
