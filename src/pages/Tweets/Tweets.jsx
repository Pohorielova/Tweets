import React, { useEffect } from "react";
import { BackButton, Container, Title } from "./Tweets.styled";

import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../redux/users/users-slice";
import { fetchUsers } from "../../redux/users/users-operations";
import TweetList from "../../components/TweetList/TweetList";
const Tweets = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container>
      <Title>Tweets</Title>
      <BackButton to="/">Back</BackButton>

      <TweetList tweets={items} />
    </Container>
  );
};

export default Tweets;
