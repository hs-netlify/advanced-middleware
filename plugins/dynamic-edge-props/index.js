const { getPaths } = require("./utils");
const fs = require("fs");
exports.onBuild = async function ({}) {
  let paths = getPaths();

  const dynamicProps = [];
  console.log(paths);

  await Promise.all(
    paths.map(async (page) => {
      console.log(page);
      let pg = require(`../../.next/server/${page}`);
      console.log(pg);

      if (pg.getDynamicProps) {
        console.log("here");
        dynamicProps.push(`{
          path: "${page
            .replace("pages", "")
            .replace(".js", "")
            .replace(/\[([^\]]+)\]/g, "*")
            .replace("index", "")}",

          props: ${pg.getDynamicProps.toString().split(",")[0]}
        }`);
      }
    })
  );

  fs.writeFileSync(
    "./lib/netlifyDynamicProps/props.js",
    `export const dynamicProps = [${dynamicProps.join(",\r\n")}]`
  );
};
