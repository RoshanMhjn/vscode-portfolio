import Head from "next/head";

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Portfolio of Roshan Maharjan, an aspiring web developer."
      />
      <meta
        name="keywords"
        content="roshan maharjan, roshan, maharjan, web developer portfolio, roshan web developer, roshan developer, mern stack, roshan maharjan portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Roshan Maharjan's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/a/mZX587K" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Roshan Maharjan",
};
