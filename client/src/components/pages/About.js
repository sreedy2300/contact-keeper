import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <h1>About this App</h1>
      <p className="my-1">This is a fullstack react app for keeping contacts</p>
      <p className="bg-dark p">
        <strong>version: </strong> 1.0.0
      </p>
    </Fragment>
  );
};

export default About;
