# blockly-games-pond-solution

My solution to [Blockly games : Pond](https://blockly-games.appspot.com/pond-duck), written in JavaScript.

100% win rate when playing with the default AI, but may not be good in PVP.

## Solution
```js
var cannon_angle = 0;
var enemy_dist;
var swim_angle = 0;

while (true) {
  // swim circularly
  swim_angle += 2;
  swim(swim_angle, 100);

  // scan enemy
  enemy_dist = scan(cannon_angle, 10);
  
  // if an enemy is scanned, shoot it
  if (enemy_dist <= 70) {
    cannon(cannon_angle, enemy_dist);
  }
  // if no enemy around, keep on scanning
  else {
    cannon_angle += 10;
  }
}
```
