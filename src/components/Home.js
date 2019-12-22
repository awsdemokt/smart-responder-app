import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <div className="box">
        <p className="has-text-centered">
        {
        /*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.*/}
        </p>
      </div>
      <HomeContent />
    </Fragment>
  )
}
