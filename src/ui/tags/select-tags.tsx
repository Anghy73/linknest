import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getTags } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";
import AddTag from "./add-tag";
import useLinksStore from "@/lib/store";

type TagI = {
  id: number;
  value: string;
  label: string;
};

export function SelectTags({
  tags,
  addTag,
  setTags,
}: {
  tags: Array<TagI>;
  addTag: (tag: TagI) => void;
  setTags: React.Dispatch<React.SetStateAction<TagI[]>>;
}) {
  const [open, setOpen] = useState(false);
  const [tagsOptions, setTagsOptions] = useState<TagI[]>();
  const [refresh, setRefresh] = useState<boolean>(false)
  const guestId = useLinksStore((state) => state.guestId)

  useEffect(() => {
    setRefresh(false)
    const getAllTags = async () => {
      const data = await getTags(guestId);
      console.log(data);
      setTagsOptions(data);
    };

    getAllTags();
  }, [refresh]);

  console.log(tags);
  

  return (
    <>
      <div className="w-full">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild className="w-full">
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="justify-between"
            >
              <div>
                {tags.length >= 1 ? (
                  <div className="flex gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag.id} variant={"outline"}>
                        {tag.label}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  "Select tag..."
                )}
              </div>
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <Command>
              <CommandInput placeholder="Search Tags..." className="h-9" />
              <CommandList>
                <CommandEmpty>No tags found.</CommandEmpty>
                <CommandGroup>
                  {tagsOptions?.map((tag) => (
                    <CommandItem
                      key={tag.value}
                      value={tag.value}
                      onSelect={(currentValue) => {
                        if (tags.some((tagV) => tagV.value == tag.value)) {
                          const filterTags = tags.filter(
                            (tag) => tag.value != currentValue
                          );

                          setTags(filterTags);
                          setOpen(false);
                          return;
                        }
                        console.log('tags values: ' + tags);
                        

                        addTag(tag);
                        setOpen(false);
                      }}
                    >
                      {tag.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          tags.some((tagV) => tagV.value == tag.value) ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <AddTag refresh={setRefresh}></AddTag>
    </>
  );
}
