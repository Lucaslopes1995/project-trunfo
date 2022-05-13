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
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      shouldRenderSavedCards: false,
      nameFilter: '',
      rareFilter: 'todas',
      trunfoFilter: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmmit = this.handleSubmmit.bind(this);
    this.deleteButtonCard = this.deleteButtonCard.bind(this);
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
        isSaveButtonDisabled: true,
        hasTrunfo: validTrunfo,
        shouldRenderSavedCards: true,
        cardTrunfo: false,
        cardRare: 'normal',
      };
    });
  }

  deleteButtonCard(nameCard) {
    this.setState((state) => {
      const { savedCards } = state;
      const actualCards = savedCards.filter((el) => el.cardName !== nameCard);
      const validTrunfo = (actualCards.find((el) => el.cardTrunfo) !== undefined);

      return { savedCards: actualCards,
        hasTrunfo: validTrunfo,
        cardTrunfo: false };
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
      nameFilter,
      rareFilter,
      trunfoFilter,

    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ parseInt(cardAttr1, 10) }
          cardAttr2={ parseInt(cardAttr2, 10) }
          cardAttr3={ parseInt(cardAttr3, 10) }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSubmmit }
          savedCards={ savedCards }

        />
        <div id="filtros">
          <label htmlFor="nameFilter">
            Filtro-Nome
            <input
              disabled={ trunfoFilter }
              id="nameFilter"
              name="nameFilter"
              value={ nameFilter }
              type="text"
              data-testid="name-filter"
              onChange={ ({ target }) => this.setState({ nameFilter: target.value }) }
            />
          </label>
          <label htmlFor="rareFilter">
            Filtro Raridade
            <select
              disabled={ trunfoFilter }
              id="rareFilter"
              name="rareFilter"
              value={ rareFilter }
              type="text"
              data-testid="rare-filter"
              onChange={ ({ target }) => this.setState({ rareFilter: target.value }) }
            >
              <option>todas</option>
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfoFilter">
            Filtro-Trunfo
            <input
              id="trunfoFilter"
              name="trunfoFilter"
              value={ trunfoFilter }
              type="checkbox"
              data-testid="trunfo-filter"
              onChange={ ({ target }) => this.setState({ trunfoFilter: target.checked }) }
            />
          </label>
        </div>
        <Card
          previewCard
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ parseInt(cardAttr1, 10) }
          cardAttr2={ parseInt(cardAttr2, 10) }
          cardAttr3={ parseInt(cardAttr3, 10) }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onclickDeletebutton={ this.deleteButtonCard }
        />
        {shouldRenderSavedCards
        && savedCards
          .filter((el) => el.cardName.includes(nameFilter))
          .filter((el) => {
            if (trunfoFilter) {
              // console.log(el.cardTrunfo)
              return el.cardTrunfo;
            }
            return true;
          })
          .filter((el) => {
            if (rareFilter === 'todas') {
              return true;
            }
            return el.cardRare === rareFilter;
          })
          .map((el) => (
            <Card
              key={ el.cardName + el.cardDescription }
              previewCard={ false }
              cardName={ el.cardName }
              cardDescription={ el.cardDescription }
              cardAttr1={ el.cardAttr1 }
              cardAttr2={ el.cardAttr2 }
              cardAttr3={ el.cardAttr3 }
              cardImage={ el.cardImage }
              cardRare={ el.cardRare }
              cardTrunfo={ el.cardTrunfo }
              onclickDeletebutton={ this.deleteButtonCard }
            />))}

      </div>
    );
  }
}

export default App;
