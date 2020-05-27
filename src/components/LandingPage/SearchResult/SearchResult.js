import React from "react";

import styled from "styled-components";

export default function SearchResult(props) {
  return (
    <Styles.Container className="flex-container mr10">
      <Styles.Main>
        {!props.isLoading ? (
          <Styles.Heading>
            Total Result found: {props.totalResult}
          </Styles.Heading>
        ) : null}
        <Styles.CardContianer>
          {props.result &&
            props.result.map((item) => (
              <Styles.Card>
                <Styles.Image src={item.artworkUrl100} />
                <Styles.Details>
                  <Styles.Title>{item.trackName}</Styles.Title>
                  <Styles.Name>{item.artistName}</Styles.Name>
                  <Styles.TagsContainer>
                    <Styles.Tags>#{item.kind}</Styles.Tags>
                    <Styles.TagsPrice>USD: {item.trackPrice}</Styles.TagsPrice>
                  </Styles.TagsContainer>
                </Styles.Details>
              </Styles.Card>
            ))}
        </Styles.CardContianer>
      </Styles.Main>
    </Styles.Container>
  );
}

const Styles = {
  Container: styled.div`
    padding-top: 90px;
  `,

  Main: styled.div`
    padding: 20px 20px 20px 20px;
  `,
  Heading: styled.h1`
    color: #e88075;
    text-align: left;
    padding-left: 30px;
    @media (max-width: 900px) {
      text-align: center;
    }
  `,
  CardContianer: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 900px) {
      flex-direction: column;
    }
  `,
  Card: styled.div`
    display: flex;
    padding: 5px;
    margin: 20px 20px 20px 20px;
    border-radius: 5px;
    border-style: solid;
    border-color: lightslategray;
    border-width: thin;
    box-shadow: beige;
    z-index: 100;
    background-color: #222222;
    width: 45%;
    align-items: center;
    @media (max-width: 900px) {
      width: 90%;
    }
  `,
  Image: styled.img`
    height: 100px;
    width: 100px;
  `,

  Details: styled.span`
    flex: 1;
    margin: 0px 0px 0px 20px;
    flex-direction: column;
    text-align: left;
    padding: 0px;
    display: flex;
    justify-content: space-between;
  `,

  Title: styled.span`
    font-size: 20px;
  `,

  Name: styled.span`
    font-size: 16px;
    padding: 5px;
  `,
  TagsContainer: styled.span`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  Tags: styled.span`
    color: #2ea0d6;
    border: 1px solid #2ea0d6;
    border-radius: 5px;
    padding: 5px 5px 5px 5px;
    text-align: center;
  `,
  TagsPrice: styled.span`
    color: #fad000;
    border: 1px solid #fad000;
    border-radius: 5px;
    padding: 5px 5px 5px 5px;
    text-align: center;
  `,
};
