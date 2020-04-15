const app = {
  state : {
    color: 0
  },
  
  initialize: function() {
    $('.square').hover(function() {
      app.display_color(this);
    });
    $('.square').click(function() {
      app.grow(this);
    });
    $('#blue_ci').click(function() {
      app.change_color(this);
    });
  },

  display_color: function(that) {
    const col = $(that).css('background-color');
    $(that).text(`This square is ${col}`);
  },

  grow: function(that) {
    $(that).toggleClass("grow");
  },

  change_color: function(that) {
    const colors = ['blue', 'red', 'green', 'black'];
    if (app.state.color === 3) { app.state.color = 0; }
    else { app.state.color += 1; }
    $(that).css('background-color', colors[app.state.color]);
  }
}