import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Alert } from 'react-native';

import params from './src/params';
import { createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines, invertFlag, flagsUsed } from './src/logic';
import MineField from './src/components/MineField'
import Header from './src/components/Header';
import LevelSelection from './src/screens/LevelSelection';

const App = () => {
    const rows = params.getRowsAmount();
    const columns = params.getColumnsAmount();

    const [state, setState] = useState(createState());
    const [showLevelSelection, setShowLevelSelection] = useState(false);

    function createState() {
        return {
            board: createMinedBoard(rows, columns, minesAmount()),
            won: false,
            lost: false,
        }
    }

    function onOpenField(row, column) {
        const board = cloneBoard(state.board);
        openField(board, row, column);
        const lost = hadExplosion(board);
        const won = wonGame(board);

        if (lost) {
            showMines(board);
            Alert.alert('Infelizmente', 'Você perdeu!!!');
        }

        if (won) {
            Alert.alert('Parabéns', 'Você ganhou!!!');
        }

        setState({ board, won, lost });
    }

    function onSelectField(row, column) {
        const board = cloneBoard(state.board);
        invertFlag(board, row, column);
        const won = wonGame(board);

        if (won) {
            Alert.alert('Parabéns', 'Você ganhou!!!');
        }

        setState({ board, won });
    }

    function minesAmount() {
        return Math.ceil(rows * columns * params.difficultLevel);
    }

    function onLevelSelected(level) {
        params.difficultLevel = level;

        setState(createState());
    }

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <LevelSelection isVisible={showLevelSelection} onLevelSelected={onLevelSelected} onCancel={() => setShowLevelSelection(false)} />
                <Header flagsLeft={minesAmount() - flagsUsed(state.board)} onNewGame={() => setState(createState())} onFlagPress={() => setShowLevelSelection(true)} />
                <View style={styles.board}>
                    <MineField board={state.board} onOpenField={onOpenField} onSelectField={onSelectField}/>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    board: {
        alignItems: 'center',
        backgroundColor: '#aaa'
    }
});

export default App;
