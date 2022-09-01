import React from "react";
import { RenderDynamicProp } from "../lib/netlifyDynamicProps";

export const getStaticProps = async () => {
  const title = "TITLE NOT CHANGED";

  return {
    props: {
      title,
    },
  };
};

export const getDynamicProps = async () => {
  const test = await (
    await fetch("https://jsonplaceholder.typicode.com/todos/2")
  ).json();
  const name = test?.title;

  return { props: { title: name } };
};

export default function Home({ title }) {
  let dynamicTitle = RenderDynamicProp(title);

  return (
    <div>
      <div>Original: TITLE NOT CHANGED </div>
      <div>New: {dynamicTitle}</div>
    </div>
  );
}
