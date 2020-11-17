import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 1rem;
    font-size: 15px;
    outline: none;
    color: ${({ primary }) => (primary ? "yellow" : "#fff")};
    border: none;
    background-color: gray;
    margin: 10px;
    width: 250px;
`;

export const Button = ({ primary, children }) => {
    return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default Button;
