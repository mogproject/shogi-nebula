let ctx: CanvasRenderingContext2D;

function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(400, 400, 100, 0, 2 * Math.PI);
    ctx.stroke();
}

export function initialize(canvas: HTMLCanvasElement) {
    // initialize canvas.
    const ctxTmp = canvas.getContext("2d");
    if (ctxTmp == null) {
        return;
    }
    ctx = ctxTmp;

    // main loop
    gameLoop();
}
