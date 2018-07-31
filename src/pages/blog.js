import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import { css } from "glamor";

const linkStyle = css({
  ":hover": {
    color: "#A4C639"
  }
});

export default ({ data }) => {
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
        DevBlog
      </g.H1>
      <h4 className={linkStyle}>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            className={linkStyle}
            to={node.fields.slug}
            css={{
              textAlign: `center`,
              textDecoration: `none`,
              color: `inherit`
            }}
          >
            <g.H3 className={linkStyle}>
              {node.frontmatter.title} {"  "}
              <g.Span color="#BBB">- {node.frontmatter.date}</g.Span>
            </g.H3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
