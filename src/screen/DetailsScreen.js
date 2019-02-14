 import React from 'react';
 import { StyleSheet, Text, View } from 'react-native';
 import styles from '../styles/style';


class DetailsScreen extends React.Component {

render()
{

return (
<View style={styles.border }>

            <Text> { this.props.navigation.state.params.post }</Text>

</View>

);

}

}

export default DetailsScreen