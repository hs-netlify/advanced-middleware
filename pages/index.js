import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { DynamicPropHook } from "../lib/netlifyDynamicProps";

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

  test.title = Math.random();
  const name = test?.title;

  return { props: { title: name } };
};

export default function Home({ title }) {
  let dynamicTitle = DynamicPropHook(title);

  return (
    <div>
      <div>Original: TITLE NOT CHANGED </div>
      <div>New: {dynamicTitle}</div>
    </div>
  );
}
