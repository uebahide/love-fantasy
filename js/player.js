// player.js | 担当: A さん
// プレイヤーの移動と描画
const Player = {
  x: 0,
  y: 0,
  size: 24,
  color: '#4a6fa5',
  dashSpeed: 6,        // ダッシュ中の速さ（普通は 3）
  dashing: false,      // 今ダッシュ中かどうか
  dir: { x: 0, y: 1 },   // 最初は下向き
  


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
    if (dx !== 0 || dy !== 0) {
  this.dir = { x: Math.sign(dx), y: Math.sign(dy) };
}
  },

  // 四隅のどこかが壁なら動けない
  canMoveTo(nx, ny) {
    const s = this.size - 1;
    return !World.isWall(nx, ny) && !World.isWall(nx + s, ny)
        && !World.isWall(nx, ny + s) && !World.isWall(nx + s, ny + s);
  },

  draw(ctx) {
  const r = this.size / 2;

  // 体（丸）
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x + r, this.y + r, r, 0, Math.PI * 2);
  ctx.fill();

  // 目（向いている方向に少しずれる）
  const ox = this.dir.x * 3;
  const oy = this.dir.y * 3;
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(this.x + r - 5 + ox, this.y + r - 3 + oy, 3, 0, Math.PI * 2);
  ctx.arc(this.x + r + 5 + ox, this.y + r - 3 + oy, 3, 0, Math.PI * 2);
  ctx.fill();
  },
};
