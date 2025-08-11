import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useLinksStore from "@/lib/store";

function LinkFilterByTag() {
  const tagsFilter = useLinksStore((store) => store.tagsFilter);
  console.log(tagsFilter);
  return (
    <div className="w-full">
      <Select name="tag">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Tag" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value=" ">nothing</SelectItem>
          {!!tagsFilter && tagsFilter.length >= 1 ? (
            tagsFilter?.map((tag) => (
              <SelectItem key={tag.id} value={tag.value}>
                {tag.label}
              </SelectItem>
            ))
          ) : (
            <SelectItem value="no-tags">No se encontraron tags</SelectItem>
          )}
        </SelectContent>
      </Select>
    </div>
  );
}

export default LinkFilterByTag;
