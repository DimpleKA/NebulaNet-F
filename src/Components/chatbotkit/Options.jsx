import React from 'react';

const Options = ({ options, actionProvider }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
      {options.map((option, index) => (
        <button
          key={index}
          style={{
            padding: '10px',
            margin: '5px 0',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#376B7E',
            color: 'white',
            cursor: 'pointer',
          }}
          onClick={() => actionProvider[option.action]()}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Options;
