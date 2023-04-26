import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import main from '/.main';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Connect 4 Game</Text>
    //   <StatusBar style="auto" />
    // </View>
     <main />
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
