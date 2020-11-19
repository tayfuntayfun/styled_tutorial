import React from "react";
import styled, { css } from "styled-components";
import { StyledButton, OuterWrapper } from "./styled";

const SuperButton = styled(StyledButton)`
    font-size: 2.5rem;
    color: black;
    &:hover {
        color: ${(props) => props.theme.colors.main};
    }
    background-color: ${(props) => props.theme.colors.lighter};
    @media ${({ theme }) => theme.mediaQueries.below768} {
        font-size: 1.4rem;
        color: white;
        background-color: red;
    }
`;

const Button = ({ primary, children, margin }) => {
    return (
        <OuterWrapper>
            <StyledButton margin={margin} primary={primary}>
                {children}
            </StyledButton>
            <SuperButton>{children} test</SuperButton>
        </OuterWrapper>
    );
};

export default Button;
