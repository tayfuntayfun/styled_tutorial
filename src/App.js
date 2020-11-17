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

const App = () => {
    return (
        <MainWrapper>
            <Button primary>My primary Button</Button>
            <Button>My Button</Button>
        </MainWrapper>
    );
};

export default App;
