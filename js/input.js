// input.js | 担当: 共通（変更するときは相談）
// 押されているキーを記録する
const Input = {
  keys: {},
  isDown(...names) {
    return names.some((n) => this.keys[n]);
  },
};

window.addEventListener('keydown', (e) => { Input.keys[e.key] = true; });
window.addEventListener('keyup',   (e) => { Input.keys[e.key] = false; });
