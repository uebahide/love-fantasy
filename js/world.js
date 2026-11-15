// world.js | 担当: B さん
// マップ（地形）を作って描く
// 0 = 床, 1 = 壁
const World = {
  map: [],

  init() {
    this.map = [];
    for (let y = 0; y < CONFIG.ROWS; y++) {
      const row = [];
      for (let x = 0; x < CONFIG.COLS; x++) {
        const edge = x === 0 || y === 0 || x === CONFIG.COLS - 1 || y === CONFIG.ROWS - 1;
        row.push(edge ? 1 : 0);   // 外周だけ壁
      }
      this.map.push(row);
    }
  },

  // そのピクセル位置が壁かどうか（player.js から使う）
  isWall(px, py) {
    const x = Math.floor(px / CONFIG.TILE);
    const y = Math.floor(py / CONFIG.TILE);
    if (y < 0 || y >= CONFIG.ROWS || x < 0 || x >= CONFIG.COLS) return true;
    return this.map[y][x] === 1;
  },

  draw(ctx) {
    for (let y = 0; y < CONFIG.ROWS; y++) {
      for (let x = 0; x < CONFIG.COLS; x++) {
        ctx.fillStyle = this.map[y][x] === 1 ? '#555577' : '#2e4a2e';
        ctx.fillRect(x * CONFIG.TILE, y * CONFIG.TILE, CONFIG.TILE, CONFIG.TILE);
      }
    }
  },
};
