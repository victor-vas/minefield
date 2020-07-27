import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';

import Button from '../components/Button';

const LevelSelection = props => {
    return (
        <Modal onRequestClose={props.onCancel} visible={props.isVisible} animationType="slide" transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    <Button label="Fácil" level={0.1} onLevelSelected={props.onLevelSelected}/> 
                    <Button label="Normal" level={0.2} onLevelSelected={props.onLevelSelected}/> 
                    <Button label="Difícil" level={0.3} onLevelSelected={props.onLevelSelected}/> 
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default LevelSelection
