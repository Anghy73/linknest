import Header from "@/ui/header"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-20">
      <Header></Header>
      {children}
    </div>
  )
}

export default Layout