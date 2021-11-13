import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Experience = () => {
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
    <>
      <h2>Experience</h2>
      {jobsData &&
        jobsData.map(({ node }, i) => {
          const { company } = node.frontmatter;
          return (
            <button
              key={i}
              isActive={activeTabId === i}
              onClick={() => setActiveTabId(i)}
            >
              {company}
            </button>
          );
        })}
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
    </>
  );
};

export default Experience;
