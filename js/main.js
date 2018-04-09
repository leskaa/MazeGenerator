const rc = rough.canvas(document.getElementById('canvas'));
let ctx = canvas.getContext("2d");//for displaying text

let numOfCols = 10, numOfRows = 10;//hook up to jQuery/HTML

let cells = [];
//let cells = [...Array(10)].map(e => Array(10).fill(0));
for(let y = 0; y < numOfCols; y++) {
    for(let x = 0; x < numOfRows; x++) {
        cells.push(new Cell(x, y));
    }
}

console.log(cells);

let current = cells[0];
current.visited = true;

for(let i = 0; i < cells.length; i++) {
    //cells[i].removeEdge(1);//To test removing top edges
    //cells[i].removeEdge(3);//To test removing bottom edges
    cells[i].display();
}