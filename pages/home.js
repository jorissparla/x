import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

const Home = () => {
  return <Editor value="" onChange={(v) => console.log(v)} />;
};
export default Home;
