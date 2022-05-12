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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmmit = this.handleSubmmit.bind(this);
  }

  handleChange({ target }) {
    // console.log(target.name, target.value);
    this.setState({ [target.name]: (target.type === 'checkbox')
      ? target.checked : target.value });
    // const {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    // } = this.state;
    // const validButton = !((cardName.length !== 0)
    // && (cardDescription.length !== 0)
    // && (cardImage.length !== 0)
    // && (cardRare.length !== 0)
    // && ((parseInt(cardAttr1) + parseInt(cardAttr2) + parseInt(cardAttr3)) < 210));
    // console.log(validButton)
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
    // const {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    // } = this.state;
    // const validButton = ((cardName.length !== 0)
    // && (cardDescription.length !== 0)
    // && (cardImage.length !== 0)
    // && (cardRare.length !== 0)
    // && ((cardAttr1 + cardAttr2 + cardAttr3) < 210));
    // console.log(validButton)
    // this.setState({ isSaveButtonDisabled: validButton });
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
      </div>
    );
  }
}

export default App;
