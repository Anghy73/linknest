import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tag } from "../../../types/link-data-type";

function LinkFilterByTag({ tags }: { tags: Tag[] | undefined }) {
  console.log(tags);
  return (
    <Select name="tag-filter">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Tag" />
      </SelectTrigger>
      <SelectContent>
        {!!tags && tags.length >= 1
          ? tags?.map((tag) => (
              <SelectItem key={tag.id} value={tag.value}>
                {tag.label}
              </SelectItem>
            ))
          : <SelectItem value="no-tags">No se encontraron tags</SelectItem>}
      </SelectContent>
    </Select>
  );
}

export default LinkFilterByTag;
