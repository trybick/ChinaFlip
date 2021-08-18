const fs = require('fs');
const path = require('path');

// Keeping in case I need this code to generate sound library once I get real sounds

const obj = {};
const folder = './assets/sounds';
const idRegex = /^([^.]+)/;

const files = fs.readdirSync(folder, []);

files.forEach(fileName => {
  const id = fileName.match(idRegex)[0];
  obj[id] = `require(../../assets/sounds/${fileName})`;
});

fs.readFile('./src/utils/SoundLibrary.ts', (err, data) => {
  if (err) throw err;
  const arr = data.toString().split('\n');
  console.log('arr:', arr);
  console.log('obj:', obj);

  // arr[5] = 'deny ' + cli.getValue(options.ip) + ':' + cli.getValue(options.port);
  // for (i = 0; i < arr.length; i++) {
  //   fs.appendFileSync('nginx1.conf', arr[i] + '\n');
  // }
});

// const content = 'export default <SoundLibrary>' + JSON.stringify(obj);

// fs.writeFile('./temp.js', content, err => {
//   if (err) throw err;
// });
