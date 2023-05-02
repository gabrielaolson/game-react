import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);

  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber){
    screen =(<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber){
    screen = <GameOverScreen />;
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }
  return (
  <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
    <ImageBackground 
    source={require('./assets/images/background.png')} 
    resizeMode="cover"
    style={styles.rootScreen}
    imageStyle={styles.backgroundImage}
    >
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    </ImageBackground>

  </LinearGradient>

  
  
  );
}

const styles = StyleSheet.create({

  rootScreen: {
    flex:1,
    // backgroundColor: '#ddb52f'
  },
  backgroundImage:{
    opacity: 0.15

  }

});