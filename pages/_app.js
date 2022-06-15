import "../styles/globals.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";

const Background = dynamic(
  () => import("./../components/Background/Background"),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Background />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
