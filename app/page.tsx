import { redirect } from "next/navigation";

export default function Home() {
  redirect("/love");
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl">fanxin の 网站 ~~</h1>
        <a href="/happy-birthday/index.html">
          <h1 className="text-xl underline">点击前往过生日</h1>
        </a>
      </main> */}
    </div>
  );
}
