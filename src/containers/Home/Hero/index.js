import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FiMail } from "react-icons/fi";
import {
  HeroSection,
  Heading,
  HeroText,
  ButtonContainer,
  HeroButton,
  ImageCharacter,
  HeroImage,
  HeroContent,
  ButtonWrapper,
} from "./styles";
import heroPatternBg from "../../../assets/images/hero-pattern-bg-lg.png";
import heroGuy from "../../../assets/images/hero-guy-1.png";
import img1 from "../../../assets/images/image-1.png";
import img2 from "../../../assets/images/image-2.png";
import img3 from "../../../assets/images/image-3.png";

import Modal from "../Modal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };
  const variants = {
    hover: {
      y: 100,
      transition: {
        yoyo: Infinity,
        duration: 0.5,
      },
    },
  };
  const { ref, inView } = useInView({
    rootMargin: "-100px",
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <>
      <HeroSection id="hero">
        <HeroImage className="pattern" src={heroPatternBg} />
        <HeroImage className="guy" src={heroGuy} />

        <ImageCharacter
          variants={variants}
          whileHover="hover"
          drag
          dragConstraints={dragConstraints}
          className="one"
          src={img1}
        />
        <ImageCharacter
          variants={variants}
          whileHover="hover"
          drag
          dragConstraints={dragConstraints}
          className="two"
          src={img2}
        />
        <ImageCharacter
          variants={variants}
          whileHover="hover"
          drag
          dragConstraints={dragConstraints}
          className="three"
          src={img3}
        />

        <HeroContent>
          <Heading>We Are Designify</Heading>
          <HeroText>
            A team of passionate designer and developers ready to provide unique
            and outstanding products for you!
          </HeroText>
          <ButtonContainer ref={ref}>
            <ButtonWrapper>
              <HeroButton
                onClick={toggleModal}
                className={inView ? "" : "corner"}
              >
                {inView ? (
                  <> Chat with us</>
                ) : (
                  <FiMail color="white" size="2.3rem" />
                )}
              </HeroButton>
            </ButtonWrapper>
          </ButtonContainer>
        </HeroContent>
      </HeroSection>
      <Modal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default Hero;
