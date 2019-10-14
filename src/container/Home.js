import React from "react";
import { Container, Header } from "semantic-ui-react";
import { DeployProcess } from "../components";

/**
 * 
 * @param {*} param0 
 */
const Home = ({ children }) => (
  <div>
    <Container text>
      <Header as="h2">Demo Application</Header>
      
      <DeployProcess />
    </Container>
  </div>
);

export default Home;