import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    // handle the action
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };




  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,  //action is paased here
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;