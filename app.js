var fs = require('fs');

fs.writeFile('message.txt', 'Acerola is a tropical fruit-bearing shrub or a small tree', function (err) {
  if (err) throw err;
  console.log('>>>File \"message.txt\" is saved. Run ls, and find it. Open it to read its contents.');
});