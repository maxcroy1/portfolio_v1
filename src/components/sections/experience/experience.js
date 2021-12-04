import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { ExperienceDescription } from "../../../components";

const ExperienceContainer = styled.div`
  height: 100vh;
  position: relative;

  @media screen and (max-width: 640px) {
    margin: 0 5%;
  }

  @media screen and (min-width: 641px) {
    margin-left: 200px;
  }
`;

const ExperienceButtons = styled.div`
  position: relative;

  ul {
    padding-left: 0;
  }

  li {
    list-style: none;
    margin-bottom: 10px;
    padding: 0;
  }

  .selected {
    text-decoration: underline;
  }

  @media screen and (max-width: 640px) {
    top: 50%;
    transform: translateY(-50%);

    ul {
      display: flex;
      overflow-x: auto;
      width: 100%;
    }
  }

  @media screen and (min-width: 641px) {
    float: left;
    top: 50%;
    transform: translateY(-50%);
    width: 50%;
  }
`;

const ExperienceContent = styled.div`
  float: left;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;

  @media screen and (max-width: 640px) {
    display: none;
  }

  @media screen and (min-width: 641px) {
  }
`;

const Employer = styled.button`
  background-color: #faf2e5;
  border: none;
  display: inline;
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
  vertical-align: middle;

  @media screen and (max-width: 640px) {
    font-size: 0.95em;
    white-space: nowrap;
  }

  @media screen and (min-width: 641px) {
  }
`;

const Experience = ({ innerWidth }) => {
  const [activeTabId, setActiveTabId] = useState(0);

  const data = useStaticQuery(graphql`
    query {
      jobs: allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { ne: "jobs" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              company
              date
              location
              range
              title
              url
            }
            body
          }
        }
      }
    }
  `);

  const jobsData = data.jobs.edges;

  return (
    <ExperienceContainer id="experience">
      <ExperienceButtons>
        <h2>
          <u>Experience</u>
        </h2>
        <ul>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { company } = node.frontmatter;
              return (
                <li>
                  <Employer
                    key={i}
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                    className={activeTabId === i ? "selected" : null}
                  >
                    {company}
                  </Employer>
                </li>
              );
            })}
        </ul>
        {!!innerWidth && innerWidth <= 640 ? (
          <ExperienceDescription
            activeTabId={activeTabId}
            jobsData={jobsData}
          />
        ) : (
          <></>
        )}
      </ExperienceButtons>
      {!!innerWidth && innerWidth >= 641 ? (
        <ExperienceContent>
          <ExperienceDescription
            activeTabId={activeTabId}
            jobsData={jobsData}
          />
        </ExperienceContent>
      ) : (
        <></>
      )}
    </ExperienceContainer>
  );
};

export default Experience;
