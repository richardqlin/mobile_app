import React from 'react'


import styles from '../styles/style';
import Entry from '../components/Entry';

import {  Text, View, FlatList,StyleSheet } from 'react-native';



 class HomeScreen extends React.Component {

constructor() {

super();


this.state = {

    entries: [],

};

this.toDetails = this.toDetails.bind(this);

}

toDetails(item) {


this.props.navigation.navigate('Details', item);

}


componentDidMount() {

fetch('https://murmuring-bastion-31969.herokuapp.com/entries')

    .then(response => response.json())

    .then(jsonResponse => this.setState({ entries: jsonResponse }));

}

componentWillReceiveProps() {

    this.componentDidMount();

}

render () {

return (
      <View  style={styles.container} >
      <FlatList
        data={this.state.entries}
        renderItem={({item}) => <Entry item={item} />}
        renderItem={({item}) => <Entry item={item} toDetails={this.toDetails} />}
        keyExtractor={item => item['_id']}
        />



      </View>
      );
      }

}

export default HomeScreen