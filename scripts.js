//affichage des popups

function toggle_popup(popup_id) {
    let popup = document.getElementById(popup_id);
    popup.classList.toggle("hide_popup");
}

//VERIFICATION DES VALEURS DU SUDOKU:

//définition du tableau contenant toutes les valeurs de la grille, de ses colonnes, lignes et boîtes
const node_cellule = document.querySelectorAll('td');
const sudoku_array = Array.from(node_cellule).map(td => td.innerText);

//définition d'une fonction permettant le découpage des lignes pour une grille = un tableau donné prenant en paramètres l'index de la ligne et la longueur de la ligne (9 si grille de 9x9, 4 si grille de 4x4 etc)
function getRow(board, rowIndex, rowLength) {
    let tr = board.slice((rowIndex * rowLength), ((rowIndex * rowLength) + rowLength));
    return tr;
}

console.log(getRow(sudoku_array, 4, 9));

//récupération des valeurs des colonnes
/*function getColumn(board, columnIndex) {
    let column = [];
    for (let row = 1; row < 10; row ++) {
        column.push(board[row][columnIndex]);
    }
    return column;
}



let column_3 = getColumn(sudoku_array, 2);
console.log(column_3);*/
