// children component
import React from "react";
import { Container } from "react-bootstrap";
import { Collection } from "./collection.albums";

export const Albums = (props) => {
  // console.log(props);
  // const { title, description } = props;

  return (
    <React.Fragment>
      <Container className="mt-3">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Collection />
      </Container>
    </React.Fragment>
  );
};
