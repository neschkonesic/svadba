import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <Seo title="Хвала Вам" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
      <h1>Got your message</h1>
      <p>Јавићемо се у најкраћем року.</p>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Вратимо се на насловну страницу!
      </Link>
    </div>
  </Layout>
)

export default Thanks
