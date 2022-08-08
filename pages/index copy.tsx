import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MyCustomBtn } from "../components/button";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { useEffect, useRef } from "react";

const AppContainer = styled.div`
  // padding: 0;
  // margin: 0;
`;

const LandingPageBodyWrapper = styled.div`
  margin: 0 0 20px 0;
  width: 500px;
  height: 400px;
  border: 2px solid #ccc;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: repeat(2, 100px);
  justify-content: center;
  align-content: end;
`;

const BoxComponent = styled.div`
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
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

const BoxOne = styled(BoxComponent)`
  grid-column: 4 / 5;
`;

const BoxThree = styled(BoxComponent)`
  grid-column: 3 / 4;
`;

const FeatureBox = styled(BoxComponent)`
  grid-column: 1 / 3;
  grid-row: 1 / 4;
`;

const BoxFour = styled(BoxComponent)`
  grid-column: 3 / 4;
`;

const BoxFive = styled(BoxComponent)`
  grid-column: 4 / 5;
`;

const CopyIndex: NextPage = () => {
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
      {/* <AppContainer>
        <Nav>
          <div>Fish</div>
          <div>Dish</div>
          <div>Wish</div>
        </Nav> */}
      <LandingPageBodyWrapper>
        <FeatureBox>
          <div className="box item2">Two</div>
        </FeatureBox>

        <BoxOne>
          <div className="box item1">One</div>
        </BoxOne>
        <BoxThree>
          <div className="box item3">Three</div>
        </BoxThree>
        <BoxFour>
          <div className="box item4">Four</div>
        </BoxFour>
        <BoxFive>
          <div className="box item5">Five</div>
        </BoxFive>
      </LandingPageBodyWrapper>
      {/* </AppContainer> */}
    </>
  );
};

export default CopyIndex;
