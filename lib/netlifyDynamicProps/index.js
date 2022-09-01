import { dynamicProps } from "./props.js";

export const setDynamicProps = async (NextRequest, response) => {
  dynamicProps.sort((a, b) => a.path.length < b.path.length);

  await Promise.all(
    dynamicProps.map(async (page) => {
      const pattern = new URLPattern({ pathname: `${page.path}` });

      if (pattern.test(NextRequest.url)) {
        const dynamicProps = await page.props();

        Object.entries(dynamicProps.props).forEach(async (prop) => {
          response.setPageProp(prop[0], prop[1]);
        });
      }
    })
  );

  return response;
};
