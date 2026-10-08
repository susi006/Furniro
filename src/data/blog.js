import blog1 from "../assets/img/blog-1.webp";
import blog2 from "../assets/img/blog-2.webp";
import blog3 from "../assets/img/blog-3.webp";
import r1 from "../assets/img/recent-1.webp";
import r2 from "../assets/img/recent-2.webp";
import r3 from "../assets/img/recent-3.webp";
import r4 from "../assets/img/recent-4.webp";
import r5 from "../assets/img/recent-5.webp";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.";

export const posts = [
  { id: 1, title: "Going all-in with millennial design", img: blog1, author: "Admin", date: "14 Oct 2022", tag: "Wood", text: lorem },
  { id: 2, title: "Exploring new ways of decorating", img: blog2, author: "Admin", date: "14 Oct 2022", tag: "Handmade", text: lorem },
  { id: 3, title: "Handmade pieces that took time to make", img: blog3, author: "Admin", date: "14 Oct 2022", tag: "Wood", text: lorem },
];

export const blogCategories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 },
];

export const recentPosts = [
  { title: "Going all-in with millennial design", date: "03 Aug 2022", img: r1 },
  { title: "Exploring new ways of decorating", date: "03 Aug 2022", img: r2 },
  { title: "Handmade pieces that took time to make", date: "03 Aug 2022", img: r3 },
  { title: "Modern home in Milan", date: "03 Aug 2022", img: r4 },
  { title: "Colorful office redesign", date: "03 Aug 2022", img: r5 },
];
