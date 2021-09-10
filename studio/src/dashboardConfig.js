export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "613b789a564f8a00ac9b268b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-nho5cem4",
                  apiId: "32ce43d1-fbeb-46c8-a403-170c2f4abbe0",
                },
                {
                  buildHookId: "613b789a1e611500b99eca0c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ok466rec",
                  apiId: "40f5a4f8-761e-4191-868b-f59144f6538d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/b-ry/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ok466rec.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
