export const dynamicProps = [{
          path: "/",

          props: async ()=>{
    const test = await (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json();
    const name = test?.title;
    return {
        props: {
            titleProp: name
        }
    };
}
        },
{
          path: "/movie/*",

          props: async ()=>{
    const test = await (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json();
    const name = "newTitleMovie";
    return {
        props: {
            titleProp: name
        }
    };
}
        },
{
          path: "/test",

          props: async ()=>{
    const test = await (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json();
    const name = "newTitle";
    return {
        props: {
            titleProp: name
        }
    };
}
        }]