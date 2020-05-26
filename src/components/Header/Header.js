import React from "react";
import styled from "styled-components";

export default function Header(props) {
  console.log(props, "Header");
  return (
    <Styles.Header>
      <Styles.Form>
        <Styles.Input
          type="text"
          placeholder="search here.... "
          value={props.inputValue}
          onChange={(e) => props.handleTextInput(e)}
          onKeyPress={(e) => props.handleKeyPress(e)}
        />
        <Styles.Button onClick={() => props.handleSearchBtn()}>
          Search
        </Styles.Button>
      </Styles.Form>
    </Styles.Header>
  );
}

const Styles = {
  Header: styled.div`
    background-color: rgb(24, 28, 32);
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 4px 0px;
    padding: 10px;
    z-index: 1000;
  `,
  Form: styled.form`
    display: flex;
    justify-content: center;
  `,

  Input: styled.input`
    padding: 10px 10px 10px 10px;
    width: 350px;
    text-decoration: none;
    background: rgba(138, 153, 168, 0.25);
    color: rgba(255, 255, 255, 0.65);
  `,

  Button: styled.span`
    padding: 9px 9px 9px 9px;
    color: #00baa5;
    border: 1px solid #00baa5;
    border-radius: 0px 5px 5px 0px;
  `,
};
