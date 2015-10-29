$(document).ready(function(){
  // $('.blah').on('click', page.init);
  page.init();
});


var page = {

  init: function(){
    page.styling();

  },

  styling: function(){
    var Race = function (options){
      this.name = options.name || 'none';
      this.life = options.life || 0;
      this.weapon = options.weapon || 'none';
      this.icon = options.icon || 'blah';
    },

    var Weapon = function (damage){
      this.damage = damage || 0;
      this.attack = function(enemy){
        var zergInt = Math.floor(Math.random()*10)
        if(zergInt > 4){
          enemy.life = enemy.life - this.damage;
        }
        else {
          return
        }
        console.log(enemy.life)
      }
    };

    var Icon = function(options){
      this.icon = options.icon
    }



    var zergIcon = new Icon("<img src = 'http://vignette2.wikia.nocookie.net/starcraft/images/2/20/Zergling_SC2_Head1.jpg/revision/latest/scale-to-width-down/121?cb=20100719140025&format=webp'>");


    var Zealot = new Weapon(5);
    var Zergling = new Weapon(10);
    // var Marine = new Weapon(7);

    var zerg = new Race({name: 'zerg', life:  75, weapon: Zergling});
    var protoss = new Race({name: 'Protoss', life: 150, weapon: Zealot, icon: zergIcon});
    // var terran = new Race({name: 'Terran', life: 100, weapon: Marine});
    $('.attack').on('click', function(){
      Zergling.attack(protoss);
      $('.protossLife').html(protoss.life);
      Zealot.attack(zerg);
      $('.zergLife').html(zerg.life)
      if(zerg.life <= 0){
        $('.battlefield').html('PROTOSS WINS' + "<button class = 'playAgain'>Play Again?</button>")


      } else if (protoss.life <= 0){
        $('.battlefield').html('ZERG WINS');
      }
    });

    //

  },
};

// var protossAttack = window.setInterval(function(){
//
//   Zealot.attack(zerg);
//   $('.zergLife').html(zerg.life)
//   console.log('blue')
// }, 200);





////////////////////// attack ////////////////
