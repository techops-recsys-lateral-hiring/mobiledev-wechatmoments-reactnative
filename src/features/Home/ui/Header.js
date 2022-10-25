import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'

export default class Header extends Component {
    render() {

        console.log(this.props)
        return (
            <View style={{ width: "100%",height:200, backgroundColor: "red" }} >
              <Image
        style={{flex:1}}
        source={{
          uri: this.props.headerData.bgImage,
        }}
      />
      <View style={{position: 'absolute', top: 0, left: 0, right: 130, bottom: 0, justifyContent:"flex-end", alignItems:'flex-end'}}>
  <View style={{flexDirection : 'row'}}>
  <Text style={{color:"white"}}>{this.props.headerData.nickName}</Text>
 
      </View>
</View>
    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });
  