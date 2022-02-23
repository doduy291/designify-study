import React, { useEffect } from "react";
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
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Features = () => {
  const staggerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const variantItemContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const initialItem = {
    opacity: 0,
    y: 50,
  };

  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <FeatureSection id="about">
      <FeatureContainer>
        <FeatureTextWrapper>
          <FeatureTitle>What We Do</FeatureTitle>
        </FeatureTextWrapper>
        <FeatureWrapper
          variants={staggerAnimation}
          ref={ref}
          initial="hidden"
          animate="show"
          // staggerChildren Only work when using initial="hidden", animate="show", if as changing variants key "show" or "hidden", it will not work
        >
          {featuresData.map((element, i) => (
            <FeatureColumn
              key={i}
              variants={variantItemContainer}
              // staggerChildren only work when using only variants, be not used other effects
            >
              <FeatureImageWrapper
                className={element.imgClass}
                initial={initialItem}
                animate={animation}
                transition={{
                  duration: 0.8,
                  delay: `${(i + 1) * 0.5}`,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                {element.icon}
              </FeatureImageWrapper>
              <FeatureName
                initial={initialItem}
                animate={animation}
                transition={{ duration: 0.8, delay: `${(i + 1) * 0.55}` }}
              >
                {element.name}
              </FeatureName>
              <FeatureText
                initial={initialItem}
                animate={animation}
                transition={{ duration: 0.8, delay: `${(i + 1) * 0.55}` }}
              >
                {element.description}
              </FeatureText>
            </FeatureColumn>
          ))}
        </FeatureWrapper>
      </FeatureContainer>
    </FeatureSection>
  );
};

export default Features;
