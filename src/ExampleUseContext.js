import React, {useContext} from 'react';
import {Context} from './context';

export const ExampleUseContext = (props) => {
  const {content} = useContext(Context);

  return (
    <div style={{'border': '1px solid'}}>
      <p>this is a Component that use useContext </p>
      <p>context value: {content}</p>
    </div>
  );
};
