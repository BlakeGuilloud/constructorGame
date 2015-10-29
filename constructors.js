var Player = function(options){
  this.name = options.name;
  this.race = options.race;
  this.strongAttack = function(attacker, defender){
    if(attacker.race.accuracy / 2 > 40){
      defender.race.life = defender.race.life - attacker.race.damage*2;
      console.log(defender.race.life)
      console.log('hit')
      if(defender.race.life <= 0){

        $('.display').html('dead');
      }
      $('.display').html(defender.race.life)
    }
    else {
      console.log('miss')
    }
  }
  this.regularAttack = function(attacker, defender){
    if(attacker.race.accuracy  > 40){
      defender.race.life = defender.race.life - attacker.race.damage;
      console.log(defender.race.life)
      console.log('hit')
      if(defender.race.life <= 0){
        defender.race.life = 0;
        $('.display').html('dead');
      }
      $('.display').html(defender.race.life)
    }
    else {
      console.log('miss')
    }
  }
  this.weakAttack = function(attacker, defender){
    if(attacker.race.accuracy * 2 > 40){
      defender.race.life = defender.race.life - attacker.race.damage*.5;
      console.log(defender.race.life)
      console.log('hit')
      if(defender.race.life <= 0){
        defender.race.life = 0;
        $('.display').html('dead');
      }
      $('.display').html(defender.race.life)
    }
    else {
      console.log('miss')
    }
  }
};

var Race = function(options){
  this.name = options.name;
  this.damage = options.damage;
  this.accuracy = options.accuracy;
  this.life = options.life;
  this.icon = options.icon;
};


var userName = $('h2');
var zergIcon = "<img src = 'http://www.fillmurray.com/200/300'>";
var zergAccuracy = Math.floor(Math.random()*100);
var protossAccuracy = Math.floor(Math.random()*50);
var protoss = new Race({name: 'protoss', life: 150, damage: 15, accuracy: protossAccuracy, icon: zergIcon});
var zerg = new Race ({name: 'zerg', life: 100, damage: 10, accuracy: zergAccuracy, icon: zergIcon});
var user = new Player ({name: 'blake', race: zerg});
var enemy = new Player ({name: 'ron', race: protoss});
