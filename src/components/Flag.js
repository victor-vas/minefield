import React from 'react';
import { View, StyleSheet } from 'react-native';

const Flag = props => {
    return (
        <View style={styles.container}>
            <View style={[styles.flag, props.bigger ? styles.flagBigger : null]} />
            <View style={[styles.flagpole, props.bigger ? styles.flagpoleBigger : null]} />
            <View style={[styles.base1, props.bigger ? styles.base1Bigger : null]} />
            <View style={[styles.base2, props.bigger ? styles.base2Bigger : null]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2
    },
    flag: {
        position: 'absolute',
        width: 6,
        height: 5,
        backgroundColor: '#f22',
        marginLeft: 3
    },
    flagpole: {
        position: 'absolute',
        width: 2,
        height: 14,
        backgroundColor: '#222',
        marginLeft: 9
    },
    base1: {
        position: 'absolute',
        width: 6,
        height: 2,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10
    },
    base2: {
        position: 'absolute',
        width: 10,
        height: 2,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12
    },
    flagBigger: {
        height: 10,
        width: 14,
        marginLeft: 3,
    },
    flagpoleBigger: {
        height: 28,
        width: 4,
        marginLeft: 16,
    },
    base1Bigger: {
        height: 4,
        width: 12,
        marginTop: 20,
        marginLeft: 12,
    },
    base2Bigger: {
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 24
    }
});

export default Flag;
