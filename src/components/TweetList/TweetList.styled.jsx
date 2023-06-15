import styled from "styled-components";
import cardImage from "C:/Users/atsio/Documents/GitHub/Tweets/src/images/cardImg.png";
import logo from "C:/Users/atsio/Documents/GitHub/Tweets/src/images/Logo.png";
import "../../index.css";
export const List = styled.ul`
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 22px;
  width: 1406px;
`;
export const Card = styled.li`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const BoxTop = styled.div`
  width: 380px;
  height: 214px;
  background-image: url("${cardImage}");
  background-position: right 36px top 28px;
  background-size: 308px 168px;
  background-repeat: no-repeat;
  &::before {
    content: "";
    transform: translate(20px, 20px);
    display: block;
    width: 76px;
    height: 22px;
    background-image: url("${logo}");
    background-repeat: no-repeat;
  }
`;
export const Line = styled.div`
  width: 380px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const AvatarThumb = styled.div`
  transform: translate(150px, -50%);
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 85.9232px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 85.9232px;
`;
export const BoxBottom = styled.div`
  margin-top: 62px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;
export const Title = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;
`;
export const Btn = styled.button`
  display: inline-block;
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  transition: background-color 0.3s ease;
  color: #373737;
  text-transform: uppercase;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  border: none;
  margin-top: 10px;
  &:hover {
    transform: scale(1.05);
  }
  &.following {
    background: #5cd3a8;
  }
  &.load {
    margin-top: 22px;
    background-color: #ffa500;

    color: #471ca9;
  }
`;
