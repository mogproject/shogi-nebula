
import Pos from './core/pos';


var ctx:CanvasRenderingContext2D;


class Cell {
    private static readonly START_POS_X = 100;
    private static readonly START_POS_Y = 100;
    private static readonly CELL_WIDTH = 40;
    private static readonly CELL_HEIGHT = 48;
    private static readonly CELL_STROKE = 2;

    constructor(private pos:Pos) {
    }

    public draw() {
        ctx.fillStyle = "#cccccc";
        ctx.fillRect(
            Cell.START_POS_X + this.pos.column * Cell.CELL_WIDTH + Cell.CELL_STROKE,
            Cell.START_POS_Y + this.pos.row * Cell.CELL_HEIGHT + Cell.CELL_STROKE,
            Cell.CELL_WIDTH - Cell.CELL_STROKE,
            Cell.CELL_HEIGHT - Cell.CELL_STROKE
        );
    }

}

function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(400, 400, 100, 0, 2 * Math.PI);
    ctx.stroke();

    new Cell(new Pos(3, 4)).draw();
    new Cell(new Pos(3, 5)).draw();
    new Cell(new Pos(4, 6)).draw();
}

window.onload = () => {
    // initialize canvas.
    var canvas = <HTMLCanvasElement>document.getElementById('cnvs');
    var ctxTmp = canvas.getContext("2d");
    if (ctxTmp == null) {
        return;
    }
    ctx = ctxTmp;

    // main loop
    gameLoop();
}
