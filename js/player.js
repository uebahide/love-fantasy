// player.js | 担当: A さん
// プレイヤーの移動と描画
const Player = {
  x: 0,
  y: 0,
  size: 24,

  init() {
    this.x = CONFIG.TILE * 2;
    this.y = CONFIG.TILE * 2;
  },

  update() {
    let dx = 0;
    let dy = 0;
    if (Input.isDown('ArrowLeft', 'a'))  dx -= CONFIG.PLAYER_SPEED;
    if (Input.isDown('ArrowRight', 'd')) dx += CONFIG.PLAYER_SPEED;
    if (Input.isDown('ArrowUp', 'w'))    dy -= CONFIG.PLAYER_SPEED;
    if (Input.isDown('ArrowDown', 's'))  dy += CONFIG.PLAYER_SPEED;

    // 横と縦を別々に動かす（壁にぶつかったら止まる）
    if (this.canMoveTo(this.x + dx, this.y)) this.x += dx;
    if (this.canMoveTo(this.x, this.y + dy)) this.y += dy;
  },

  // 四隅のどこかが壁なら動けない
  canMoveTo(nx, ny) {
    const s = this.size - 1;
    return !World.isWall(nx, ny) && !World.isWall(nx + s, ny)
        && !World.isWall(nx, ny + s) && !World.isWall(nx + s, ny + s);
  },

  draw(ctx) {
    ctx.fillStyle = '#f4d35e';
    ctx.fillRect(this.x, this.y, this.size, this.size);
  },
};
