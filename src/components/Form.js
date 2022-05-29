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
      validSameName,
    } = this.props;
    // console.log(onInputChange)
    const resultDisplayAttr = parseInt(210, 10)
    - parseInt(cardAttr1, 10)
    - parseInt(cardAttr2, 10)
    - parseInt(cardAttr3, 10);
    return (
      <div className="div-form-todo">

        <form onSubmit={ onSaveButtonClick }>
          <h2>Adicione Uma Nova Carta</h2>
          <Inputs
            texto="Nome"
            name="cardName"
            value={ cardName }
            tipo="text"
            dataID="name-input"
            onChange={ onInputChange }
          />
          {!validSameName && <p>Não é possível utilizar o mesmo nome</p>}
          <Inputs
            texto="Descrição"
            name="cardDescription"
            value={ cardDescription }
            tipo="textarea"
            dataID="description-input"
            onChange={ onInputChange }
          />
          <Inputs
            texto="Attr01"
            name="cardAttr1"
            value={ cardAttr1 }
            tipo="number"
            dataID="attr1-input"
            onChange={ onInputChange }
          />
          <Inputs
            texto="Attr02"
            name="cardAttr2"
            value={ cardAttr2 }
            tipo="number"
            dataID="attr2-input"
            onChange={ onInputChange }
          />
          <Inputs
            texto="Attr03"
            name="cardAttr3"
            value={ cardAttr3 }
            tipo="number"
            dataID="attr3-input"
            onChange={ onInputChange }
          />

          <div className="div-displayAttr">
            <span>
              Pontos restantes =
              {resultDisplayAttr}
            </span>
          </div>
          <Inputs
            texto="Imagem"
            name="cardImage"
            value={ cardImage }
            tipo="text"
            dataID="image-input"
            onChange={ onInputChange }
          />
          <Selects
            texto="Raridade"
            name="cardRare"
            value={ cardRare }
            options={ ['normal', 'raro', 'muito raro'] }
            dataID="rare-input"
            onChange={ onInputChange }
          />
          { !hasTrunfo ? <Inputs
            texto="Super Trybe Trunfo"
            name="cardTrunfo"
            value={ cardTrunfo }
            tipo="checkbox"
            dataID="trunfo-input"
            onChange={ onInputChange }
          />
            : <p>Você já tem um Super Trunfo em seu baralho</p>}

          <button
            className="button-submit"
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
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
