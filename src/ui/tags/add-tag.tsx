
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { createTag } from "@/lib/actions";
import { SetStateAction, useState } from "react";

function AddTag({ refresh }: { refresh: React.Dispatch<SetStateAction<boolean>> }) {
  const [tagName, setTagName] = useState('')

  const handleCreateTag = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("create tag");
    const data = new FormData(e.currentTarget);
    try {
      const res = await createTag(data);
      if (res?.id) {
        // mostrar un sonner avisando que se creo
        setTagName('')
        refresh(true)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"} className="cursor-pointer">
          Add Tag
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        {/* add tag to db */}

        <form
          onSubmit={(e) => handleCreateTag(e)}
          className="flex flex-col gap-4"
        >
          <div className="w-full">
            <label htmlFor="addTag" className="sr-only">
              Add tag name
            </label>
            <Input type="text" placeholder="Tag name" name="tagName" value={tagName} onChange={(e) => setTagName(e.currentTarget.value)}></Input>
          </div>

          <Button type="submit" variant={"outline"} className="cursor-pointer">
            Create
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}

export default AddTag;
