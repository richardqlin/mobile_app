import React from 'react'


import styles from '../styles/style';
import Form from '../components/Form';



import { StyleSheet, Text, View } from 'react-native';


class TabScreen extends React.Component {



constructor()  {

super();

this.submit = this.submit.bind(this,title,post);
}

submit(title, post) {

if (title && post) {

    fetch('https://murmuring-bastion-31969.herokuapp.com/post', {

           method: 'POST',

           headers: {

               'Content-Type': 'application/x-www-form-urlencoded'

           },

           body: 'title=' + title + '&post=' + post

       }).then(response => {
        this.props.navigation.navigate('Feed');
       });
}

}



render() {

return (

  <View style={styles.container}>

  <Form />
  </View>

);

}

}

export default TabScreen;