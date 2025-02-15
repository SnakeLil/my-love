import LovePage from "./components";
export async function generateMetadata() {
  const title = "可以成为我的恋人吗？";
  const seo = {
    title,
    description: "可以成为我的恋人吗？窝 !喜欢你!! ( >᎑<)♡︎ᐝ",
  };
  return {
    ...seo,
  };
}

export default async function Page(props: {
  params: {
    lang: string;
  };
  searchParams: {
    name: string;
  };
}) {
  return (
    <>
      <LovePage name={props.searchParams?.name} />
    </>
  );
}
