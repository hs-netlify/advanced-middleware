import React, { useState, useEffect } from "react";

export const getStaticProps = async () => {
  const titleProp = "TITLE NOT CHANGED";
  return {
    props: {
      titleProp,
    },
  };
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
