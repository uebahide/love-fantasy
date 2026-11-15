// main.js | 担当: 共通（変更するときは相談）
// ゲームの開始とメインループ
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

function update() {
  Player.update();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  World.draw(ctx);
  Player.draw(ctx);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);   // 1秒に約60回くり返す
}

World.init();
Player.init();
loop();
