import React from "react";

export default ({ data }) => {
  const post = data.markdownRemark;
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
      <h1
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {post.frontmatter.title}
      </h1>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
