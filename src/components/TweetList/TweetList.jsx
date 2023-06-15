import React, { useState, useEffect } from "react";

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
  const [displayedTweets, setDisplayedTweets] = useState(3);
  const [followingTweets, setFollowingTweets] = useState([]);

  useEffect(() => {
    const followingIndexes =
      JSON.parse(localStorage.getItem("followingTweets")) || [];
    setFollowingTweets(followingIndexes);
  }, []);

  const handleLoadMore = () => {
    setDisplayedTweets(displayedTweets + 3);
  };

  const handleFollow = (tweetIndex) => {
    const updatedFollowingTweets = [...followingTweets, tweetIndex];
    setFollowingTweets(updatedFollowingTweets);
    localStorage.setItem(
      "followingTweets",
      JSON.stringify(updatedFollowingTweets)
    );
  };

  const handleUnfollow = (tweetIndex) => {
    const updatedFollowingTweets = followingTweets.filter(
      (index) => index !== tweetIndex
    );
    setFollowingTweets(updatedFollowingTweets);
    localStorage.setItem(
      "followingTweets",
      JSON.stringify(updatedFollowingTweets)
    );
  };

  return (
    <>
      <List>
        {tweets.slice(0, displayedTweets).map((tweet, index) => {
          const isFollowing = followingTweets.includes(index);
          const followersCount = isFollowing
            ? tweet.followers + 1
            : tweet.followers;
          const buttonLabel = isFollowing ? "Following" : "Follow";

          return (
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
                  {followersCount.toLocaleString("en", {
                    useGrouping: true,
                    minimumFractionDigits: 0,
                  })}{" "}
                  followers
                </Title>
                <Btn
                  onClick={() =>
                    isFollowing ? handleUnfollow(index) : handleFollow(index)
                  }
                  className={isFollowing ? "following" : ""}
                >
                  {buttonLabel}
                </Btn>
              </BoxBottom>
            </Card>
          );
        })}
      </List>

      {displayedTweets < tweets.length && (
        <Btn className="load" onClick={handleLoadMore}>
          Load More
        </Btn>
      )}
    </>
  );
};

export default TweetList;
