import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MyCustomBtn } from "../components/button";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { useEffect, useRef } from "react";

const Index: NextPage = () => {
  const isAvailable = useRef(false);
  // const matchMedia = window?.matchMedia;

  console.log("process.env::: ", process.env);

  // console.log("matchMedia::: ", matchMedia);

  useEffect(() => {
    isAvailable.current =
      typeof window !== "undefined" && window.location.search;
  }, []);

  return (
    <>
      <div className="grid-container">
        <header>Header</header>
        <aside>aside</aside>
        <section>Header</section>
        <aside>Header</aside>
        <footer>Header</footer>
      </div>
    </>
  );
};

export default Index;
