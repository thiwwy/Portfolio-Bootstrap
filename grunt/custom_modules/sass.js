exports.task = {
  dist: {
    options: {
      style: 'expanded',
      lineNumbers: true, // 1
      sourcemap: 'none'
    },
    files: [{
      expand: true, // 2
      cwd: '../assets/stylesheets/sass',
      //src: [ '**/*.sass' ],
      src: [ 'main.sass' ],
      dest: '../assets/stylesheets/css',
      ext: '.css'
    }]
  }
};
