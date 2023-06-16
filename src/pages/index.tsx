import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div
          className={clsx(styles.buttons, "flex flex-col text-center mb-10")}
        >
          <h1 className="mb-8">
            Visualizes and manages icon and image files <br />
            within your frontend project.
          </h1>
          <Link
            className="button button--secondary button--lg bg-[#007AFF] border-none"
            to="/docs/getting-started"
          >
            <span className="text-white">Getting Started</span>
          </Link>
        </div>
        <div className="flex justify-around mb-10">
          <div className="max-w-[300px] flex flex-col items-center justify-center p-3 border-[#007AFF] rounded-md text-center">
            <Link to="/docs/getting-started">
              <p className="text-lg font-bold text-[#007AFF]">Manage</p>
            </Link>
            <p>Manage duplicate and unused assets.</p>
          </div>
          <div className="max-w-[300px] flex flex-col items-center justify-center text-center">
            <Link to="/docs/static-build">
              <p className="text-lg font-bold text-[#007AFF]">Static Build</p>
            </Link>
            <p>
              Extract the visualization page to a static file for static
              deployment.
            </p>
          </div>
          <div className="max-w-[300px] flex flex-col items-center justify-center text-center">
            <Link to="/docs/category/icon-build">
              <p className="text-lg font-bold text-[#007AFF]">Icon Build</p>
            </Link>
            <p>Convert SVG to Component code to share the icon as code.</p>
          </div>
        </div>
        <div className="flex">
          <video
            className="w-full"
            src="https://github.com/assetbox/assetbox.github.io/assets/41789633/dd77b14a-d76d-4305-8b39-83c105384f92"
            autoPlay
            muted
            playsInline
            loop
          />
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Docs`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
