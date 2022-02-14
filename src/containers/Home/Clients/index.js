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

const Clients = () => {
  return (
    <ClientSection id="clients">
      <ClientContainer>
        <ClientTextWrapper>
          <ClientTitle>Our Clients</ClientTitle>
          <ClientText>
            We've been working with the teams around the world.
          </ClientText>
        </ClientTextWrapper>
        <ClientRow>
          {clientsData.map((clients, index) => (
            <ClientColumn key={index}>
              {clients.map((element, i) => (
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
          ))}
        </ClientRow>
      </ClientContainer>
    </ClientSection>
  );
};

export default Clients;
