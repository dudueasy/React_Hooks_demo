// this component showcases the use of useEffect

import React, {useEffect, useState} from 'react';

const clockBlock = {
  xx: {
    border: '2px solid black',
  },
};

export const Clock = () => {
  const [currentTime, changeCurrentTime] = useState(new Date().toLocaleTimeString());


  useEffect(() => {
    const TimerId = setInterval(() => {
      changeCurrentTime(new Date().toLocaleTimeString());
    }, 100);

    // 清除 effect 是必要的, 否则未终止的 setInterval 将会造成内存泄漏.
    return () => {
      clearInterval(TimerId);
    };
  });

  return (
    <div style={clockBlock.xx}>
      <h1>This is Function Component: Clock </h1>
      <h2>It is {currentTime}.</h2>
    </div>
  );
};



