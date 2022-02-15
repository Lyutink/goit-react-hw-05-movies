import styled from "styled-components";
import { BiArrowBack } from 'react-icons/bi';

export const BtnIcon = styled(BiArrowBack)`
  font-size: 40px;
  height: 50px;
  color: #000000;
 
`;

export const BtnText = styled.span`

  margin-left: 30px;
  margin-right: 30px;
  
`;

 export const ButtonGoBack = styled.button`
  margin-bottom: 24px;
  padding: 4px 8px;
  border-radius: 2px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  //display: inline-block;
  display: flex;
  justify-content: center;
  color: #000000;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 40px;
  //line-height: 24px;
  //font-style: normal;
  font-weight: 500;
  min-width: 300px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  :hover,
  :focus {
    background-color: #abb2e4;
  }
`;
