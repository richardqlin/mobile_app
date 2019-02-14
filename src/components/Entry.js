
import React from 'react'

import styles from '../styles/style';
import { StyleSheet, Button, View,Text} from 'react-native';


class Entry extends React.Component {

render()
{

return (
<View style={styles.border }>
<Text > Hello world </Text>

  <Button

  title={this.props.item.title}

  onPress={() => this.props.toDetails(this.props.item)}

  />

</View>

);

}

}
export default Entry;

