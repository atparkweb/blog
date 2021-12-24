import React from "react";
import ProfileImage from "../components/profile_image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <h2 className="page-title">About Me</h2>
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem`, minHeight: `250px`, display: `flex` }}>
      <div style={{ flex: `0 0 25%`, alignItems: `flex-start`, marginRight: `2rem` }}>
        <ProfileImage />
      </div>
      <div style={{ flex: `0 0 75%`, alignItems: `flex-end` }}>
        <p>I was born in Saint Paul, Minnesota, USA, and now living in Tokyo, Japan.
        <br/>My interests include Music, Drawing, Photography, Sumo, and Sake.</p>
        <p>I specialize in JavaScript programming, but I also have experience with other languages. I am currently building things with <a href="https://reactjs.org/" target="blank">React</a> and <a href="https://elixir-lang.org/" target="blank">Elixir</a>.</p>
        <p>I am available to collaborate on web or mobile projects.<br />Please feel free to contact me.</p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
