//affichage des popups

function toggle_popup(popup_id) {
    let popup = document.getElementById(popup_id);
    popup.classList.toggle("hide_popup");
}

//VERIFICATION DES VALEURS DU SUDOKU:

//définition du tableau contenant toutes les valeurs de la grille
const node_cellule = document.querySelectorAll('td');
const sudoku_array = Array.from(node_cellule).map(td => td.innerText);

//mise à jour des valeurs dans la grille en temps réel

//définition d'une fonction permettant le découpage des lignes pour une grille donnée prenant en paramètres ladite grille, l'index de la ligne et la longueur de la ligne (9 si grille de 9x9, 4 si grille de 4x4 etc)
function getRow(board, rowIndex, rowLength) {
    let tr = board.slice((rowIndex * rowLength), ((rowIndex * rowLength) + rowLength));
    return tr;
}

//définition d'une fonction permettant de récupérer les colonnes d'une grille donnée en prenant pour paramètres la grille, l'index de la colonne voulue et la longueur de la colonne
function getColumn(board, columnIndex, columnLength) {
    let column = [];
    for (let i = columnIndex; i < columnLength*columnLength; i+=columnLength) {
        column.push(board[i]);
    }
    return column;
}

console.log(getColumn(sudoku_array, 4, 9));

