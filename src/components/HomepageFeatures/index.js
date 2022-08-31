import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';



const FeatureList = [
  {
    href: '/docs/create-project',
    title: 'Getting started',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Request a demo and get an individual ready-to-go solution
      </>
    ),
  },
  {
    href: '/docs/create-project',
    title: 'How it works',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Service description
      </>
    ),
  },
  {
    href: '/docs/create-project',
    title: 'FAQ',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Answers to questions about Membrace
      </>
    ),
  },
];


function Feature({Svg, href, title, description}) {
  return (
    
    <div className={clsx('col col--4')}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
