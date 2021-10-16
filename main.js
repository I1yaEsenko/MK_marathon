const $main = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
$main.classList.add('arena'+Math.ceil(Math.random() * 5)); //рандомный фон арены

const player1 = {
  player: 1,
  name:'Sonya',
  hp:"100",
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


function randomizerHp() {  // рандомное число для уменьшения hp
  let hp = Math.ceil(Math.random() * 20);
  return hp;
}

function changeHp (player){ // Уменьшение здоровья
  const $playerLife = document.querySelector('.player'+ player.player +' .life');
  player.hp -= randomizerHp();
  $playerLife.style.width = player.hp + '%';
  if (player.hp < 0){
    player.hp = 0 ;
    $playerLife.style.width = 0 + '%';
    $randomButton.disabled = true
  }
} 

function playerWin(name){ // Победа
  const $winTitle = createElement('div', 'winTitle');
  $winTitle.innerText = name + ' WIN';
  return $winTitle;
}

function draw() { // Ничья
  const $drawTitle = createElement('div', 'drawTitle');
  $drawTitle.innerText = 'Draw!';
  return $drawTitle;
}

function compareHp (numberOne, numberTwo) { //Cравнение здоровья
  const $hpOne = document.querySelector('.player'+ numberOne.player +' .life');
  const $hpTwo = document.querySelector('.player'+ numberTwo.player +' .life');

  if (numberOne.hp > 0 && numberTwo.hp <= 0) {
      $main.appendChild(playerWin(numberOne.name));
  } else if (numberOne.hp <= 0 && numberTwo.hp > 0) {
      $main.appendChild(playerWin(numberTwo.name));
  } else if (numberOne.hp <= 0 && numberTwo.hp <= 0) {
      $main.appendChild(draw());
  }
}

$randomButton.addEventListener('click', function() {
  console.log('1st ' + player1.hp);
  console.log('2nd ' + player2.hp);
  changeHp(player1);
  changeHp(player2);
  compareHp (player1, player2);
})


$main.appendChild(createPlayer(player1));
$main.appendChild(createPlayer(player2));
 
