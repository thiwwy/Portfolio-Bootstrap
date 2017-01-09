exports.task = {
  my_target: {
    files: [{
      expand: true,
      cwd: '../assets/stylesheets/',
      src: [ '*.css', '!*.min.css' ], // 1
      dest: '../assets/stylesheets/',
      ext: '.min.css'
    }]
  }
};
