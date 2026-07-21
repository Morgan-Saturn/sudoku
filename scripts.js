//affichage des popups

function toggle_popup(popup_id) {
    let popup = document.getElementById(popup_id);
    popup.classList.toggle("hide_popup");
}

// vérification des valeurs du sudoku
const node_cellule = document.querySelectorAll('td');
const cellule = Array.from(node_cellule);
const sudoku_array = Array.from(node_cellule).map(td => td.innerText);

console.log(sudoku_array);

