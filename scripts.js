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

//définition d'une fonction permettant de récupérer les colonnes d'une grille donnée en prenant pour paramètres la grille, l'index de la colonne voulue et la longueur de la colonne
function getColumn(board, columnIndex, columnLength) {
    let column = [];
    for (let i = columnIndex; i < columnLength*columnLength; i+=columnLength) {
        column.push(board[i]);
    }
    return column;
}

//définition d'une fonction permettant le découpage des boîtes pour une grille donnée prenant en paramètre ladite grille, la ligne et la colonne. NE FONCTIONNE QUE POUR DES GRILLES DE 9X9 ACTUELLEMENT
function getBox(board, boxWidth, start, gridWidth) {
    const end = start + boxWidth;
    const one = board.slice(start, end);
    const two = board.slice(gridWidth+start, gridWidth+end);
    const three = board.slice(gridWidth+gridWidth+start, gridWidth+gridWidth+end);
    let box = [];
    box.push(one, two, three);
    box = box.flat();
    return box;
}
//console.log(getBox(sudoku_array, 3, 30, 9));

//définition d'une fonction dont le but sera de vérifier la présence de doublons dans les lignes, colonnes et boîtes
function checkDuplicates(board) {
    const filtered = board.filter(value => !isNaN(value) && value !== 0); //on ne regarde que les valeurs de la grille qui ne sont pas NaN ou 0
    return new Set(filtered).size !== filtered.length;//set ne contient que des valeurs uniques, donc on ne retournera ici un nouveau tableau de valeurs que si la longueur de filtered diffère de celle de new Set, ce qui indique la présence de doublons.
}

