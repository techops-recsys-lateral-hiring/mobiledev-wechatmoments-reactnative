import React, { Component } from "react";
import {
  Image,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Navigation } from '@react-navigation/native';
import Header from "./Header"
import {TweetList} from '../../TweetList/ui/TweetList';


class Home extends Component {


  componentDidMount(): void {
    console.log("getting user info")
  }

    render() {

        console.log(this.props)
        const headerData = {profileImage: "https://reactnative.dev/img/tiny_logo.png",nickName: "JSmith",bgImage:"https://reactnative.dev/img/tiny_logo.png"}
        return (
            <View style={styles.container}>
           <Header headerData={headerData} ></Header>
           <View style={{ flex: 2, backgroundColor: "yellow" }} >
                <TweetList></TweetList>
                </View>

<View style={{ width:"100%",height:250,position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent:"flex-end", alignItems: 'flex-end',paddingEnd:20}}>
  <View style={{flexDirection : 'row'}}>
  <Image
        style={{ width: 100, height: 100}}
        source={{
          uri: headerData.profileImage,
        }}
      />
      </View>
</View>     
         </View>
        );
    }

    navigateToCounterScreen =()=>{
        this.props.navigation.navigate('Counter')
    }

    
     successHandler = (data:any) => {
        console.log(data)
      }

      errorHandler = (error:any)=>{
        console.log(error)
      }

   

    
 

}



export default Home







const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });