import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  height: 100vh;
  margin-left: 200px;
  position: relative;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const ProjectSelectorContainer = styled.div`
  float: left;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
`;

const ProjectContentContainer = styled.div`
  float: left;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
`;

const ComingSoon = styled.h2`
  text-decoration: none;

  .seethrough {
    color: black;
    -webkit-text-fill-color: #FAF2E5; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer  id="projects">
      <ProjectSelectorContainer>
        <h2>Projects</h2>
      </ProjectSelectorContainer>
      <ProjectContentContainer>
        <ComingSoon>
          <span className="seethrough">Coming</span> Soon
        </ComingSoon>
      </ProjectContentContainer>
    </ProjectsContainer>
  );
};

export default Projects;
