import Intro from 'components/Intro';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Head>
        <title>Your Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
    </div>
  );
};

export default Home;
