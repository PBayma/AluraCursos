import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';

import Post from './components/Post.js'

/*
const fotos = [{ id: 1, usuario: 'Alberto' },
{ id: 2, usuario: 'Rafael' },
{ id: 3, usuario: 'Testando' }
]
*/

class Instalura extends Component {

  constructor(){
    super();
    this.state = {
      fotos: []
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
        <FlatList //to map and create new components
        keyExtractor = {item => item.id}
        data = {this.state.fotos}
        renderItem = { ({item}) =>
          <Post foto = {item}/>
        }
        />
    );
  }
}

const styles = StyleSheet.create({

  profile: {
    width: 30,
    height: 30,
  },

  profile_box: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    alignItems: "center"

  },
}
);

export default Instalura;