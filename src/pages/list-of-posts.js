import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="List of popsts" />
    <h1>Here I will list all of the blog posts/articles written</h1>
    <section>
      <ul>
        <li>
          <a href="/the-very-first-post">The very first post</a>
        </li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
