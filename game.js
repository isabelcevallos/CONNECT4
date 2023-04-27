import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';


export default function game ({ navigation }) {

    const board = document.querySelector("#board");

    //0 - empty, 1 - red, 2 - yellow
    const pieces = [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0
    ];

    let playerTurn = 1;  // 1 - red, 2 - yellow


    for (let i = 0; i < 42; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        board.appendChild(cell);

        cell.onPress = () =>  {
            onPressEnteredColumn(i % 7);
        }
        cell.onPress = () => {
            onColumnPressed(i % 7)
        }
    }

    function onColumnPressed (column) {
        let availableRow = pieces.filter( (_, index) => index % 7 === column).lastIndexOf(0);
        if (availableRow === -1) {
            //no space in the column
            return;
        }

        pieces[(availableRow * 7) + column] = playerTurn;
        let cell = board.children[(availableRow * 7) + column];

        let piece = document.createElement("div");
        piece.className = "piece";
        piece.dataset.placed = true;
        cell.appendChild(piece); 
    }

    function onPressEnteredColumn(column) {
        //remove existing unplaced piece
        let unplacedPiece = document.querySelector("[data-place = 'false']");
        if (unplacedPiece) {
            unplacedPiece.parentElement.removeChild(unplacedPiece);
        }

        // add piece
        let cell = board.children[column];
        let piece = document.createElement("div");
        piece.className = "piece";
        piece.dataset.placed = false;
        cell.appendChild(piece);
    }

    return (
        board
        // <Text>Connect 4</Text>
    );
}
