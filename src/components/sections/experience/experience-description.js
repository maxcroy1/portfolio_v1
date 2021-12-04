import React from "react";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";

const DescriptionContainer = styled.div`
  li {
    font-weight: bold;
    line-height: 1.2em;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 640px) {
    width: 100%;

    h3 {
      margin: 5px 0;
    }

    h4 {
      margin: 5px 0;
    }

    ul {
      padding: none;
    }

    li {
      font-size: 0.8em;
      list-style: disc;
    }
  }

  @media screen and (min-width: 641px) {
    width: 450px;

    h4 {
      margin-top: 10px;
    }
  }
`;

const ExperienceDescription = ({ activeTabId, jobsData }) => {
  return (
    <DescriptionContainer>
      {jobsData &&
        jobsData.map(({ node }, i) => {
          const { frontmatter, body } = node;
          const { title, url, company, range } = frontmatter;

          return (
            <div hidden={activeTabId !== i}>
              <h3>
                {title} at{" "}
                <a href={url} target="_blank" rel="noreferrer">
                  {company}
                </a>
              </h3>
              <h4>{range}</h4>
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          );
        })}
    </DescriptionContainer>
  );
};

export default ExperienceDescription;
