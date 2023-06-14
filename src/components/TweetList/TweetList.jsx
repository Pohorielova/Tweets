import { Avatar, Box, Card, Line, List } from "./TweetList.styled";

const TweetList = ({ tweets }) => {
  return (
    <List>
      {tweets.map((tweet) => (
        <Card key={tweet.id}>
          <Box />
          <Line />
          <Avatar>{/* <img src={tweet.avatar} /> */}</Avatar>
        </Card>
      ))}
    </List>
  );
};
export default TweetList;
