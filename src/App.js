import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: '',
      isSaveButtonDisabled: true,
      savedCards: [],
      shouldRenderSavedCards: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmmit = this.handleSubmmit.bind(this);
  }

  handleChange({ target }) {
    // console.log(target.name, target.value);
    this.setState({ [target.name]: (target.type === 'checkbox')
      ? target.checked : target.value });

    this.setState((state) => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = state;
      const validButton = !((cardName.length !== 0)
        && (cardDescription.length !== 0)
        && (cardImage.length !== 0)
        && (cardRare.length !== 0)
        && (parseInt(cardAttr1, 10) <= '90')
        && (parseInt(cardAttr2, 10) <= '90')
        && (parseInt(cardAttr3, 10) <= '90')

        && (parseInt(cardAttr1, 10) >= 0)
        && (parseInt(cardAttr2, 10) >= 0)
        && (parseInt(cardAttr3, 10) >= 0)
        && ((parseInt(cardAttr1, 10)
        + parseInt(cardAttr2, 10)
        + parseInt(cardAttr3, 10)) <= '210'));

      return { isSaveButtonDisabled: validButton };
    });
  }

  handleSubmmit(event) {
    event.preventDefault();
    this.setState((state) => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        savedCards,
        cardTrunfo,
      } = state;
      const newSavedCards = [...savedCards];
      newSavedCards.push({
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      });
      const validTrunfo = (newSavedCards.find((el) => el.cardTrunfo) !== undefined);
      // console.log(validTrunfo)
      return {
        savedCards: newSavedCards,
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: '',
        isSaveButtonDisabled: true,
        hasTrunfo: validTrunfo,
        shouldRenderSavedCards: true,
      };
    });
  }

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
      savedCards,
      shouldRenderSavedCards,

    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSubmmit }
          savedCards={ savedCards }

        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {shouldRenderSavedCards
        && savedCards.map((el) => (
          <Card
            key={ el.cardName }
            cardName={ el.cardName }
            cardDescription={ el.cardDescription }
            cardAttr1={ el.cardAttr1 }
            cardAttr2={ el.cardAttr2 }
            cardAttr3={ el.cardAttr3 }
            cardImage={ el.cardImage }
            cardRare={ el.cardRare }
            cardTrunfo={ el.cardTrunfo }
          />))}
      </div>
    );
  }
}

export default App;
