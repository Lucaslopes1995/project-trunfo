import React from 'react';
import PropTypes from 'prop-types';

class Selects extends React.Component {
  render() {
    const { texto, name, value, options, dataID, onChange } = this.props;
    // console.log(dataID)
    return (
      <>
        <strong>{texto}</strong>
        <select
          name={ name }
          value={ value }
          data-testid={ dataID }
          onChange={ onChange }
        >
          {/* <option hidden>Raridade</option> */}
          {options.map((el) => (
            <option key={ el }>{el}</option>))}

        </select>
      </>
    );
  }
}

Selects.propTypes = {
  texto: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataID: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Selects;
