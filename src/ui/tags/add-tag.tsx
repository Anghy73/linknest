import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function AddTag() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"} className="cursor-pointer">
          Add Tag
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        {/* add tag to db */}

        <form action="" className="flex flex-col gap-4">
          <div className="w-full">
            <label htmlFor="addTag" className="sr-only">
              Add tag name
            </label>
            <Badge asChild variant={"outline"} className="w-full">
              <Input type="text" placeholder="Tag name" name="tagName"></Input>
            </Badge>
          </div>

          <Button type="button" variant={"outline"} className="cursor-pointer">
            Create
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}

export default AddTag;
