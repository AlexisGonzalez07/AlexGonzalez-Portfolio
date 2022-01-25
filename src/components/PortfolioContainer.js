import React, { useState } from "react";
import Home from "../pages/Home";
import ProjectCards from "../pages/projectCards";
import Footer from "./Footer";
import NavTabs from "./NavTabs";
import NewAbout from "../pages/NewAbout";
import projects from "../projects";
import NewProjectCards from "../pages/NewProjectCards";
import "semantic-ui-css/semantic.min.css";
import "../App.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About Me") {
      return <NewAbout />;
    }
    if (currentPage === "My Projects") {
      return <NewProjectCards projects={projects} />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div id="content-container">
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <div id="page-container">{renderPage()}</div>

      <Footer />
    </div>
  );
}
