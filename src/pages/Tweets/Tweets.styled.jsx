import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #471ca9;
  margin-bottom: 20px;
`;

export const BackButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #fff;
  color: #471ca9;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #471ca9;
    color: #fff;
  }
`;

export const Dropdown = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const TweetCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const TweetContent = styled.p`
  font-size: 16px;
  color: #333;
`;
