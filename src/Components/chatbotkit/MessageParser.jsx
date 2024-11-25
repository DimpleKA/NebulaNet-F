import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {     // all messages comes in
    if (message.includes('hello')) {
        console.log('Hello. Nice to meet you.' );
        actions.handleHello(); //trigger the createe action
      }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;