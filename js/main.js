(function() {
  'use strict';
  
  var name = document.getElementById('name');
  var btn = document.getElementById('btn');
  var triangle = document.getElementById('triangle');
  var output = document.getElementById('output');

  name.addEventListener('click', function() {
    triangle.classList.remove('hidden');
  });

  btn.addEventListener('click', function() {
    // shuffle
    var arr = name.value.split('');
    var l = arr.length;
    var result = [];
    for (var i=0; i < l; i++) {
      var rand = Math.floor(Math.random() * arr.length);
      result.push(arr[rand]);
      arr.splice(rand, 1);
    }
    output.textContent = result.join('');

    // show
    output.classList.remove('hidden');    
  });
})();
