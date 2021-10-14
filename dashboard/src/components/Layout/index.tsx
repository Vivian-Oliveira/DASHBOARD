import React from "react";
import { GridContainer } from "./styles";
import MainHeader from "../MainHeader/index";
import Aside from "../Aside/index";
import Content from "../Content/index";

const Layout: React.FC = () => {
  return (
    <GridContainer>
      <MainHeader />
      <Aside />
      <Content />
    </GridContainer>
  );
};

export default Layout;
