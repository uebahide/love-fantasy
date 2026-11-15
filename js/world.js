// world.js | 担当: B さん
// マップ（地形）を作って描く
// 0 = 床, 1 = 壁
const World = {
  map: [],
  layout: [
    '####################',
    '#..................#',
    '#..................#',
    '#..................#',
    '#..................#',
    '#..................#',
    '#..................#',
    '#..................#',
    '#..................#',
    '#..................#',
    '#..................#',
    '#..................#',
    '#..................#',
    '#..................#',
    '####################',
  ],
  colors: {
      floor: '#f7d6e0',
      wall: '#b23a48',
  },

  init() {
    this.map = this.layout.map((row) =>
      row.split('').map((ch) => (ch === '#' ? 1 : 0))
    );
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
        ctx.fillstyle = this.map[y][x] === 1 ? this.colors.wall : this.colors.floor;
        ctx.fillRect(x * CONFIG.TILE, y * CONFIG.TILE, CONFIG.TILE, CONFIG.TILE);
      }
    }
  },
};
