import React, { useState } from "react";
import {
  BackButton,
  Container,
  Dropdown,
  Title,
  TweetCard,
  TweetContent,
} from "./Tweets.styled";

const Tweets = () => {
  const [filter, setFilter] = useState("show all");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Container>
      <Title>Tweets</Title>
      <BackButton to="/">Back</BackButton>
      <Dropdown value={filter} onChange={handleFilterChange}>
        <option value="show all">Show All</option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </Dropdown>
      {/* Render tweet cards based on filter */}
      {/* {tweets.map((tweet) => ( */}
      <TweetCard>
        <TweetContent>gfbg</TweetContent>
      </TweetCard>
      {/* //   ))} */}
    </Container>
  );
};

export default Tweets;
