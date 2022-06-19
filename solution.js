var cannon_angle = 0;
var cannon_scan_width = 10;
var enemy_dist;
var swim_angle = 0;

while (true) {
  // swim circularly
  swim_angle += 2;
  swim(swim_angle, 100);

  // scan enemy
  enemy_dist = scan(cannon_angle, cannon_scan_width);
  
  // if an enemy is scanned, shoot it
  if (enemy_dist <= 70) {
    cannon(cannon_angle, enemy_dist);
  }
  // if no enemy around, keep on scanning
  else {
    cannon_angle += 10;
  }
}
