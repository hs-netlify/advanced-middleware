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

export const dynamicEdgeProps = async () => {
  //Some prop logic
  // const propData = await ( await fetch('my-api.com/data') ).json();
  //Some path
  const path = "path/here/";
  const prop = {
    name: "titleProp",
    value: "My New title set from dynamic edge prop",
  };
  return { path, prop };
};

export default function Home({ titleProp }) {
  const [title, setTitle] = useState();

  useEffect(() => {
    setTitle(titleProp);
  }, []);

  return (
    <div>
      <div>Original: TITLE NOT CHANGED </div>
      <div>New: {title}</div>
    </div>
  );
}
