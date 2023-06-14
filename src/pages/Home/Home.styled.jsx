import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #471ca9;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Subtitle = styled.p`
  font-size: 24px;
  color: #555;
  margin-bottom: 40px;
`;

export const Emoji = styled.span`
  font-size: 48px;
  margin-right: 10px;
`;
export const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ffa500;

  color: #471ca9;
  text-decoration: none;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #471ca9;
    color: #ffa500;
    transform: scale(1.05);
  }
`;
