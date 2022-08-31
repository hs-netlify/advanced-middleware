import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const titleProp = "TITLE NOT CHANGED";

  return {
    props: {
      titleProp,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getDynamicProps = async () => {
  const test = await (
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
  ).json();

  const name = "newTitleMovie";

  return { props: { titleProp: name } };
};

export default function Home({ titleProp }) {
  const [title, setTitle] = useState();

  useEffect(() => {
    setTitle(titleProp);
  });

  return (
    <div>
      <div>Original: TITLE NOT CHANGED </div>
      <div>New: {title}</div>
    </div>
  );
}
