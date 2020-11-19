import React from "react";
import styled from "styled-components";
import Button from "./components/Button";

const MainWrapper = styled.section`
    padding: 10px;
    margin: auto;
    border: 1px solid red;
    text-align: center;
    width: 70%;
    display: flex;
    flex-direction: column;
`;

const Link = styled.a.attrs((props) => ({
    target: "_blank",
}))`
    color: violet;
    font-size: 1.5rem;
`;

const PaginationWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: ${({ page }) => {
        if (page === "first") return "flex-end";
        else if (page === "middle") return "space-between";
        else return "flex-start";
    }};
`;

const App = () => {
    return (
        <MainWrapper>
            <Button primary>My primary Button</Button>
            <Button>My Button</Button>
            <PaginationWrapper page="middle">
                <Button>Page 1</Button>
                <Button>Page 2</Button>
            </PaginationWrapper>
            <Link href="https://www.google.com">One Link</Link>
            <Link href="https://www.google.com">Two Link</Link>
        </MainWrapper>
    );
};

export default App;
