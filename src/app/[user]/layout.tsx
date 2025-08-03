import Header from "@/ui/header"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Header></Header>
      {children}
    </div>
  )
}

export default Layout