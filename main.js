const $main = document.querySelector('.arenas');

const player1 = {
  player: 1,
  name:'Sonya',
  hp:"40",
  img:'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon:['polearm', 'knife'],
  attack: function(name){
    console.log(name + '' + 'Fight ...' )
  }
};

const player2 = {
  player: 2,
  name:'LiuKang',
  hp:"100",
  img:'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon:['blade', 'shield'],
  attack: function(name){
    console.log(name + '' + 'Fight ...' )
  }
};

function createElement(tag, className){
    const $tag = document.createElement(tag);
    if (className){
      $tag.classList.add(className);

    }
    return $tag;
}

function createPlayer(playerObject){
  const $player = createElement('div', 'player'+playerObject.player);
  const $progressbar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
  const $img = createElement('img');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');

  $life.style.width = playerObject.hp + '%';
  $name.innerText = playerObject.name;
  $img.src = playerObject.img;

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
  return $player;
}


$main.appendChild(createPlayer(player1));
$main.appendChild(createPlayer(player2));
 
