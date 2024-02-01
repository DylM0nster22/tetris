document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const scale = 30;
    const rows = canvas.height / scale;
    const columns = canvas.width / scale;

    let score = 0;

    class Block {
        constructor(col, row, color) {
            this.col = col;
            this.row = row;
            this.color = color;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.col * scale, this.row * scale, scale, scale);
            ctx.strokeStyle = "#000";
            ctx.strokeRect(this.col * scale, this.row * scale, scale, scale);
        }
    }

    let block = new Block(10, 20, "#ff0000");

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        block.draw();
        requestAnimationFrame(draw);
    }

    draw();
});
