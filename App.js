import React from 'react';
import { StatusBar } from "expo-status-bar";
import Local from './explorar/Local';
import { Text, Image, View, StyleSheet, FlatList, TextInput, Button } from 'react-native';

const App = () => {
  return <Local />;
}
export default App;

class Other extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      pokemon: [],
      busqueda: ''
    }

  }


  handleOnChange = e => {
    this.setState({ busqueda: e.target.value });
  }
  handleOnPress = () => {
    fetch('https://pokeapi.co/api/v2/pokemon' + '/' + this.state.busqueda)
      .then(res => res.json())
      .then(res => {
        this.setState({
          pokemon: [...this.state.pokemon, res]
        })
      })
      .catch(e => console.log(e))
  }

  render() {


    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text> Lista Pokemon</Text>
          <TextInput
            type="text"
            placeholder='Buscar Pokemon'
            style={styles.input}
            onChange={this.handleOnChange}
            value={this.state.busqueda}
          ></TextInput>
          <Button title="Buscar Pokemon" onPress={this.handleOnPress} />
        </View>

        <FlatList
          data={this.state.pokemon}
          renderItem={
            ({ item }) => (
              <View>
                <Text>{item.forms[0].name}</Text>
                <Image style={{
                  height: 200,
                  width: 200
                }
                } source={{ uri: item.sprites.front_default }} />
              </View>
            )
          }
        ></FlatList>

      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  Listado: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 5,

  },
  input: {
    borderColor: 'black',
    color: 'black',
    height: 40,
    width: 290,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,

    padding: 7
  },
  btn: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00d4ff',
    borderRadius: 40,
    padding: 7
  }
});