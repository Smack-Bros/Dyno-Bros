export class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(other) {
    return new Vector2(this.x + other.x, this.y + other.y);
  }

  sub(other) {
    return new Vector2(this.x - other.x, this.y - other.y);
  }

  give(other) {
    this.x += other.x;
    this.y += other.y;
  }

  take(other) {
    this.x -= other.x;
    this.y -= other.y;
  }
}

export class Rect {
  constructor(x, y, w, h) {
    this.pos = new Vector2(x, y);
    this.size = new Vector2(w, h);
  }

  get top() {
    return this.pos.add({x: this.size.x / 2, y: 0});
  }
  set top(v) {
    this.pos = v.sub({x: this.size.x / 2, y: 0});
  }
  get left() {
    return this.pos.add({x: 0, y: this.size.y / 2});
  }
  set left(v) {
    this.pos = v.sub({x: this.size.x / 2, y: 0});
  }
  get bottom() {
    return this.pos.add({x: this.size.x / 2, y: this.size.y});
  }
  set bottom(v) {
    this.pos = v.sub({x: this.size.x / 2, y: this.size.y});
  }
  get right() {
    return this.pos.add({x: this.size.x, y: this.size.y / 2});
  }
  set right(v) {
    this.pos = v.sub({x: this.size.x, y: this.size.y / 2});
  }
  get topLeft() {
    return this.pos;
  }
  set topLeft(v) {
    this.pos = Vector2(v.x, v.y);
  }
  get topRight() {
    return this.pos.add({x: this.size.x, y: 0});
  }
  set topRight(v) {
    this.pos = v.sub({x: this.size.x, y: 0});
  }
  get bottomLeft() {
    return this.pos.add({x: 0, y: this.size.y});
  }
  set bottomLeft(v) {
    this.pos = v.sub({x: 0, y: this.size.y});
  }
  get bottomRight() {
    return this.pos.add(this.size);
  }
  set bottomRight(v) {
    this.pos = v.sub(this.size);
  }
}
