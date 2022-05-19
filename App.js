import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Modal } from 'react-native';
import Login from './src/Login'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      modalVisible:false
     };
 
    this.login = this.login.bind(this);
    this.exit = this.exit.bind(this);
  }
  login(){
    this.setState({modalVisible: true});
  }
  
  exit(visible){
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
          <Button title="login" onPress={ this.login }/>

          <Modal transparent={true} animationType="slide" visible={this.state.modalVisible}>
            <View style={{margin:15, flex:1, alignItems:'center', justifyContent: 'center'}}>
               <Login fechar={ () => this.exit(false)} />
            </View>
          </Modal>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD',
  },
});
