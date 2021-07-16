import React from 'react';
import { StatusBar } from "expo-status-bar";

import { Text, Image, View, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-nagivation/native'
import { createStackNavigator } from '@react-nagivation/stack'


import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import UsersList from "./screens/UsersList";
const HomeScreen = () => {
  return (
    <View>
      <Text>HomeeScreen</Text>
    </View>
  )
}
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
// export default class App extends React.Component {

//   constructor(props) {

//     super(props);

//     this.state = {
//       pokemon: [],
//       busqueda: ''
//     }

//   }


//   handleOnChange = async e => {
//     e.persist();
//     await this.setState({ busqueda: e.target.value });
//     console.log(this.state.busqueda);

//   }

//   handleOnPress = async () => {
//     fetch('https://pokeapi.co/api/v2/pokemon' + '/' + this.state.busqueda)
//       .then(res => res.json())
//       .then(res => {
//         this.setState({
//           pokemon: [...this.state.pokemon, res]
//         })
//       })
//       .catch(e => console.log(e))
//   }

//   render() {


//     return (
//       <View style={styles.Listado}>
//         <View style={styles.form}>
//           <Text> Listado Pokemon</Text>
//           <TextInput
//             type="text"
//             placeholder='Buscar Pokemon'
//             style={styles.input}
//             onChangeText={this.handleOnChange}
//             value={this.state.busqueda}
//           ></TextInput>
//           <Button title="Buscar Pokemon" onPress={this.handleOnPress} />
//         </View>

//         <FlatList
//           data={this.state.pokemon}
//           renderItem={
//             ({ item }) => (
//               <View>
//                 <Text>{item.forms[0].name}</Text>
//                 <Image style={{
//                   height: 200,
//                   width: 200
//                 }
//                 } source={{ uri: item.sprites.front_default }} />
//               </View>
//             )
//           }
//         ></FlatList>

//       </View>
//     );

//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    borderRadius: 40,

  },
  btn: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00d4ff',
    borderRadius: 40,
  },
  form: {
    borderColor: 'red',
    color: 'red',
    height: 100,
    margin: 12,
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});