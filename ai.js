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
  
  // if enemy is found, shoot it
  if (enemy_dist <= 70) {
    cannon(cannon_angle, enemy_dist);
  }
  // if no enemy around, keep on scanning
  else {
    cannon_angle += cannon_angle_diff;
  }
}
