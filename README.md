# blockly-games-pond-solution

My solution to [blockly games : pond](https://blockly-games.appspot.com/pond-duck), written in JavaScript.

100% win rate when playing with the default AI, but may not be good in PVP.

## solution 1
```js
var cannon_angle = 0;
var cannon_angle_diff = 10;
var cannon_scan_width = cannon_angle_diff;
var enemy_dist;
var swim_angle = 0;
var swim_angle_diff = 2;
var swim_speed = 100;

while (true) {
  // swim circularly
  swim_angle += swim_angle_diff;
  swim(swim_angle, swim_speed);

  // scan enemy
  enemy_dist = scan(cannon_angle, cannon_scan_width);
  
  // if an enemy is scanned, shoot it
  if (enemy_dist <= 70) {
    cannon(cannon_angle, enemy_dist);
  }
  // if no enemy around, keep on scanning
  else {
    cannon_angle += cannon_angle_diff;
  }
}
```
