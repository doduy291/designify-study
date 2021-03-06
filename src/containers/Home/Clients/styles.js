import styled from "@emotion/styled";
import { Container } from "../../../globalStyles";
import { motion } from "framer-motion";

export const ClientSection = styled.div`
  position: relative;
  padding: 140px 0;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 70px 0;
    margin-top: 10rem;
  }
`;

export const ClientContainer = styled(Container)``;
export const ClientTextWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;

  &:before {
    width: 40px;
    height: 2px;
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    background-color: #e4fb6c;
    transform: translateX(-50%);
  }
`;
export const ClientTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
`;

export const ClientText = styled.p`
  margin: 1rem 0 auto;
  text-align: center;
  font-size: 1.3rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: #626881;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ClientRow = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ClientColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.4rem;

  @media screen and (max-width: 1100px) {
    div:not(:first-of-type) {
      display: none;
    }
  }
`;
export const ClientWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 110px;
  padding: 10px 40px;
  border-radius: 1rem;
  box-shadow: 0 0 32px 8px #dfdfdf;
  background-color: #fafeff;
  margin: 0.4rem;
`;
export const ClientImage = styled.img`
  width: 90px;
  @media screen and (max-width: 1100px) {
    width: clamp(80px, 40vw, 400px);
    height: 60%;
  }
`;
