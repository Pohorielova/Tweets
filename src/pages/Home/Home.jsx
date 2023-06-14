import React from "react";
import { ButtonLink, Container, Emoji, Subtitle, Title } from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <Title>
        <Emoji>🐦</Emoji>Welcome to Tweets!
      </Title>
      <Subtitle>Check out the latest tweets.</Subtitle>
      <ButtonLink to="tweets">Go to Tweets</ButtonLink>
    </Container>
  );
};

export default Home;
