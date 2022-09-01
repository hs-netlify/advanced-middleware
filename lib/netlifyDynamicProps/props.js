import { join } from "lodash-es";

export const dynamicProps = [
  {
    path: "/",

    props: async () => {
      const name = join(["a", "b", "c"], "-");

      return {
        props: {
          title: name,
        },
      };
    },
  },
  {
    path: "/movie/*",

    props: async () => {
      const test = await (
        await fetch("https://jsonplaceholder.typicode.com/todos/1")
      ).json();
      const name = "newTitleMovie!!";
      return {
        props: {
          title: name,
        },
      };
    },
  },
  {
    path: "/test",

    props: async () => {
      // const test = await (
      //   await fetch("https://jsonplaceholder.typicode.com/todos/1")
      // ).json();
      const name = "newTitle";
      return {
        props: {
          title: name,
        },
      };
    },
  },
];
