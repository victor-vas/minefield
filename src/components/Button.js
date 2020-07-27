import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = props => {
    function handleBackground() {
        const buttonStyle = [styles.button];

        if (props.label === 'Fácil') {
            buttonStyle.push(styles.bgEasy);
        }else if (props.label === 'Normal') {
            buttonStyle.push(styles.bgNormal);
        }else {
            buttonStyle.push(styles.bgHard);
        }

        return buttonStyle;
    }

    return(
        <TouchableOpacity style={handleBackground()} onPress={() => props.onLevelSelected(props.level)}>
            <Text style={styles.buttonLabel}>{props.label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        marginTop: 10,
        padding: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: '#eee',
        fontWeight: 'bold'
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765f7'
    },
    bgHard: {
        backgroundColor: 'red'
    }
});

export default Button;
