import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MyCustomBtn } from "../components/button";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { useEffect, useRef } from "react";

const ListIndex: NextPage = () => {
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
      <nav className="flex-container">
        <div className="flex-item">Nav Item</div>
        <div className="flex-item">Nav Item</div>
        <div className="flex-item">Nav Item</div>
      </nav>
      <div className="grid-wrapper">
        <div className="grid-container">
          <div className="grid-item">One</div>
          <div className="grid-item">Two</div>
          <div className="grid-item">Three</div>
          <div className="grid-item">Four</div>
          <div className="grid-item">Five</div>
        </div>
      </div>
    </>
  );
};

export default ListIndex;
