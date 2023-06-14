import React, { useEffect, useState } from "react";
import { BackButton, Container, Dropdown, Title } from "./Tweets.styled";

import { useDispatch, useSelector } from "react-redux";
import {
  // getError,
  // getFilter,
  getItems,
  // getLoad,
} from "../../redux/users/users-slice";
import { fetchUsers } from "../../redux/users/users-operations";
import TweetList from "../../components/TweetList/TweetList";
const Tweets = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  // const isLoading = useSelector(getLoad);
  // const error = useSelector(getError);
  // const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
      <TweetList tweets={items} />

      {/* //   ))} */}
    </Container>
  );
};

export default Tweets;
