// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import GridItems from "../components/gridItems"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />

    <div style={styles.goBackcontainer}>
      <Link to="/" style={styles.leftArrow}>
        &#x2190; Go Back
      </Link>
    </div>

    <h1>Most Beautiful Dogs</h1>

    <GridItems />
  </Layout>
)

const styles = {
  leftArrow: {
    fontSize: "1.25em",
    textDecoration: "none",
  },
  goBackcontainer: {
    margin: "50px 0",
  },
}

export default SecondPage
