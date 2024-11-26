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

    const handleBoss= ()=>{
        const botMessage = createChatBotMessage("Hello Vatsal! Are you ready to work ?");
        setState((prev)=>({
            ...prev,
        messages: [...prev.messages, botMessage],
        }))
    }
// handle action over 



  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,  //action is paased here
            handleBoss,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;