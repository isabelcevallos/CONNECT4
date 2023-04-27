import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';


export default function game ({ navigation }) {
    const board = document.querySelector("#board");

    for (let i = 0; i < 42; i++) {
        let div = document.createElement("div");
        div.className = "cell";
        board.appendChild(div);

        div.onmouseenter = () =>  {
            console.log(i);
        }
    }

    return (
        
        <Text>Connect 4</Text>
    );
}
