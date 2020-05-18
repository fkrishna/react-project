import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div style={{ width: '100%', marginBottom: `1.45rem`, }}>
      <Image />
    </div>

    <h1>Lorem ipsum</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nemo fugit nam quasi eum ratione, quod quaerat. Saepe alias molestias vitae aperiam quae adipisci molestiae assumenda amet quo hic, voluptatibus corrupti magnam id, maiores debitis vero, facere temporibus numquam consectetur velit aspernatur laboriosam nulla a quas. Earum quibusdam nam explicabo.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nemo fugit nam quasi eum ratione, quod quaerat. Saepe alias molestias vitae aperiam quae adipisci molestiae assumenda amet quo hic, voluptatibus corrupti magnam id, maiores debitis vero, facere temporibus numquam consectetur velit aspernatur laboriosam nulla a quas. Earum quibusdam nam explicabo.
    </p>


    <Link to="/page-2/">See List</Link>
  </Layout>
)

export default IndexPage
