import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MyCustomBtn } from "../components/button";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { useEffect, useRef } from "react";

const AppContainer = styled.div`
  padding: 0;
  margin: 0;
`;

const LandingPageBodyWrapper = styled.div`
  display: grid;
  background-color: navyblue;
  grid-template-columns: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  @media (min-width: 481px) {
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 3fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }

  @media (min-width: 1025px) {
    grid-template-columns: 2fr 4fr 2fr 2fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;

const LetterComponent = styled.div`
  background-color: #0069b3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 70px;
  color: white;
  line-height: 1;
  font-family: "hobeaux-rococeaux-background", Helvetica;
  font-weight: 200;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const Header = styled.div`
  background-color: pink;
`;

const Nav = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: stretch;
`;

const OldIndex: NextPage = () => {
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
      <AppContainer>
        <Nav>
          <div>Fish</div>
          <div>Dish</div>
          <div>Wish</div>
        </Nav>
        <LandingPageBodyWrapper>
          <LetterComponent>
            <div className="letter">A</div>
          </LetterComponent>
          <LetterComponent>
            <div className="letter">B</div>
          </LetterComponent>
          <LetterComponent>
            <div className="letter">C</div>
          </LetterComponent>
          <LetterComponent>
            <div className="letter">D</div>
          </LetterComponent>
          <LetterComponent>
            <div className="letter">B</div>
          </LetterComponent>
          <LetterComponent>
            <div className="letter">C</div>
          </LetterComponent>
          <LetterComponent>
            <div className="letter">D</div>
          </LetterComponent>
        </LandingPageBodyWrapper>
      </AppContainer>
    </>
  );
};

export default OldIndex;
