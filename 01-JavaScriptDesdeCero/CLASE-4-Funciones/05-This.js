let myObj={

    nombre:'fernando',
    saludar(){
        console.log(`Hola ${this.nombre}`);
    }
};

myObj.saludar();


function checkthis() {
    'use strict';
  console.log(this);
}
checkthis();


//lexical this
function Boy() {
    this.edad = 0;
    setInterval(() => {
        this.edad++}, 1000);
}
let juanito = new Boy();



// 1️⃣ THIS EN UN OBJETO
'use strict';
const persona = {
  nombre: 'Fernando',
  saludar: function () {
    console.log('1️⃣ Hola, soy ' + this.nombre); // 👉 'this' apunta al objeto persona
  }
};
persona.saludar(); // ✅ "Hola, soy Fernando"

// 2️⃣ THIS EN UNA FUNCIÓN NORMAL (MODO ESTRICTO)
function mostrarThis() {
    'use strict';
  console.log('2️⃣', this); // 👉 undefined en modo estricto
}
mostrarThis(); // ⚠️ undefined

// 3️⃣ THIS EN UNA FUNCIÓN FLECHA

'use strict';
const flecha = () => {
    
    console.log('3️⃣', this); // 👉 hereda el 'this' del entorno exterior (acá, probablemente window o undefined)
};
flecha(); // ⚠️ window o undefined

// 4️⃣ THIS EN UN CONSTRUCTOR
function Auto(marca) {
  this.marca = marca;
  this.mostrar = function () {
    console.log('4️⃣ Auto: ' + this.marca); // 👉 'this' es el nuevo objeto creado
  };
}
const miAuto = new Auto('Toyota');
miAuto.mostrar(); // ✅ "Auto: Toyota"

// 5️⃣ THIS PERDIDO Y RECUPERADO CON BIND
const saludo = persona.saludar;
saludo(); // ⚠️ undefined (pierde el 'this')
const saludoBien = persona.saludar.bind(persona);
saludoBien(); // ✅ "Hola, soy Fernando"

