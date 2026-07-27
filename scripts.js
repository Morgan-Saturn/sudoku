//affichage des popups

function toggle_popup(popup_id) {
    let popup = document.getElementById(popup_id);
    popup.classList.toggle("hide_popup");
}

//VERIFICATION DES VALEURS DU SUDOKU:

//récupération des td
const node_cellule = document.querySelectorAll('td');
//définition du tableau contenant toutes les valeurs de la grille
const sudoku_array = Array.from(node_cellule).map(td => parseInt(td.innerText));

//mise à jour des valeurs dans la grille en temps réel
node_cellule.forEach((cellule, index) => cellule.addEventListener('input', (event) => {
    const inputNumber = event.target.value;
    sudoku_array[index] = parseInt(inputNumber);
    console.log(sudoku_array);
}))


//définition d'une fonction permettant le découpage des lignes pour une grille donnée prenant en paramètres ladite grille, l'index de la ligne et la longueur de la ligne (9 si grille de 9x9, 4 si grille de 4x4 etc)
function getRow(board, rowIndex, rowLength) {
    let tr = board.slice((rowIndex * rowLength), ((rowIndex * rowLength) + rowLength));
    return tr;
}
console.log(getRow(sudoku_array, 0, 9));

//définition d'une fonction permettant de récupérer les colonnes d'une grille donnée en prenant pour paramètres la grille, l'index de la colonne voulue et la longueur de la colonne
function getColumn(board, columnIndex, columnLength) {
    let column = [];
    for (let i = columnIndex; i < columnLength*columnLength; i+=columnLength) {
        column.push(board[i]);
    }
    return column;
}
//console.log(getColumn(sudoku_array, 0, 9));

//définition d'une fonction permettant le découpage des boîtes pour une grille donnée prenant en paramètre ladite grille, la ligne et la colonne
/*function getBox(board, rowIndex, rowLength, rowLength, boxLength) {
    let box = board.slice((rowIndex * (rowLength/boxLength)), ((rowIndex * (rowLength/boxLength)) + rowLength/boxLength));
    return box;
}*/

function getBox(boxLength) {
    third_one = getRow(sudoku_array, 0, 9 - (9-boxLength));
    third_two = getRow(sudoku_array, 9, 9 - (9-boxLength));
    third_three = getRow(sudoku_array, 18, 9 - (9-boxLength));

    let box = [];
    box.push(third_one, third_two, third_three);
    return box;
}
console.log(getBox(3));//là il fait un tableau avec les 3 premières lignes des 3 boîtes. A creuser


