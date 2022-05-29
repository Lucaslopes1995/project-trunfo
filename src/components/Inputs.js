import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { texto, name, value, tipo, dataID, onChange } = this.props;
    const classInput = (tipo !== 'checkbox') ? 'input-text' : 'input-checkbox';
    return (
      <label htmlFor={ name } className="labels-form">
        {tipo !== 'checkbox' && <strong className={ classInput }>{texto}</strong>}
        <input
          id={ name }
          name={ name }
          value={ value }
          checked={ tipo === 'checkbox' ? value : false }
          type={ tipo }
          data-testid={ dataID }
          onChange={ onChange }
        />
        {tipo === 'checkbox' && <strong className={ classInput }>{texto}</strong>}
        {/* {console.log(onChange)} */}
      </label>

    );
  }
}

Inputs.propTypes = {
  texto: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  dataID: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Inputs;
