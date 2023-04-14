import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class ChessBoard extends Component {
  render() {
    const chessBoardDesign = [];
    for (let i = 0; i<8; i++) {
      const row = [];
      for (let j = 0; j<8; j++) {
        const color = (i + j) % 2===0 ? '#fff' : '#000';
        row.push(<View key={`${i}${j}`} style={[styles.square , {backgroundColor: color}]}></View>);
      }
      chessBoardDesign.push(<View key={`${i}`} style={styles.row}>{row}</View>);
    }
    return <View style={styles.chessBoard}>{chessBoardDesign}</View>
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 20,}}>By - Usama Mansoor</Text>
      <ChessBoard></ChessBoard>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb999',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },

  chessBoardDesign: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
  },

  square: {
    width: 43,
    height: 43,
    borderWidth: 2,
  },
});
