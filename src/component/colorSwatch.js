import React from 'react';
import { withRouter } from 'react-router-dom';
import { string, shape } from 'prop-types';

const ColorSwatch = props => {
  const style = {
    backgroundColor: props.color,
    textAlign: 'center',
    padding: 20,
    borderColor: '#000000',
    borderStyle: 'solid',
    borderRadius: 15,
    margin: 15,
  };

  return (
    <div style={style}>
      <h2>Text: {props.text}</h2>
      <h2>Path: {props.match.path}</h2>
    </div>
  );
};

ColorSwatch.propTypes = {
  text: string.isRequired,
  match: shape({
    path: string,
    url: string
  })
};

export default withRouter(ColorSwatch);