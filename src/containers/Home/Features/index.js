import React from "react";
import {
  FeatureText,
  FeatureSection,
  FeatureTitle,
  FeatureWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureTextWrapper,
  FeatureContainer,
} from "./styles";
import { featuresData } from "../../../data/FeaturesData";

const Features = () => {
  return (
    <FeatureSection id="about">
      <FeatureContainer>
        <FeatureTextWrapper>
          <FeatureTitle>What We Do</FeatureTitle>
        </FeatureTextWrapper>
        <FeatureWrapper>
          {featuresData.map((element, i) => (
            <FeatureColumn key={i}>
              <FeatureImageWrapper className={element.imgClass}>
                {element.icon}
              </FeatureImageWrapper>
              <FeatureName>{element.name}</FeatureName>
              <FeatureText>{element.description}</FeatureText>
            </FeatureColumn>
          ))}
        </FeatureWrapper>
      </FeatureContainer>
    </FeatureSection>
  );
};

export default Features;
