import { Separator } from "@/components/ui/separator";
import LinkFilterByTag from "./link-filter-by-tag";
import LinkFilterByTitle from "./link-filter-by-title";
import { useEffect, useState } from "react";
import { getTags, sortLinksByFilter } from "@/lib/actions";
import { Tag } from "../../../types/link-data-type";
import { Button } from "@/components/ui/button";
import useLinksStore from "@/lib/store";

function LinkFilter() {
  const guestId = useLinksStore((store) => store.guestId);
  const saveLinksFilter = useLinksStore((store) => store.saveLinksFilter);
  const setTagsFilter = useLinksStore((store) => store.setTagsFilter);

  const [errorFilter, setErrorFilter] = useState("");

  useEffect(() => {
    const getAllTags = async () => {
      const data = await getTags(guestId);
      console.log(data);
      if (!data) return;
      setTagsFilter(data);
    };

    getAllTags();
  }, []);

  const handleSubmitFilter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setErrorFilter('')

    const data = new FormData(e.currentTarget);
    const title = data.get("title")?.toString();
    const tag = data.get("tag")?.toString();
    if (tag?.trim() == "" && title?.trim() == "") {
      return saveLinksFilter([]);
    }
    try {
      const res = await sortLinksByFilter({ title, tag, guestId });
      if (!res) return;
      if (res.length == 0) {
        saveLinksFilter([]);
        setErrorFilter("No se encontraron coincidencias");
      }
      saveLinksFilter(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form className="w-full px-4" onSubmit={(e) => handleSubmitFilter(e)}>
        <div className="flex flex-col md:flex-row items-center space-x-4 text-sm w-full h-15 gap-5">
          <div className="w-full flex flex-col">
            <div className="w-full flex justify-center items-center gap-2">
              <span className="font-medium">Title: </span>
              <LinkFilterByTitle></LinkFilterByTitle>
            </div>
          </div>
          <Separator className="hidden md:block" orientation="vertical"></Separator>
          <div className="w-full flex justify-center items-center gap-2">
            <span className="font-medium">Tags: </span>
            <LinkFilterByTag></LinkFilterByTag>
          </div>
          <Button type="submit" variant={"default"} className="cursor-pointer w-full max-w-[180px]">
            Apply
          </Button>
        </div>
        <Separator className="hidden md:block"></Separator>
        {errorFilter && (
          <span className="text-red-300 font-medium block text-center py-2">{errorFilter}</span>
        )}
      </form>
    </>
  );
}

export default LinkFilter;
