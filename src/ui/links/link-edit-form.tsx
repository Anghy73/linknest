"use client";

import { Label } from "@/components/ui/label";
import { LinkDataBD } from "../../../types/link-data-type";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SelectTags } from "../tags/select-tags";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import useLinksStore from "@/lib/store";
import { getAllLinks, updateLinkWithTags } from "@/lib/actions";

type TagI = {
  id: number;
  value: string;
  label: string;
};

function LinkEditForm({ link }: { link: LinkDataBD }) {
  const guestId = useLinksStore((state) => state.guestId);
  const saveLinks = useLinksStore((state) => state.saveLinks);
  const [tags, setTags] = useState<TagI[]>([]);

  const addTag = (tag: TagI) => {
    const newTag = tag;
    const newState = [...tags, newTag];
    setTags(newState);
  };

  useEffect(() => {
    setTags(link.linkTags.map((tag) => tag.tag));
  }, []);

  const handleEditLink = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(tags);

    const { title, comment } = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    if (title.toString().trim() == "" || comment.toString().trim() == "")
      return;

    const updateTagsIds = tags.map((tag) => ({ tagId: tag.id }));
    const updateData = {
      id: link.id,
      title: title.toString(),
      comment: comment.toString(),
      updateTagsIds: updateTagsIds,
      guestId: guestId,
    };
    console.log(updateData.updateTagsIds);

    try {
      const rest = await updateLinkWithTags(updateData);
      if (rest) {
        const res = await getAllLinks(guestId);
        saveLinks(res);
      }
      console.log(rest);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={(e) => handleEditLink(e)}
      className="flex flex-col max-w-4xl mx-auto border-2 border-black/30 rounded-lg p-4 gap-4"
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Title</Label>
        <Input name="title" type="text" defaultValue={link.title}></Input>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="tags">Tags</Label>
        <div className="flex gap-2">
          <SelectTags
            tags={tags}
            addTag={addTag}
            setTags={setTags}
          ></SelectTags>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="comment">Comment</Label>
        <Textarea name="comment" defaultValue={link.comment}></Textarea>
      </div>
      <div className="flex justify-end gap-3">
        <Button
          type="button"
          onClick={() => redirect(`/account/user/${guestId}`)}
          variant={"outline"}
          className="cursor-pointer"
        >
          Cancel
        </Button>
        <Button type="submit" className="px-6 cursor-pointer">
          Edit
        </Button>
      </div>
    </form>
  );
}

export default LinkEditForm;
