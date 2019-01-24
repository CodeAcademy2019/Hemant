const filterFiles = require('./modular_module');

const dir = process.argv[2];
const filter = process.argv[3];
filterFiles(dir, filter, (err, list) => {
  if (err) {
    console.log(err);
  }
  list.forEach((element) => {
    console.log(element);
  });
});