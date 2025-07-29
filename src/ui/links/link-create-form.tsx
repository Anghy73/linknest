import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SelectTags } from "../tags/select-tags";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import AddTag from "../tags/add-tag";
import { Textarea } from "@/components/ui/textarea";

function LinkCreateForm() {
  return (
    <>
      <div>link-create-form</div>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">+ Add Link</Button>
          </DialogTrigger>
          {/* sm:max-w-[425px] w-full bg-amber-300 md:min-w-[900px] */}
          <DialogContent className="w-full">
            <DialogHeader>
              <DialogTitle>Add link</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="url">Link</Label>
                <Input type="url" id="url" name="url" placeholder="https://" />
              </div>
              {/* <div className="grid gap-3"> */}
              <div className="grid gap-3">
                <Label htmlFor="shortUrl">Short Link</Label>
                <div className="flex">
                  <Button variant={"outline"}>dominio.com</Button>
                  <Input
                    id="shortUrl"
                    name="shortUrl"
                    defaultValue=""
                    disabled
                  />
                </div>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tags">Tags</Label>
                <div className="flex gap-2">
                  <SelectTags></SelectTags>
                  <AddTag></AddTag>
                </div>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="comments">Comments</Label>
                <div className="flex gap-2">
                  <Textarea className="max-h-[100px]" placeholder="Website to see projects of other people..." name="comment"></Textarea>
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}

export default LinkCreateForm;
