"use client";

import Head from 'next/head';
import VSCodeLayout from './components/vscode/VSCodeLayout';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Yosef Abate - Software Developer</title>
        <meta name="description" content="Yosef Abate's professional full-stack developer portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VSCodeLayout />
    </>
  );
}