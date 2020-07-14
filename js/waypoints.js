console.clear();

var waypoint1 = new Waypoint({
  element: document.getElementById('especialidades'),
  handler: function(direction) {
    if (direction == 'down') {
      document.getElementById('ini').classList.remove('current');
      document.getElementById('esp').classList.add('current');
    } else if (direction == 'up') {
      document.getElementById('ini').classList.add('current');
      document.getElementById('esp').classList.remove('current');
    }
  },
  offset: '10%'
});

var waypoint2 = new Waypoint({
  element: document.getElementById('nosotros'),
  handler: function(direction) {
    if (direction == 'down') {
      document.getElementById('esp').classList.remove('current');
      document.getElementById('nos').classList.add('current');
    } else if (direction == 'up') {
      document.getElementById('esp').classList.add('current');
      document.getElementById('nos').classList.remove('current');
    }
  },
  offset: '10%'
});

var waypoint3 = new Waypoint({
  element: document.getElementById('contacto'),
  handler: function(direction) {
    if (direction == 'down') {
      document.getElementById('nos').classList.remove('current');
      document.getElementById('con').classList.add('current');
    } else if (direction == 'up') {
      document.getElementById('nos').classList.add('current');
      document.getElementById('con').classList.remove('current');
    }
    
  },
  offset: '10%'
});