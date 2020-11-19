import styled, { css, keyframes } from "styled-components";
import React from "react";

export const Wrapper = styled.section`
    margin-top: 2rem;
    background-color: paleturquoise;
    display: flex;
    flex-direction: column;
`;

export const FadeIn = keyframes`
0% {
    opacity: 0;
}

100%{
    opacity: 1;
}`;

export const StyledButton = styled.button`
    padding: 1rem;
    font-size: 15px;
    outline: none;
    color: ${({ primary }) => (primary ? "yellow" : "#fff")};
    border: none;
    background-color: gray;
    margin: ${({ margin }) => margin || "2rem"};
    margin-bottom: 10px;
    width: 250px;
    animation: 2s ${FadeIn};
    /* &:hover {
        color: blue;
    } */
    ${({ primary }) =>
        primary &&
        css`
            color: white;
            background-color: palevioletred;
        `};
`;

export const OuterWrapper = styled.div`
    background-color: purple;
    margin: 10px;
`;
