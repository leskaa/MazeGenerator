"use strict"
const rc = rough.canvas(document.getElementById('canvas'));
var ctx = canvas.getContext("2d");//for displaying text

class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 80;
        this.h = 80;
        this.top = true;
        this.right = true;
        this.bottom = true;
        this.left = true;
        this.visited = false;
        this.neighbors = [];

        this.xindex = this.x/80;//gives the numbers from 1-10
        this.yindex = this.y/80;//gives the numbers 1-10
    }

    display() {
        if(this.top) {
            rc.line(this.x, this.y, this.x + this.w, this.y);
        }

        if(this.right) {
            rc.line(this.x + this.w, this.y, this.x + this.w, this.y + this.h);
        }

        if(this.bottom) {
            rc.line(this.x + this.w, this.y + this.h, this.x, this.y + this.h);
        }

        if(this.left) {
            rc.line(this.x, this.y + this.h, this.x, this.y);
        }

        if(this.visited){
            rc.rectangle(this.x, this.y, this.w, this.h, {
                fill: 'red'
            });
        }
    }

    getNeighbors(c) {
        this.neighbors.push(1);//top
        this.neighbors.push(2);//right
        this.neighbors.push(3);//bottom
        this.neighbors.push(4);//left
    }
    
    removeEdge(num) {
        switch(num) {
            case 1: this.top = false; break;
            case 2: this.right = false; break;
            case 3: this.bottom = false; break;
            case 4: this. left = false; break;
        }
    }
}

let cells = [];

//let cells = [...Array(10)].map(e => Array(10).fill(0));
for(let y = 0; y < 800; y+=80) {//change the 800 for a variable so the size could possibly be changed within program
    for(let x = 0; x < 800; x+=80) {
        cells.push(new Cell(x, y));
    }
}

let current = cells[0];
current.visited = true;

for(let i = 0; i < 20; i++){//for testing the algorithm
    
}

//For displaying numbers above the cells for development reference(remove later)
for(let i = 80; i < 800; i+=80) {
    ctx.fillText(Math.round(i/80),i+40,7);
}

for(let i = 80; i < 800; i+=80) {
    ctx.fillText(Math.round(i/80),1,i+40);
}

for(let i = 0; i < cells.length; i++) {
    //cells[i].removeEdge(1);//To test removing top edges
    //cells[i].removeEdge(3);//To test removing bottom edges
    cells[i].display();
}