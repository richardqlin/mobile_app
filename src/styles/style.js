import React from 'react'
import { StyleSheet, Dimensions } from 'react-native';



const styles = StyleSheet.create({
border: {
 width: Dimensions.get('window').width * 0.9,
 margin:30,
 padding: 10,
 borderWidth :0.5,
 borderColor: '#fff'

},


  container: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },


});




export default styles;