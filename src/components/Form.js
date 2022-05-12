import React from 'react';
import PropTypes from 'prop-types';
import Inputs from './Inputs';
import Selects from './Selects';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    // console.log(onInputChange)
    return (
      <div>

        <h2>Adicione Uma Nova Carta</h2>

        <form onSubmit={ onSaveButtonClick }>
          <Inputs
            name="cardName"
            value={ cardName }
            tipo="text"
            dataID="name-input"
            onChange={ onInputChange }
          />
          <Inputs
            name="cardDescription"
            value={ cardDescription }
            tipo="textarea"
            dataID="description-input"
            onChange={ onInputChange }
          />
          <Inputs
            name="cardAttr1"
            value={ cardAttr1 }
            tipo="number"
            dataID="attr1-input"
            onChange={ onInputChange }
          />
          <Inputs
            name="cardAttr2"
            value={ cardAttr2 }
            tipo="number"
            dataID="attr2-input"
            onChange={ onInputChange }
          />
          <p>{hasTrunfo}</p>
          <Inputs
            name="cardAttr3"
            value={ cardAttr3 }
            tipo="number"
            dataID="attr3-input"
            onChange={ onInputChange }
          />
          <Inputs
            name="cardImage"
            value={ cardImage }
            tipo="text"
            dataID="image-input"
            onChange={ onInputChange }
          />
          <Selects
            name="cardRare"
            value={ cardRare }
            options={ ['normal', 'raro', 'muito raro'] }
            dataID="rare-input"
            onChange={ onInputChange }
          />
          { !hasTrunfo ? <Inputs
            name="cardTrunfo"
            value={ cardTrunfo }
            tipo="checkbox"
            dataID="trunfo-input"
            onChange={ onInputChange }
          />
            : <p>Você já tem um Super Trunfo em seu baralho</p>}

          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
          >
            Salvar
          </button>
        </form>
      </div>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
