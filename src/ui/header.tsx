import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import LinkCreateForm from "./links/link-create-form"

function Header() {
  return (
    <header className="fixed top-0 left-0 flex w-full justify-between items-center min-h-28 px-20 bg-white border-b-2">
      <h1 className="font-bold text-2xl cursor-pointer">Link Nest</h1>
      <ul>
        <li className="flex gap-4">
          <LinkCreateForm></LinkCreateForm>
          {/* <Link href="/account/login" className={buttonVariants({ variant: "outline"})}>Login</Link> */}
        </li>
      </ul>
    </header>
  )
}

export default Header