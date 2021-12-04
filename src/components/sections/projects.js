import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  height: 100vh;
  position: relative;

  @media screen and (max-width: 640px) {
    margin: 0 5%;
  }

  @media screen and (min-width: 641px) {
    margin-left: 200px;
  }
`;

const ProjectSelectorContainer = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (min-width: 641px) {
    float: left;
    width: 50%;
  }
`;

const ProjectContentContainer = styled.div`
  position: relative;

  @media screen and (min-width: 641px) {
    float: left;
    top: 50%;
    transform: translateY(-50%);
    width: 50%;
  }
`;

const ComingSoon = styled.h2`
  text-decoration: none;

  .seethrough {
    color: black;
    -webkit-text-fill-color: #faf2e5; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
  }

  @media screen and (max-width: 640px) {
    margin-top: 10px;
  }
`;

const Projects = ({ innerWidth }) => {
  return (
    <ProjectsContainer id="projects">
      <ProjectSelectorContainer>
        <h2>Projects</h2>
        {innerWidth && innerWidth <= 640 ? (
          <ComingSoon>
            <span className="seethrough">Coming</span> Soon
          </ComingSoon>
        ) : (
          <></>
        )}
      </ProjectSelectorContainer>
      {innerWidth && innerWidth >= 641 ? (
        <ProjectContentContainer>
          <ComingSoon>
            <span className="seethrough">Coming</span> Soon
          </ComingSoon>
        </ProjectContentContainer>
      ) : (
        <></>
      )}
    </ProjectsContainer>
  );
};

export default Projects;
