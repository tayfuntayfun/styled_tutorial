import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
    padding: 1rem;
    font-size: 15px;
    outline: none;
    color: ${({ primary }) => (primary ? "yellow" : "#fff")};
    border: none;
    background-color: gray;
    margin: auto;
    margin-bottom: 10px;
    width: 250px;
    ${({ primary }) =>
        primary &&
        css`
            color: white;
            background-color: palevioletred;
        `}
`;

const SuperButton = styled(StyledButton)`
    font-size: 2.5rem;
    color: yellow;
`;

const Button = ({ primary, children }) => {
    return (
        <>
            <StyledButton primary={primary}>{children}</StyledButton>
            <SuperButton>{children}</SuperButton>
        </>
    );
};

export default Button;
