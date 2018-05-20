import React from 'react';
import { string, shape } from 'prop-types';

const SmartColorSwatch = props => {
  const style = {
    backgroundColor: props.match.params.color,
    textAlign: 'center',
    padding: 20,
    borderColor: '#000000',
    borderStyle: 'solid',
    borderRadius: 15,
    margin: 15
  };

  return (
    <div style={style}>
      <h2>Text: {props.match.params.text}</h2>
      <h2>Path: {props.match.path}</h2>
    </div>
  );
};

SmartColorSwatch.propTypes = {
  match: shape({
    path: string,
    params: shape({
      text: string
    })
  })
};

export default SmartColorSwatch;
