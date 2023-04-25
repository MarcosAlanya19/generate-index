import * as fs from 'fs';

// eslint-disable-next-line no-undef
// Toma el tercer elemento de process.argv como la ruta de la carpeta
const directoryPath = process.argv[2];

fs.readdir(directoryPath, (err, files) => {
  // msg en caso la carpeta no exista
  if (err) {
    console.log(`Error al leer la carpeta ${directoryPath}: ${err}`);
    return;
  }

  // verifica los archivos que acaben en js jsx ts tsx
  const exportStatements = files
    .filter((file) => file.match(/\.jsx?$|\.tsx?$/))
    .map((file) => `export * from './${file.replace(/\.(jsx?|tsx?)$/, '')}';`)
    .join('\n');


  const indexFileContent = `${exportStatements}\n`;

  // genera el index.ts
  fs.writeFile(`${directoryPath}/index.ts`, indexFileContent, (err) => {
    if (err) {
      console.log(`Error al escribir el archivo index.ts: ${err}`);
      return;
    }

    console.log(`El archivo index.ts ha sido creado en la carpeta ${directoryPath}`);
  });
});
