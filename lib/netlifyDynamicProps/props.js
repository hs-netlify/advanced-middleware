export const dynamicProps = [{
          path: "/",

          props: async ()=>{
    const test = await (await fetch("https://jsonplaceholder.typicode.com/todos/2")).json();
    test.title = Math.random();
    const name = test?.title;
    return {
        props: {
            title: name
        }
    };
}
        }]