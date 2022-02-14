import React, { useEffect } from "react";
import {
  ContentSection,
  ContentContainer,
  ContentRow,
  ContentTextWrapper,
  ContentTopLine,
  ContentHeading,
  ContentButton,
  ContentSubtitle,
  ContentImgWrapper,
  ContentImg,
  ContentColumn,
} from "./styles";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Content = ({
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  backgroundColor,
  reverse,
}) => {
  const initial = { opacity: 0, y: 30 };
  const transition = { delay: 0.3, duration: 0.6 };
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0 });
    }
  }, [inView, animation]);

  return (
    <ContentSection ref={ref} id="projects">
      <ContentContainer>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <ContentTextWrapper>
              <ContentTopLine
                initial={initial}
                transition={transition}
                animate={animation}
              >
                {topLine.text}
              </ContentTopLine>
              <ContentHeading
                initial={initial}
                transition={transition}
                animate={animation}
              >
                {headline}
              </ContentHeading>
              <ContentSubtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
              >
                {description}
              </ContentSubtitle>
              <ContentButton
                initial={initial}
                transition={{ delay: 1, duration: 0.6 }}
                animate={animation}
                backgroundColor={backgroundColor}
              >
                {buttonLabel}
              </ContentButton>
            </ContentTextWrapper>
          </ContentColumn>
          <ContentColumn
            initial={initial}
            transition={transition}
            animate={animation}
          >
            <ContentImgWrapper backgroundColor={backgroundColor}>
              <ContentImg
                src={img}
                alt={alt}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </ContentImgWrapper>
          </ContentColumn>
        </ContentRow>
      </ContentContainer>
    </ContentSection>
  );
};

export default Content;
