import React from "react";
import { AssetInput } from "../AssetInput/AssetInput";
import {
  MainContainer,
  ModuleContainer,
  TopContainer,
  MiddleContainer,
  StyledText,
  StyledClose,
} from "./PortfolioModule.styles";

const PortfolioModule = (props) => {
  return (
    <MainContainer>
      <ModuleContainer>
        <TopContainer>
          <StyledText>Select Coins</StyledText>
          <StyledClose onClick={props.handleCloseClick} />
        </TopContainer>
        <MiddleContainer>
          <AssetInput handleCloseClick={props.handleCloseClick}/>
        </MiddleContainer>
      </ModuleContainer>
    </MainContainer>
  );
};

export default PortfolioModule;
