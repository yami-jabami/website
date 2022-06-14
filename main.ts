import blog from "https://deno.land/x/blog@0.3.3/blog.tsx";

await blog({
  title: "Yami Jabami",
  author: "Yami Jabami",
  avatar: "./jabami.jpeg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:yumeko@jabami.jp" },
    { title: "GitHub", url: "https://github.com/yami-jabami" },
  ],
  background: "#f9f9f9"
});