import React from "react";
import Head from "next/head";
import Header from "@/components/header";
import Discord from "@/components/discord";

const index = () => {
  return (
    <>
      <Head>
        <title>first app</title>
      </Head>
      <Header />
      <Discord />
    </>
  );
};

export default index;
