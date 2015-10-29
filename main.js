$(document).ready(function(){
  page.init();
});

var page = {
  init: function(){
    page.styling();
    page.events();
  },

  styling: function(){

  },

  events: function(){

  $('h2').on('click', function(){
    $(this).addClass('clicked')
    $(this).siblings('').removeClass('clicked');
  });
  $('.begin').on('click', function(){
    $(this).siblings('').toggleClass('hidden');
    $('.enemyIcon').html(user.race.icon)
  });
  $('.strong').on('click', function(){
    user.strongAttack(user, enemy)
  });
  $('.regular').on('click', function(){
    user.regularAttack(user, enemy)
  });
  $('.weak').on('click', function(){
    user.weakAttack(user, enemy)
  });
  $('.attackButtons').on('click', function(){
    enemy.regularAttack(enemy, user)
    $('.yourHealth').html(user.race.life)
    $('.display').html(enemy.race.life)
  });


  // events: function(){
  //   $('.attack').keydown(function(event){
  //     if(event.which==65){
  //       user.attack(enemy);
  //       $('.protossLife').html(enemy.life);
  //     }
  //   });
  // },

},
}
