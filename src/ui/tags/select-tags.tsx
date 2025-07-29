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
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

const tagsOptions = [
  {
    value: "tools",
    label: "Tools",
  },
  {
    value: "frontend",
    label: "Frontend",
  },
  {
    value: "backend",
    label: "Backend",
  },
];

export function SelectTags() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [tags, setTags] = useState<Array<string>>([]);

  const addTag = (tag: string) => {
    const newTag = tag;
    const newState = [...tags, newTag];
    setTags(newState);
  };

  return (
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
                    <Badge key={tag} variant={"outline"}>
                      {tag}
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
                {tagsOptions.map((tag) => (
                  <CommandItem
                    key={tag.value}
                    value={tag.value}
                    onSelect={(currentValue) => {
                      console.log(currentValue);
                      if (tags.includes(currentValue)) {
                        const filterTags = tags.filter(
                          (tag) => tag != currentValue
                        );
                        setTags(filterTags);
                        setOpen(false);
                        return;
                      }
                      addTag(currentValue);
                      // setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {tag.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        tags.includes(tag.value) ? "opacity-100" : "opacity-0"
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
  );
}

// {tags.length == 0 ? (
//         <Select onValueChange={(e) => handleChange(e)}>
//           <SelectTrigger className="w-full">
//             <SelectValue placeholder="Select a tag" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectGroup>
//               <SelectLabel>Select a tag</SelectLabel>
//               {/* agregar por los tags creados */}
//               <SelectItem value="apple">Apple</SelectItem>
//               <SelectItem value="banana">Banana</SelectItem>
//               <SelectItem value="blueberry">Blueberry</SelectItem>
//               <SelectItem value="grapes">Grapes</SelectItem>
//               <SelectItem value="pineapple">Pineapple</SelectItem>
//             </SelectGroup>
//           </SelectContent>
//         </Select>
//       ) : ( <div className="flex justify-start items-center w-full border-2 rounded-md px-3">
//         {
//           tags.map((tag) => (
//             <div key={tag}>{tag}</div>
//           ))
//         }
//       </div> )}

// {/* <div className="flex justify-between items-center w-full border-2 rounded-md px-3 pr-0">
//         <div className="flex gap-2 w-full">
//           {tags.map((tag) => (
//             <div key={tag}>{tag}</div>
//           ))}
//         </div>
//         <Select onValueChange={(e) => handleChange(e)}>
//           <SelectTrigger className="max-w-[50px] border-0 cursor-pointer">
//             {/* <SelectValue placeholder="Select a tag" /> */}
//           </SelectTrigger>
//           <SelectContent className="w-xs">
//             <SelectGroup>
//               {/* <SelectLabel>Select a tag</SelectLabel> */}
//               {/* agregar por los tags creados */}
//               <SelectItem value="apple">Apple</SelectItem>
//               <SelectItem value="banana">Banana</SelectItem>
//               <SelectItem value="blueberry">Blueberry</SelectItem>
//               <SelectItem value="grapes">Grapes</SelectItem>
//               <SelectItem value="pineapple">Pineapple</SelectItem>
//             </SelectGroup>
//           </SelectContent>
//         </Select>
//       </div> */}
