import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './home';
import game from './game';

const Stack = createNativeStackNavigator();

 export default function App() {
   return (
    <View style={styles.container}>
      <Text>Connect 4 Game</Text>
      <StatusBar style="auto" />
    </View>
  // <NavigationContainer>
  //    <Stack.Navigator initial initialRouteName='Home'>
  //    <Stack.Screen name='Home' component={home} />
  //    <Stack.Screen name='Game' component={game} />
  //    </Stack.Navigator>
  //    </NavigationContainer>

    );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
