import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <header className="container">
      <div className="page-header">
        <h1>Title is : {props.title}</h1>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: ''
};

export default Header;
