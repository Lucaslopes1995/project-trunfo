import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { name, value, tipo, dataID, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {name}
        <input
          id={ name }
          name={ name }
          value={ value }
          checked={ tipo === 'checkbox' ? value : false }
          type={ tipo }
          data-testid={ dataID }
          onChange={ onChange }
        />
        {/* {console.log(onChange)} */}
      </label>

    );
  }
}

Inputs.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  dataID: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Inputs;
