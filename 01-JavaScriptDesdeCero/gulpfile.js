const { src, dest, watch, series } = require('gulp');
const babel = require('gulp-babel');

// Tarea de Babel
function es6() {
  return src('./es6/*.js') // Asegurate que el patrón tenga el punto: *.js
    .pipe(babel({
      presets: ['@babel/preset-env'] // Asegurate de tener esto instalado
    }))
    .pipe(dest('./es5'));
}

// Tarea para vigilar cambios
function watchFiles() {
  watch('./es6/*.js', es6);
}

// Exportar tareas
exports.es6 = es6;
exports.default = series(es6, watchFiles);
