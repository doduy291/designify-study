import React from "react";
import {
  ClientSection,
  ClientContainer,
  ClientTextWrapper,
  ClientTitle,
  ClientText,
  ClientRow,
  ClientColumn,
  ClientWrapper,
  ClientImage,
} from "./styles";
import { clientsData } from "../../../data/ClientsData";
import { useInView } from "react-intersection-observer";

const Clients = () => {
  const { ref, inView } = useInView({ threshold: 1 });

  const variants1 = {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };
  const variants2 = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };
  const variants3 = {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <ClientSection id="clients" ref={ref}>
      <ClientContainer>
        <ClientTextWrapper>
          <ClientTitle>Our Clients</ClientTitle>
          <ClientText>
            We've been working with the teams around the world.
          </ClientText>
        </ClientTextWrapper>
        <ClientRow>
          <ClientColumn
            variants={variants1}
            initial="initial"
            animate={inView && "animate"}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {clientsData[0].map((element, i) => (
              <ClientWrapper key={i}>
                <ClientImage
                  src={
                    require(`../../../assets/images/companies/${element.name}.svg`)
                      .default
                  }
                  key={i}
                  alt="logo"
                />
              </ClientWrapper>
            ))}
          </ClientColumn>
          <ClientColumn
            variants={variants1}
            initial="initial"
            animate={inView && "animate"}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {clientsData[1].map((element, i) => (
              <ClientWrapper key={i}>
                <ClientImage
                  src={
                    require(`../../../assets/images/companies/${element.name}.svg`)
                      .default
                  }
                  key={i}
                  alt="logo"
                />
              </ClientWrapper>
            ))}
          </ClientColumn>
          <ClientColumn
            variants={variants2}
            initial="initial"
            animate={inView && "animate"}
            transition={{ duration: 0.5 }}
          >
            {clientsData[2].map((element, i) => (
              <ClientWrapper key={i}>
                <ClientImage
                  src={
                    require(`../../../assets/images/companies/${element.name}.svg`)
                      .default
                  }
                  key={i}
                  alt="logo"
                />
              </ClientWrapper>
            ))}
          </ClientColumn>
          <ClientColumn
            variants={variants3}
            initial="initial"
            animate={inView && "animate"}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {clientsData[3].map((element, i) => (
              <ClientWrapper key={i}>
                <ClientImage
                  src={
                    require(`../../../assets/images/companies/${element.name}.svg`)
                      .default
                  }
                  key={i}
                  alt="logo"
                />
              </ClientWrapper>
            ))}
          </ClientColumn>
          <ClientColumn
            variants={variants3}
            initial="initial"
            animate={inView && "animate"}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {clientsData[4].map((element, i) => (
              <ClientWrapper key={i}>
                <ClientImage
                  src={
                    require(`../../../assets/images/companies/${element.name}.svg`)
                      .default
                  }
                  key={i}
                  alt="logo"
                />
              </ClientWrapper>
            ))}
          </ClientColumn>
        </ClientRow>
      </ClientContainer>
    </ClientSection>
  );
};

export default Clients;
