## Generador de rutas index
Cuando tienes un proyecto de tsx jsx ts js, hay un momento donde tienes muchos archivos y quieres simplificarlo en una ruta, como en el siguiente ejemplo, donde ya se me acumularon 2 componentes

![](img/img2.jpeg)

Una manera podria ser digitar un index manualmente y actualizarlo cada vez que agregues un nuevo archivo o puedes hacer lo siguiente:

descargas el **`generate.js`**, lo colocas en la raiz de tu proyecto y luego lo ejecutas de la siguiente manera en consola **`node generate src/components`** y automaticamente generara el index.ts en tu proyecto, en caso no desees que sea index.**ts** y quieres que sea index.**js**, esto es facilemte modificable en **generate.js**

![](img/img1.jpeg)

Cabe mencionar que al momento de ejecutar **node generate src/components**, la ruta de la carpeta donde quieras ejecutar el index es customizable, **node generate 'aca colocas la ruta de tu carpeta'***

### **OBSERVACIONES**

- Si tienes complicaciones para correr el codigo, capaz sea por module que este usando, en el codigo, yo lo digite con **`import`**, pero si tu usas require, solo cambia las primeras lineas, por las siguientes:
```sh
const fs = require('fs');
const path = require('path');
```
