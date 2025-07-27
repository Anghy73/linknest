import { getDataUrl } from "@/lib/actions";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Hello LinkNest</h1>

        <form action={getDataUrl} >
          <input type="text" placeholder="url" />
          <button className="cursor-pointer border-2 p-2 rounded-md">Obtener</button>
        </form>
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer> */}
    </div>
  );
}
