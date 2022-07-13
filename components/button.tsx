import React from "react";
import styled, { css } from "styled-components";

export const MyCustomBtn = () => (
  <Button darkBtn={false}>Custom Btn Button</Button>
);

// Creating Simple button with props, checkout button component in elements folder for more advanced stuff about button
type buttonProps = {
  active?: boolean; // making this props optional
  darkBtn: boolean;
};

const Button = styled.button<buttonProps>`
  background-color: ${({ darkBtn }) =>
    darkBtn
      ? "black"
      : "cyan"}; // i am destructing here, instead of using as prop.darkBtn
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;

  &:hover {
    background: rebeccapurple;
  }

  /* if you want to place multiple lines of css, you can import {css}  */
  ${({ active }) =>
    active &&
    css`
      border: 2px solid gold;
      background-color: darkcyan;
      color: white;
    `}
`;
