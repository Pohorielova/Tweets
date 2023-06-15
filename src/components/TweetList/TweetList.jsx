import React, { useState } from "react";
import {
  Avatar,
  AvatarThumb,
  BoxBottom,
  BoxTop,
  Btn,
  Card,
  Line,
  List,
  Title,
} from "./TweetList.styled";

const TweetList = ({ tweets }) => {
  const [displayedTweets, setDisplayedTweets] = useState(3); // Стан для відстеження кількості відображених твітів

  const handleLoadMore = () => {
    setDisplayedTweets(displayedTweets + 3);
  };

  return (
    <List>
      {tweets.slice(0, displayedTweets).map((tweet) => (
        <Card key={tweet.id}>
          <BoxTop />
          <Line>
            <AvatarThumb>
              <Avatar src={tweet.avatar} alt="avatar" />
            </AvatarThumb>
          </Line>
          <BoxBottom>
            <Title>{tweet.tweets} tweets</Title>
            <Title>
              {tweet.followers.toLocaleString("en", {
                useGrouping: true,
                minimumFractionDigits: 0,
              })}{" "}
              followers
            </Title>
            <Btn>Follow</Btn>
          </BoxBottom>
        </Card>
      ))}
      {displayedTweets < tweets.length && (
        <Btn onClick={handleLoadMore}>Load More</Btn>
      )}
    </List>
  );
};
export default TweetList;
