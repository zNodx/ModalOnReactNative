import React, {Component} from 'react';
import {Text, View, Button } from 'react-native';

class Login extends Component {
 
  render() {

    return (
            <View style={{backgroundColor: '#292929', width:'100%', height: 350, 
                          borderRadius: 15}}>
              <Text style={{paddingTop: 15, color: '#FFF', fontSize: 28, textAlign:'center'}}>Seja Bem-vindo!</Text>
              <Button title="Exit" onPress={ this.props.fechar }/>
            </View>
    );
  }
}

export default  Login;