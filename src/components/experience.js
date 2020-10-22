import React, { useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import experienceStyles from '../styles/experience.module.css'

export default function Experience() {
    const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `);

  const jobsData = data.jobs.edges;

  const [tab, setTab] = useState(0);

  return (
    <div className={experienceStyles.container}>
      <div className={experienceStyles.contentContainer}>
        <div className={experienceStyles.description}>
          {jobsData.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { title, url, company, range } = frontmatter;

            return (
              <div hidden={tab !== i}>
                <h2>
                  <span>{title}</span>
                  <span className="company">
                    &nbsp;@&nbsp;
                    <a href={url} className="inline-link">
                      {company}
                    </a>  
                  </span>
                </h2>
                <p>{range}</p>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            );
          })}
        </div>
        <div className={experienceStyles.tabs}>
          <h1 className={experienceStyles.title}><u>EXPERIENCE</u></h1>
          <ul>
              {jobsData.map(({ node }, i) => {
                const { company } = node.frontmatter;
                return (
                <li onClick={() => setTab(i)} key={i}>{company}</li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  )
}