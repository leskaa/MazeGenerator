"use strict"
const rc = rough.canvas(document.getElementById('canvas'));

class Cell{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.top = true;
        this.right = true;
        this.bottom = true;
        this.left = true;
    }

    display(){
        if(this.top){
            rc.line(this.x, this.y, this.x + this.w, this.y);
        }

        if(this.right){
            rc.line(this.x + this.w, this.y, this.x + this.w, this.y + this.h);
        }

        if(this.bottom){
            rc.line(this.x + this.w, this.y + this.h, this.x, this.y + this.h);
        }

        if(this.left){
            rc.line(this.x, this.y + this.h, this.x, this.y);
        }
    }
}

let cells = [];
//let cells = [...Array(10)].map(e => Array(10).fill(0));
for(let x = 10; x < 800; x+=80){//change the 800 for a variable so the size could possibly be changed within program
    for(let y = 10; y < 800; y+=80){
        cells.push(new Cell(x, y, 80, 80));
    }
}

//I read that .forEach is 95% slower than a regular for loop so I went with this
for(let i = 0; i < cells.length; i++){
    cells[i].display();
}