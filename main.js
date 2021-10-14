const player1 = {
  name:'Sonya',
  hp:100,
  img:'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon:['polearm', 'knife'],
  attack: function(){
    console.log(player1.name + 'Fight ...' )
  }
};

const player2 = {
  name:'LiuKang',
  hp:100,
  img:'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon:['blade', 'shield'],
  attack: function(){
    console.log(player2.name + 'Fight ...' )
  }
};

function createPlayer(player, playerName, hp, heroImg ){
  const $player = document.createElement('div');
  $player.classList.add(player);
 
  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
 
  const $character = document.createElement('div');
  $character.classList.add('character');
 
  const $img = document.createElement('img');
  $img.src = 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif';

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = '100%';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = playerName.name;

  const $main = document.querySelector('.arenas');
  $main.appendChild($player);

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
  
  
}

createPlayer('player1.name', 'player1.hp', 'player1.img');
createPlayer('player2.name', 'player2.hp', 'player2.img');