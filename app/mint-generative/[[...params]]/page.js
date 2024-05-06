"use client"
import { useRef } from "react";
import cs from "classnames";
import Head from "next/head";
import {MintGenerativeController}  from "../../containers/MintGenerative/Controller";
import { BrowserRouter as Router } from "react-router-dom";

const MintGenerative =  () => {
  const anchorRef = useRef(null);

  return (
    <>
      <Head>
        <title>fxhash — mint Generative Token</title>
        <meta
          key="og:title"
          property="og:title"
          content="fxhash — mint Generative Token"
        />
        <meta
          key="description"
          name="description"
          content="Mint your generative Token"
        />
      </Head>
      <section ref={anchorRef}>
          <h1>mint a Generative Token</h1>
              <Router basename="/mint-generative">
                <MintGenerativeController anchor={anchorRef} />
              </Router>
      </section>
    </>
  );
};


export default MintGenerative