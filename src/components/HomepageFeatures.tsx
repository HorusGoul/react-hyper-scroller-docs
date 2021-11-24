import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    image: "/img/undraw_hyper_easy.svg",
    description: (
      <>
        The HyperScroller component is almost as easy to use as a regular list,
        no need to worry about what you want to display.
      </>
    ),
  },
  {
    title: "Hyper-fast for most use-cases",
    image: "/img/undraw_hyper_car.svg",
    description: (
      <>
        A balance between DX and performance. The result is a virtual list that
        is fast enough and easy to implement in most projects.
      </>
    ),
  },
  {
    title: "Supports advanced features",
    image: "/img/undraw_hyper_advanced.svg",
    description: (
      <>
        Need scroll restoration, scrolling to a specific item by its ID, or have
        items with unknown heights? All of that is supported.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
