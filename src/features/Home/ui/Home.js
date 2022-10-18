import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Navigation } from 'react-native-navigation';
import Counter from "../../Counter/ui/Counter";
import {getRequest,postRequest} from  "../../../network/Network";


class Home extends Component {
    render() {

        console.log(this.props)
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => this.postRequest()}>
                        <Text style={{ fontSize: 20 }}>Navigate To Counter</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    navigateToCounterScreen =()=>{
        this.props.navigation.navigate('Counter')
    }

    
     successHandler = (data) => {
        console.log(data)
      }

      errorHandler = (error)=>{
        console.log(error)
      }

    getRequest = ()=>{
        getRequest("https://jsonplaceholder.typicode.com/posts/1",this.successHandler,this.errorHandler)
    }

    postRequest = ()=>{
        postRequest("https://jsonplaceholder.typicode.com/posts",this.successHandler,this.errorHandler,{
            "title": "foo",
            "body": "bar",
            "userId": 1,
          })
    }

}



export default Home







const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});