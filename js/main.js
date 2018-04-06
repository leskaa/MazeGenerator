const rc = rough.canvas(document.getElementById('canvas'));
rc.rectangle(10, 10, 200, 200);

let cells = [...Array(10)].map(e => Array(10).fill(0));

