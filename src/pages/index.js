import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome all</h1>
    <p>Thank you for visiting this blog.</p>
    <section>
      <p>
        Here I will be writing about things that I learn in the interest of
        gaining a deeper and more thorough understanding. Topics will include
        technology/programming, philosophy, fitness and physics, but it could
        really be anything that I find fascinating.{" "}
      </p>
      <p>
        The idea is that writing about a topic will force you to think about it
        more deeply, and it might expose any weaknesses in your understanding.
      </p>
    </section>
  </Layout>
)

export default IndexPage
