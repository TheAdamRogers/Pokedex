import axios from "axios";
import _ from "lodash";
import React, { Component } from "react";
import styled from "styled-components";
import { Pokecard, Spinner } from "../../CommonComponents";

const Container = styled.div`
  margin: auto;
`;
const PokedexContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  flex-direction: row;
  height: 70vh;
  width: 70vw;
  margin: auto;
  margin-top: 1vh;
  border-width: 5px;
  border-style: solid;
  overflow: scroll;
  padding: 20px;
  border-radius: 20px;
  border-color: #8eebec;
`;

const Pokesearch = styled.input`
  border-radius: 5px;
  width: 20vw;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  min-height: 100vh;
`;

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      pokemon: [],
      search: "",
      category: "name",
    };
  }

  updateSearch = (evt) => {
    this.setState({
      search: evt.target.value.toLowerCase(),
    });
  };

  updateCategory = (evt) => {
    this.setState({
      category: evt.target.value,
    });
  };

  loadPokemon = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    );
    await response.data.results.map((item) => {
      this.loadIndvPokemon(item.url);
    });
    this.setState({ loading: false });
  };

  loadIndvPokemon = (url) => {
    axios.get(url).then((response) => {
      this.setState({
        pokemon: [...this.state.pokemon, response.data],
      });
    });
  };

  componentDidMount = () => {
    this.loadPokemon();
  };

  render() {
    const { search, pokemon, loading, category } = this.state;
    return (
      <Wrapper>
        {pokemon.length !== 151 && loading ? (
          <Spinner />
        ) : (
          <Container>
            <Pokesearch onChange={this.updateSearch} />
            <PokedexContainer>
              {search
                ? _.filter(pokemon, function (item) {
                    return String(item[category]).includes(search);
                  }).map((item) => <Pokecard key={item.id} pokemon={item} />)
                : _.sortBy(pokemon, function (item) {
                    return item.id;
                  }).map((item) => <Pokecard key={item.id} pokemon={item} />)}
            </PokedexContainer>
          </Container>
        )}
      </Wrapper>
    );
  }
}

export default Pokedex;
