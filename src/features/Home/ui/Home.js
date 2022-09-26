import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Navigation } from 'react-native-navigation';
import Counter from "../../Counter/ui/Counter";


class Home extends Component {
    render() {

        console.log(this.props)
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => this.navigateToCounterScreen()}>
                        <Text style={{ fontSize: 20 }}>Navigate To Counter</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    navigateToCounterScreen =()=>{
        this.props.navigation.navigate('Counter')
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