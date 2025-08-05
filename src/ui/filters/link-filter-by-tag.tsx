import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useLinksStore from "@/lib/store";

function LinkFilterByTag() {
  const tagsFilter = useLinksStore((store) => store.tagsFilter)
  console.log(tagsFilter);
  return (
    <Select name="tag">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Tag" />
      </SelectTrigger>
      <SelectContent>
        {!!tagsFilter && tagsFilter.length >= 1
          ? tagsFilter?.map((tag) => (
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
