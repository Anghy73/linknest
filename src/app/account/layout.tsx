import Header from "@/ui/header"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Header></Header>
      {children}
    </div>
  )
}

export default Layout