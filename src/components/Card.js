import React from 'react';
import PropTypes from 'prop-types';
import imagem from '../img/Group 224.png';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      previewCard: a,
      onclickDeletebutton: b,
      fnAjustImage,
      ajustImage,

    } = this.props;
    const datId = 'delete-button';
    const clasPreview = a ? 'card-preview' : 'saved-card-preview';
    // let ajusteImg = (cardImage === '') ? imagem : cardImage;
    // console.log(onclickDeletebutton)
    return (
      <div className={ clasPreview }>
        {a && <p className="texto-preview">Pré-visualização</p>}
        <div className="card-todo">
          <div className="card-todo-verde-meio">
            <div className="div-card-nome-imagem">
              {/* {console.log(this.state.ajusteImg)} */}
              <h3 data-testid="name-card">{cardName}</h3>
              {ajustImage ?<img data-testid="image-card" src={ cardImage } alt={ cardName } onError={ fnAjustImage } />:<img data-testid="image-card" src={ imagem } alt={ cardName } />}
            </div>
            <div className="div-card-description">
              <p className="card-description" data-testid="description-card">{cardDescription}</p>
            </div>
            <div className="div-card-todos-attr">

              <div className="div-card-attr">
                <p className="card-attr-texto">Attr01 -------------</p>
                <p className="card-attr" data-testid="attr1-card">{cardAttr1}</p>
              </div>
              <div className="div-card-attr">
                <p className="card-attr-texto">Attr02 -------------</p>
                <p className="card-attr" data-testid="attr2-card">{cardAttr2}</p>
              </div>
              <div className="div-card-attr">
                <p className="card-attr-texto">Attr03 -------------</p>
                <p className="card-attr" data-testid="attr3-card">{cardAttr3}</p>
              </div>
            </div>

            {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
          </div>
          {!a && (
            <button
              type="button"
              data-testid={ datId }
              onClick={ () => b(cardName) }
            >
              Excluir
            </button>
          )}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  previewCard: PropTypes.bool.isRequired,
  onclickDeletebutton: PropTypes.func.isRequired,
};

export default Card;
