const rc = rough.canvas(document.getElementById('canvas'));
rc.rectangle(10, 10, 200, 200);

let cells = [...Array(10)].map(e => Array(10).fill(0));

class cell {
    construtor(x, y, w, h) {
        this.top = true;
        this.right = true;
        this.bottom = true;
        this.left = true;
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }

    removeEdge() {

    }

    display() {
        if (top) {

        }

        if (right) {

        }

        if (bottom) {

        }
        
        if (left) {

        }
    }
}