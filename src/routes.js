import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import BlogViewer from "./components/Blog/BlogViewer";

const Home = React.lazy(() => import("./components/Home/Home"));
const BlogDetail = React.lazy(() => import("./components/Blog/BlogDetail"));
const TestsDirectory = React.lazy(() =>
  import("./components/TestsDirectory/TestsDirectory")
);
const Requisitions = React.lazy(() =>
  import("./components/Requisitions/Requisitions")
);
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const About = React.lazy(() => import("./components/About/About"));
const Videos = React.lazy(() => import("./components/Videos/Videos"));
const LearningCenter = React.lazy(() =>
import("./components/LearningCenter/LearningCenter")
);
const Posters = React.lazy(() => import("./components/Posters/Posters"));
const Team = React.lazy(() => import("./components/Team/Team"));
const PublicationTab = React.lazy(() => import("./components/PublicationTab/PublicationTab"));
// const PubViewer = React.lazy(() => import("./components/PubViewer/PubViewer"));
const Publications = React.lazy(() => import("./components/PubViewer/Publications"));
//BlogPosts

export const routes = () => {
  const pages = [
    { path: "/", component: <Home /> },
    // { path: "/publications", component: <Blog /> },
    { path: "/blog-detail/:index", component: <BlogDetail /> },
    { path: "/viewer", component: <BlogViewer /> },
    { path: "/tests-directory", component: <TestsDirectory /> },
    { path: "/requisitions", component: <Requisitions /> },
    { path: "/contact", component: <Contact /> },
    { path: "/about", component: <About /> },
    { path: "/webinar-trianing", component: <Videos /> },
    { path: "/learning-center", component: <LearningCenter /> },
    { path: "/posters", component: <Posters /> },
    { path: "/team", component: <Team /> },
    { path: "/publications", component: <PublicationTab /> },
    { path: "/full-publications", component: <Publications /> },
    // { path: "/publication-viewer/:index", component: <PubViewer /> },
  ];
  return (
    <Suspense
      fallback={
        <h3 style={{ textAlign: "center", padding: "50px" }}>Loading...</h3>
      }
    >
      <Routes>
        {pages.map((page) => {
          return <Route path={page.path} exact element={page.component} />;
        })}
      </Routes>
    </Suspense>
  );
};
