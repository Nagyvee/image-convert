const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './before';
const outputDir = './after';

if (!fs.existsSync(outputDir)){
  fs.mkdirSync(outputDir);
}

fs.readdirSync(inputDir).forEach(file => {
  const inputFile = path.join(inputDir, file);
  const outputFile = path.join(outputDir, file.replace(/\.[^/.]+$/, ".webp"));

  sharp(inputFile)
    .toFormat('webp')
    .toFile(outputFile, (err, info) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Converted: ${file}`);
      }
    });
});
