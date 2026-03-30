import React, { useEffect, useState } from "react";

import Service3_1 from "./Page1";
import Service3_2 from "./Page2";
import Service3_3 from "./Page3";
import Service3_4 from "./Page4";
import HomePage9 from "../Home/HomePage9";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/blogs`);
        const data = await res.json();
        // Show blogs according to latest uploads first
        const sortedBlogs = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date),
        );
        setBlogs(sortedBlogs);
      } catch (err) {
        console.error("failed to load blogs", err);
      }
    };

    fetchBlogs();
  }, []);

  const latest = blogs.slice(0, 2);
  const others = blogs.slice(2);

  return (
    <div>
      <Service3_1 blogs={latest} />
      <Service3_2 olderBlogs={others} />

      <Service3_4 />
      <HomePage9 />
    </div>
  );
};

export default Blog;
