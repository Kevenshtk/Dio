import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 120px auto 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
  color: #ffff;
`;

export const TitleHighLight = styled.span`
  color: #e41050;
`;

export const TextContent = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  width: 420px;
  margin-bottom: 20px;
  line-height: 22px;
  color: #ffff;
`;
