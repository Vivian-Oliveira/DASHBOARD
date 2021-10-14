import React from "react";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

import logo from "../../assets/logo.svg";
import {
  Container,
  Header,
  LogoImg,
  MenuContainer,
  MenuItemLink,
  Title,
} from "./styles";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logo} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href={"#"}>
          <MdDashboard />
          Dashboard
        </MenuItemLink>
      </MenuContainer>

      <MenuContainer>
        <MenuItemLink href={"#"}>
          <MdArrowUpward />
          Entradas
        </MenuItemLink>
      </MenuContainer>

      <MenuContainer>
        <MenuItemLink href={"#"}>
          <MdArrowDownward />
          Saídas
        </MenuItemLink>
      </MenuContainer>

      <MenuContainer>
        <MenuItemLink href={"#"}>
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
