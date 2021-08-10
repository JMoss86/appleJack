import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ThankYouPage = () => (
  <Layout>
    <SEO
        title="Thank You"
        keywords={[
            `Applejack's Ranch`,
            `Therapy Ranch`,
            `Donation`,
            `Charity`,
            `Thank You`,
        ]}
    />
    <div className="site-container not-found-page">
      <div className="container text-center">
        <h1>THANK YOU!</h1>
        <p>Your heroic donation helps make this possible!</p>
      </div>
    </div>
  </Layout>
);

export default ThankYouPage;