const player1 = {
  name:'Sonya',
  hp:"40",
  img:'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon:['polearm', 'knife'],
  attack: function(){
    console.log(player1.name + 'Fight ...' )
  }
};

const player2 = {
  name:'LiuKang',
  hp:"100",
  img:'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon:['blade', 'shield'],
  attack: function(){
    console.log(player2.name + 'Fight ...' )
  }
};

const $main = document.querySelector('.arenas');

function createPlayer(playerClass, playerObject){
  const $player = document.createElement('div');
  $player.classList.add(playerClass);
 
  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
 
  const $character = document.createElement('div');
  $character.classList.add('character');
 
  const $img = document.createElement('img');
  $img.src = playerObject.img;

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = playerObject.hp + '%';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = playerObject.name;

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
  $main.appendChild($player);
}


 

createPlayer('player1', player1);
createPlayer('player2', player2);