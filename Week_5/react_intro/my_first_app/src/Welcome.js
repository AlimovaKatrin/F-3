import React from 'react';

export const Welcome = ({ name }) => {
    return <h1>WELCOME {name} TO MY FIRST APP</h1>;
};


export class WelcomeClass extends React.Component {
    render() {
        return (
            <h1>
          Привет, {this.props.name}
        </h1>
      );
    }
  }