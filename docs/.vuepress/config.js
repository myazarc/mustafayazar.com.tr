import googleAnalyticsPlugin from "@vuepress/plugin-google-analytics";
import searchPlugin from "@vuepress/plugin-search";
import { defaultTheme } from "vuepress";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "tr-TR",
  title: "MustafaYazar | Blog",
  description: "Mustafa Yazar Karalama Defteri",

  theme: defaultTheme({
    navbar: [
      {
        text: "Anasayfa",
        link: "/",
      },
      {
        text: "Yazılar",
        link: "/blog/",
      },
    ],

    sidebar: {
      "/": [
        {
          text: "Son Yazılar",
          children: ["/blog/iklimdegisikligi.md", "/blog/chatgpt.md"],
        },
      ],
    },
  }),

  plugins: [
    googleAnalyticsPlugin({
      id: "G-VBC8X5DMHK",
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Ara",
        },
      },
      hotKeys: ["ctrl", "k"],
    }),
  ],
});
