import React, { Component } from "react";
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
} from "react-native";

class FoodHomeScreen extends Component {

    static navigationOptions = {
        headerTitle: 'Food',
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Meal')} style={styles.button}>
                <Text style={styles.text}>Go to Meal Swipe Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Meal')} style={styles.button}>
                <Text style={styles.text}>Food on Campus</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Meal')} style={styles.button}>
                <Text style={styles.text}>Food in Hattiesburg</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
export default FoodHomeScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 15,
        padding: 15,
        borderRadius: 15,
        height: 120,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffd147',
      },
      text: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 18,
      }
});