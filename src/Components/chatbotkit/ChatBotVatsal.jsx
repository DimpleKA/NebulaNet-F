import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./config.js";
import MessageParser from "./MessageParser.jsx";
import ActionProvider from "./ActionProvider.jsx";
import 'react-chatbot-kit/build/main.css';


const ChatBotVatsal = () => {
  return (
    <div className="chatbot-container">
      <div className="chatbot-header">Vatsal's Chatbot</div>
      <div className="chatbot-body">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
};

export default ChatBotVatsal;
