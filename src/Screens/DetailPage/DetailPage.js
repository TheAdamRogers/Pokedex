import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar } from "recharts";
import { Spinner } from "../../CommonComponents";
import {
  BoldText,
  Chart,
  Container,
  DetailCard,
  DetailImage,
  DetailName,
  MoveList,
  MoveListItem,
  PokeBottomRow,
  PokeCol,
  PokeImg,
  PokeList,
  PokeListItem,
  PokeRow,
  PokeTopRow,
  PokeType,
  Text,
  Wrapper,
} from "./styles";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      change: false,
      selectedPokemon: {},
      pokemon: [],
      stats: [],
    };
  }

  async componentWillMount() {
    await this.init();
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  async newPokemon(pokemon) {
    console.log(pokemon);
    this.setState({ selectedPokemon: pokemon, change: true });
    await this.sortStats(this.state.selectedPokemon.stats);
    await this.setState({
      loaded: true,
      change: false,
    });
  }

  async init() {
    const { pokeID } = this.props.match.params;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokeID}/`
    );
    await this.setState({
      selectedPokemon: response.data,
    });
    await this.sortStats(response.data.stats);
    await this.setState({
      loaded: true,
      change: false,
    });
  }

  sortStats(stats) {
    const newStat = [];
    stats.map((stat) => {
      newStat.push({
        name:
          String(stat.stat.name).charAt(0).toUpperCase() +
          stat.stat.name.slice(1),
        level: stat.base_stat,
      });
    });
    return;
    this.setState({
      stats: newStat,
    });
  }

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
    const { selectedPokemon, loaded, pokemon, change } = this.state;

    return (
      <Container>
        <Wrapper>
          {loaded ? (
            <DetailCard>
              {change ? (
                <div style={{ height: "30vh" }}>
                  <Spinner />
                </div>
              ) : (
                <PokeTopRow>
                  <PokeImg src={selectedPokemon.sprites.front_default} />
                  <PokeCol>
                    <PokeRow>
                      <BoldText>ID: </BoldText>
                      <Text>{selectedPokemon.id}</Text>
                    </PokeRow>
                    <PokeRow>
                      <BoldText>Name:</BoldText>
                      <Text>
                        {String(selectedPokemon.name).charAt(0).toUpperCase() +
                          selectedPokemon.name.slice(1)}
                      </Text>
                    </PokeRow>
                    <PokeRow>
                      <BoldText>Weight: </BoldText>
                      <Text>{selectedPokemon.weight / 10} kg</Text>
                    </PokeRow>
                    <PokeRow>
                      <BoldText>Height: </BoldText>
                      <Text>{selectedPokemon.height / 10} m</Text>
                    </PokeRow>
                  </PokeCol>
                  <PokeCol>
                    <PokeRow>
                      <BoldText>Type: </BoldText>
                      {selectedPokemon.types.map((item) => {
                        return <PokeType>{item.type.name}</PokeType>;
                      })}
                    </PokeRow>
                    <PokeRow>
                      <BoldText>Abilities: </BoldText>
                      {selectedPokemon.abilities.map((item) => {
                        if (!item.is_hidden) {
                          return <PokeType>{item.ability.name}</PokeType>;
                        }
                      })}
                    </PokeRow>
                  </PokeCol>
                </PokeTopRow>
              )}
              <PokeBottomRow>
                <Text>Stats: </Text>
                <Chart
                  cx={150}
                  cy={150}
                  outerRadius={100}
                  width={400}
                  height={300}
                  data={this.state.stats}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis />
                  <Radar
                    name="stats"
                    dataKey="level"
                    stroke="#700000"
                    fill="#AA0000"
                    fillOpacity={0.6}
                  />
                </Chart>
              </PokeBottomRow>
              <MoveList>
                {selectedPokemon.moves.map((item) => (
                  <MoveListItem>
                    <BoldText>Move:</BoldText>
                    <Text>{item.move.name}</Text>
                  </MoveListItem>
                ))}
              </MoveList>
              <PokeList>
                {pokemon.map((item) => {
                  return (
                    <PokeListItem
                      as={Link}
                      to={{ pathname: `/pokemon/${item.id}` }}
                      onClick={() => this.newPokemon(item)}
                    >
                      <DetailImage src={item.sprites.front_default} />
                      <DetailName>{item.name}</DetailName>
                    </PokeListItem>
                  );
                })}
              </PokeList>
            </DetailCard>
          ) : (
            <Spinner />
          )}
        </Wrapper>
      </Container>
    );
  }
}

export default DetailPage;
