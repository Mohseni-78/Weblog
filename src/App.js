import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthorPages from "./components/authors/AuthorPages";
import BlogPages from "./components/blogs/BlogPages";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout";
import ScrollToTop from "./components/shared/ScrollToTop";

const App = () => {
  

  return (
    <Layout>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} index/>
        <Route path="blogs/:slug" element={<BlogPages />} />
        <Route path="authors/:slug" element={<AuthorPages />} />
      </Routes>
    </Layout>
  );
};

export default App;
