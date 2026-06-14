import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

// Data
// TODO Example Selection, will get proper descriptions and potentially different Tools
const FEATURES = [
  {
    title: "Scale Cage",
    description: "Placeholder",
  },
  {
    title: "Clip Tool",
    description: "Placeholder",
  },
  {
    title: "Arch Tool",
    description: "Placeholder",
  },
  {
    title: "Draw Shape",
    description: "Placeholder",
  },
  {
    title: "Hotspot Editor",
    description: "Placeholder",
  },
  {
    title: "Circle Scatter",
    description: "Placeholder",
  },
];

// Components
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow} />
      <div className={styles.heroGrid} />
      <div className={styles.heroInner}>
        <div className={styles.badge}>Blender Addon · v2.0</div>
        <h1 className={styles.heroTitle}>
          Leon's Modeling
          <br />
          <span className={styles.heroAccent}>Toolkit</span>
        </h1>
        <p className={styles.heroSub}>
          A professional Blender addon for faster modeling workflows.
          <br />
          Inspired by Maya, 3ds Max, and Hammer Editor.
        </p>
        <p className={styles.heroCompat}>
          Confirmed: Blender <strong>3.6 · 4.5 · 5.0 · 5.1</strong>
        </p>
        <div className={styles.heroButtons}>
          <Link
            className={styles.btnPrimary}
            to="/docs/getting-started/installation"
          >
            Get Started
          </Link>
          <Link
            className={styles.btnOutline}
            href="https://3leon.gumroad.com/l/LeonsModelingToolkit"
          >
            Purchase - $10
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What's in the Toolkit</h2>
        <p className={styles.sectionSub}>
          A focused set of tools that fill the gaps in Blender's default modeling workflow.
        </p>
        <div className={styles.featureGrid}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoDemo() {
  return (
    <section className={styles.sectionAlt}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>See it in Action</h2>
        <p className={styles.sectionSub}>
          A full walkthrough of the toolkit's main features.
        </p>
        <div className={styles.videoWrapper}>
          {/* <iframe
            src="https://www.youtube.com/embed/TODOid"
            title="Leon's Modeling Toolkit Demo"
            allowFullScreen
          /> */}
          <div className={styles.videoPlaceholder}>
            <span>▶</span>
            <p>TODO YouTube embed here</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTARow() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.ctaRow}>
          <div className={styles.ctaCard}>
            <h3>New user?</h3>
            <p>
              Start with installation to be up and running in a few minutes.
            </p>
            <Link
              className={styles.btnPrimary}
              to="/docs/getting-started/installation"
            >
              Installation
            </Link>
          </div>
          <div className={styles.ctaCard}>
            <h3>Looking for a tool?</h3>
            <p>
              Browse the full reference.
            </p>
            <Link className={styles.btnOutline} to="/docs/tools/overview">
              Browse Tools
            </Link>
          </div>
          <div className={styles.ctaCard}>
            <h3>Need help?</h3>
            <p>Join the Discord or reach out directly. Bugs get fixed fast.</p>
            <Link
              className={styles.btnOutline}
              href="https://discord.com/invite/2sz2xy4srU"
            >
              Discord
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Page
export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Hero />
      <main>
        <FeatureGrid />
        <VideoDemo />
        <CTARow />
      </main>
    </Layout>
  );
}
