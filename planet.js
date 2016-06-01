// Setup stuff
planetaryjs.plugins.earth({
  topojson: { file:   'world-110m.json' },
  oceans:   { fill:   '#000080' },
  land:     { fill:   '#339966' },
  borders:  { stroke: '#008000' }
});
var planet = planetaryjs.planet();
// Make the planet fit well in its canvas
planet.projection.scale(250).translate([250, 250]);
var canvas = document.getElementById('globe');
planet.draw(canvas);
