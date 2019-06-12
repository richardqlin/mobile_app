import React from 'react'

import styles from '../styles/style';


import { StyleSheet, Button, View,Text,TextInput  } from 'react-native';

class Form extends React.Component {

constructor() {

super();


this.state = {

    title: "",
    post: "",

};

}

handleSubmit() {

    this.props.submit(this.state.title, this.state.post);

    this.setState({ title:'title', post:'post' });

}


render()
{

return (

 <View  style={styles.container} >

<Text>Title:</Text>

<TextInput

style={[styles.border, {height: 40}]}

value={this.state.title}

onChangeText={(title) => this.setState({ title: title })}

/>
<Text>Post:</Text>

<TextInput

style={[styles.border, {height: 200}]}

value={this.state.post}


onChangeText={(post) => this.setState({ post: post })}

/>

< Button title="Submit"

color = 'green'

onPress={()=>this.handleSubmit()}

/>

 </View>
)
}

}


export default Form
