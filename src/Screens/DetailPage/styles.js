import { RadarChart } from 'recharts';
import styled from 'styled-components';

export const Chart = styled(RadarChart)`
  grid-area: Evolution; 
`

export const Wrapper = styled.div`
  margin: auto;
`

export const Container = styled.div`
  text-align: center; 
  flex: 1;
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
`

export const PokeImg = styled.img`
  height: 25vh;
  width: 25vh;
  border-style: outset;
  border-width: 3px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
`

export const BoldText = styled.p`
  font-weight: 600;
  font-size: 14px;
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  padding-left: 10px;
`

export const PokeType = styled.p`
  font-weight: 400;
  font-size: 12px;
  margin-left: 10px;
  padding: 3px;
  border: solid 1px black;
  border-radius: 5px;
`

export const PokeTopRow = styled.div`
  display: flex;
  flex-direction: row;
  grid-area: Pokedetails;
`
export const PokeBottomRow = styled.div`
  display: flex;
  flex-direction: row;
  grid-area: Evolution;
`

export const PokeRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const PokeCol = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  text-align: left;
  padding-top: 0px;
`
export const DetailCard = styled.div`
  display: grid;
  grid-template-columns: [details]35% [extra]35% [pokelist]30%;
  grid-template-rows: [top]auto [bottom]auto;
  grid-template-areas: 
  "Pokedetails Pokedetails Pokelist" 
  "Evolution Movelist Pokelist";
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  height: 70vh;
  width: 70vw;
  margin: auto;
  margin-top: 1vh;
  padding: 20px;
  border-radius: 20px;
  background-color: #FFFFFF; 
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
`

export const PokeList = styled.div`
  overflow: scroll;
  grid-area: Pokelist;
  border: solid 1px #333;
  border-radius: 20px;
`
export const MoveList = styled.div`
  overflow: scroll;
  grid-area: Movelist;
  border: solid 1px #333;
  border-radius: 20px;
`

export const PokeListItem = styled.div`
  height: 15%;
  border-radius: 20px;
  background-color: #FFFFFF; 
  margin: 5px;
  display: flex;
  align-content: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
  justify-content: space-around;
  text-decoration: none;
`
export const MoveListItem = styled(PokeListItem)`
  justify-content: center;
  align-content: center;
`

export const DetailImage = styled.img`
  grid-area: detailImage;
  height: auto;
  vertical-align: center;
  display: block;
  margin-top: auto;
  margin-bottom: auto;
`
export const DetailName = styled.p`
    margin-top: auto;
    margin-bottom: auto;
    color: black;
`