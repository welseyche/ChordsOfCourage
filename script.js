let resources = {images:[
                         {id:"johnnie", src:"images/johnnie.PNG"},
                         {id:"johnnieready", src:"images/johnnieready.PNG"},
                         {id:"johnnieplay", src:"images/johnnieplay.PNG"},
                         {id:"johnnieplay2", src:"images/johnnieplay2.PNG"},
                         {id:"johnniehurt", src:"images/johnniehurt.PNG"},
                         {id:"battleportrait", src:"images/battleportrait.PNG"},
                         {id:"target", src:"images/target.PNG"},
                         {id:"logo", src:"images/logo.PNG"},
                         {id:"fretplains", src:"images/fretplains.PNG"},
                         {id:"deathforest", src:"images/deathforest.PNG"},
                         {id:"redinferno", src:"images/redinferno.PNG"},
                         {id:"voidofSilence", src:"images/void.PNG"},
                         {id:"button", src:"images/button.PNG"},
                         {id:"goblin", src:"images/goblin.PNG"},
                         {id:"goblinhurt", src:"images/goblinhurt.PNG"},
                         {id:"bluegoblin", src:"images/bluegoblin.PNG"},
                         {id:"bluegoblinhurt", src:"images/bluegoblinhurt.PNG"},
                         {id:"apollyon", src:"images/apollyon.PNG"},
                         {id:"apollyonhurt", src:"images/apollyonhurt.PNG"},
                         {id:"abaddon", src:"images/abaddon.PNG"},
                         {id:"abaddonhurt", src:"images/abaddonhurt.PNG"},
                  ],       
                 audios:[ 
                         {id: "chordsound", src: "audios/chordsound.m4a"},
                  ]
                };

function preload(){
  game = new Game("game");
  game.preload(resources);
  game.state = init;
  gameloop();
}
document.onload = preload();


function gameloop(){
  game.processInput();
  if(game.ready){
    game.state();
  }
  game.update();
  setTimeout(gameloop, 10);
}

function init() {
  johnnie = new Sprite(game.images.johnnie, game);
  johnnie.scale = 0.0625;

  johnnieready = new Sprite(game.images.johnnieready, game);
  johnnieready.scale = 0.0625;

  johnnieplay = new Sprite(game.images.johnnieplay, game);
  johnnieplay.scale = 0.0625;

  johnnieplay2 = new Sprite(game.images.johnnieplay2, game);
  johnnieplay2.scale = 0.0625;

  johnniehurt = new Sprite(game.images.johnniehurt, game);
  johnniehurt.scale = 0.0625;

  battleportrait = new Sprite(game.images.battleportrait, game);
  battleportrait.scale = 0.4;

  target = new Sprite(game.images.target, game);

  logo = new Sprite(game.images.logo, game);

  fretplains = new Sprite(game.images.fretplains, game);

  deathforest = new Sprite(game.images.deathforest, game);

  redinferno = new Sprite(game.images.redinferno, game);

  voidofSilence = new Sprite(game.images.voidofSilence, game);
  game.setBackground(voidofSilence);

  goblin = new Sprite(game.images.goblin, game);
  goblin.scale = 0.08;

  goblinhurt = new Sprite(game.images.goblinhurt, game);
  goblinhurt.scale = 0.08;

  bluegoblin = new Sprite(game.images.bluegoblin, game);
  bluegoblin.scale = 0.08;

  bluegoblinhurt = new Sprite(game.images.bluegoblinhurt, game);
  bluegoblinhurt.scale = 0.08;

  apollyon = new Sprite(game.images.apollyon, game);
  apollyon.scale = 0.2;

  apollyonhurt = new Sprite(game.images.apollyonhurt, game);
  apollyonhurt.scale = 0.2;

  abaddon = new Sprite(game.images.abaddon, game);
  abaddon.scale = 0.275;

  abaddonhurt = new Sprite(game.images.abaddonhurt, game);
  abaddonhurt.scale = 0.275;

  chord = new Sprite(game.images.button, game);
  chord.scale = 0.5;

  technique = new Sprite(game.images.button, game);
  technique.scale = 0.5;

  firesolo = new Sprite(game.images.button, game);
  firesolo.scale = 0.5;

  coolicebeat = new Sprite(game.images.button, game);
  coolicebeat.scale = 0.5;

  improvisedcure = new Sprite(game.images.button, game);
  improvisedcure.scale = 0.5;

  back = new Sprite(game.images.button, game);
  back.scale = 0.5;

  chordsound = new Sound(game.audios.chordsound);

  e = new Font("12pt", "Arial", "white", "black");
  f = new Font("12pt", "Arial", "black");
  g = new Font("16pt", "Arial", "white", "black");
  h = new Font("32pt", "Arial", "white", "black");
  i = new Font("30pt", "Impact", "black", "white")

  game.state = startScreen;
}

function startScreen() {
  logo.draw()
  game.drawText("Click the left mouse button to begin", game.width / 2 - 180, game.height - 580, g)
  if(mouse.leftClick) {
    game.state = backstory
  }
}

function backstory() {
  fretplains.draw()
  
  game.drawText("Click the left mouse button to begin", game.width / 2 - 180, game.height - 580, g)

  game.drawText("Fret Plains", 360, 80, i)

  game.drawText("Johnnie Rockington was quite a prodigy at the", 10, 120, h)
  game.drawText("guitar. However, he had the ability to destroy", 10, 170, h)
  game.drawText("objects, with the process differing each style he", 10, 220, h)
  game.drawText("plays. One day, monsters started appearing and", 10, 270, h)
  game.drawText("terrorizing people around the world. Johnnie", 10, 320, h)
  game.drawText("learns from an old monk that these monsters", 10, 370, h)
  game.drawText("came from the underworld. Johnnie, with a sense", 10, 420, h)
  game.drawText("of justice, begins his journey to destroy the", 10, 470, h)
  game.drawText("ruler of the underworld. The monk gave him a badge", 10, 520, h)
  game.drawText("for good luck. And thus, he was off on his way.", 10, 570, h)
  if(mouse.leftClick) {
    game.state = level1
  }
}

function level1() {
  fretplains.draw()
  johnnie.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)

  goblin.moveTo(620, 300)
  game.drawText(goblin.health, goblin.x, goblin.y - 100, e)

  battleportrait.moveTo(125, 475)

  game.drawText("Click either the chord button or the technique button", game.width / 2 - 250, game.height - 580, g)

  chord.moveTo(280, 410)
  game.drawText("Chord", game.width / 2 - 222, game.height - 190, f)

  technique.moveTo(280, 550)
  game.drawText("Technique", game.width / 2 - 235, game.height - 45, f)

  if(chord.collidedWith(mouse) && mouse.leftClick) {
    game.state = chordtarget
  }

  if(technique.collidedWith(mouse) && mouse.leftClick) {
    game.state = techniques
  }
}

function techniques() {
  fretplains.draw()
  johnnie.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)

  goblin.moveTo(620, 300)
  game.drawText(goblin.health, goblin.x, goblin.y - 100, e)

  battleportrait.moveTo(125, 475)

  game.drawText("Click one of the techniques that you want to use", game.width / 2 - 230, game.height - 580, g)

  firesolo.moveTo(280, 550)
  game.drawText("Fire Solo", game.width / 2 - 233, game.height - 45, f)

  coolicebeat.moveTo(400, 550)
  game.drawText("Cool Ice", game.width / 2 - 111, game.height - 55, f)
  game.drawText("Beat", game.width / 2 - 100, game.height - 35, f)
  
  improvisedcure.moveTo(520, 550)
  game.drawText("Improvised", game.width / 2, game.height - 55, f)
  game.drawText("Cure", game.width / 2 + 20, game.height - 35, f)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  if(firesolo.collidedWith(mouse) && mouse.leftClick) {
    game.state = firetarget
  }

  if(coolicebeat.collidedWith(mouse) && mouse.leftClick) {
    game.state = icetarget
  }

  if(improvisedcure.collidedWith(mouse) && mouse.leftClick) {
    game.state = curetarget
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = level1
  }
}

function chordtarget() {  
  fretplains.draw()
  johnnieready.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)

  target.moveTo(goblin.x, goblin.y - 150)
  goblin.moveTo(620, 300)
  game.drawText(goblin.health, goblin.x, goblin.y - 100, e)

  game.drawText("Click on the enemy you want to target", game.width / 2 - 190, game.height - 580, g)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  battleportrait.moveTo(125, 475)

  if(goblin.collidedWith(mouse) && mouse.leftClick) {
    game.state = chordready;
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = level1
  }
}

function firetarget() {  
  fretplains.draw()
  johnnieready.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)

  target.moveTo(goblin.x, goblin.y - 150)
  goblin.moveTo(620, 300)
  game.drawText(goblin.health, goblin.x, goblin.y - 100, e)

  game.drawText("Click on the enemy you want to target", game.width / 2 - 190, game.height - 580, g)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  battleportrait.moveTo(125, 475)

  if(goblin.collidedWith(mouse) && mouse.leftClick) {
    game.state = fireready;
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = techniques
  }
}

function icetarget() {  
  fretplains.draw()
  johnnieready.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)

  target.moveTo(goblin.x, goblin.y - 150)
  goblin.moveTo(620, 300)
  game.drawText(goblin.health, goblin.x, goblin.y - 100, e)

  game.drawText("Click on the enemy you want to target", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  if(goblin.collidedWith(mouse) && mouse.leftClick) {
    game.state = iceready;
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = techniques
  }
}

function curetarget() {  
  fretplains.draw()
  johnnieready.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)
  target.moveTo(johnnie.x - 20, johnnie.y - 150)

  goblin.moveTo(620, 300)
  game.drawText(goblin.health, goblin.x, goblin.y - 100, e)

  game.drawText("Click on the target you want to cure", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  if(johnnie.collidedWith(mouse) && mouse.leftClick) {
    game.state = cureready;
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = techniques
  }
}

function chordready() {
  fretplains.draw()
  johnnieplay.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay.x, johnnieplay.y - 100, e)

  goblin.moveTo(620, 300)
  game.drawText(goblin.health, goblin.x, goblin.y - 100, e)

  game.drawText("Click anywhere to attack your enemy", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    goblin.health -= 21
    game.state = attack
    chordsound.play()
    if(goblin.health <= 0) {
      game.state = gameOver1
    }
  }
}

function fireready() {
  fretplains.draw()
  johnnieplay.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay.x, johnnieplay.y - 100, e)

  goblin.moveTo(620, 300)
  game.drawText(goblin.health, goblin.x, goblin.y - 100, e)

  game.drawText("Click anywhere to attack your enemy", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    goblin.health -= 30
    game.state = attack
    chordsound.play()
    if(goblin.health <= 0) {
      game.state = gameOver1
    }
  }
}

function iceready() {
  fretplains.draw()
  johnnieplay.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay.x, johnnieplay.y - 100, e)

  goblin.moveTo(620, 300)
  game.drawText(goblin.health, goblin.x, goblin.y - 100, e)

  game.drawText("Click anywhere to attack your enemy", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    goblin.health -= 48
    game.state = weak
    chordsound.play()
    if(goblin.health <= 0) {
      game.state = gameOver1
    }
  }
}

function cureready() {
  fretplains.draw()
  johnnieplay.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay.x, johnnieplay.y - 100, e)

  goblin.moveTo(620, 300)
  game.drawText(goblin.health, goblin.x, goblin.y - 100, e)

  game.drawText("Click anywhere to cure yourself", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    johnnie.health += 38
    chordsound.play()
    game.state = cure
  }
}

function attack() {
  fretplains.draw()
  johnnieplay2.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay2.x, johnnieplay2.y - 100, e)
  
  goblinhurt.moveTo(630, 300)
  game.drawText(goblin.health, goblinhurt.x, goblinhurt.y - 100, e)

  game.drawText("Click anywhere for the enemy's turn", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    game.state = enemyturn
  }
}

function weak() {
  fretplains.draw()
  johnnieplay2.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay2.x, johnnieplay2.y - 100, e)
  
  goblinhurt.moveTo(630, 300)
  game.drawText(goblin.health, goblinhurt.x, goblinhurt.y - 100, e)
  game.drawText("WEAK", goblinhurt.x, goblinhurt.y - 150, g)

  game.drawText("Click anywhere for the enemy's turn", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    game.state = enemyturn
  }
}

function cure() {
  fretplains.draw()
  johnnieplay2.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay2.x, johnnieplay2.y - 100, e)

  goblin.moveTo(620, 300)
  game.drawText(goblin.health, goblin.x, goblin.y - 100, e)

  game.drawText("Click anywhere for the enemy's turn", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    game.state = enemyturn
  }
}

function enemyturn() {
  fretplains.draw()
  johnnie.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)
  
  goblin.moveTo(620, 300)
  game.drawText(goblin.health, goblin.x, goblin.y - 100, e)

  game.drawText("Click anywhere to see the enemy attack", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    johnnie.health -= 36
    game.state = enemyattack
    if(johnnie.health <= 0) {
      game.state = gameOver1
    }
  }
}

function enemyattack() {  
  fretplains.draw()
  johnniehurt.moveTo(290, 290)
  game.drawText(johnnie.health, johnniehurt.x, johnniehurt.y - 100, e)

  goblin.moveTo(420, 300)
  game.drawText(goblin.health, goblin.x, goblin.y - 100, e)

  game.drawText("Click anywhere for your turn again", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    game.state = level1
  }
}

function gameOver1() {
  game.scrollBackground("left", 0)

  if(goblin.health <= 0) {
    game.drawText("You Win", game.width / 2 - 190, game.height / 2 - 100, new Font("70pt", "Arial", "green", "white"))
    game.drawText("Click the left mouse button to continue the story.", game.width / 2 - 230, game.height - 580, g)
    if(mouse.leftClick) {
      game.state = cutscene1
    }
  }
  else if(johnnie.health <= 0) {
    game.drawText("You Lose", game.width / 2 - 190, game.height / 2 - 100,new Font("70pt", "Arial", "red", "white"))
    game.drawText("Click the left mouse button to return to the start screen.", game.width / 2 - 230, game.height - 580, g)
    if(mouse.leftClick){
      location.reload()
    }
  }
}

function cutscene1() {
  deathforest.draw()
  
  game.drawText("Click the left mouse button to begin", game.width / 2 - 180, game.height - 580, g)

  game.drawText("Death Forest", 360, 80, i)
  
  game.drawText("Johnnie made his way to Death Forest. Those", 10, 120, h)
  game.drawText("who have walked through this wretched forest", 10, 170, h)
  game.drawText("have been known to disappear. The only problem", 10, 220, h)
  game.drawText("is that going through Death Forest is the only", 10, 270, h)
  game.drawText("way Johnnie can make his way to the underworld.", 10, 320, h)

  if(mouse.leftClick) {
      game.state = level2
      johnnie.health = 100
    }
}

function level2() {
  deathforest.draw()
  johnnie.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)

  bluegoblin.moveTo(620, 300)
  game.drawText(bluegoblin.health, bluegoblin.x, bluegoblin.y - 100, e)

  battleportrait.moveTo(125, 475)

  game.drawText("Click either the chord button or the technique button", game.width / 2 - 250, game.height - 580, g)

  chord.moveTo(280, 410)
  game.drawText("Chord", game.width / 2 - 222, game.height - 190, f)

  technique.moveTo(280, 550)
  game.drawText("Technique", game.width / 2 - 235, game.height - 45, f)

  if(chord.collidedWith(mouse) && mouse.leftClick) {
    game.state = chordtarget2
  }

  if(technique.collidedWith(mouse) && mouse.leftClick) {
    game.state = techniques2
  }
}

function techniques2() {
  deathforest.draw()
  johnnie.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)

  bluegoblin.moveTo(620, 300)
  game.drawText(bluegoblin.health, bluegoblin.x, bluegoblin.y - 100, e)

  battleportrait.moveTo(125, 475)

  game.drawText("Click one of the techniques that you want to use", game.width / 2 - 230, game.height - 580, g)

  firesolo.moveTo(280, 550)
  game.drawText("Fire Solo", game.width / 2 - 233, game.height - 45, f)

  coolicebeat.moveTo(400, 550)
  game.drawText("Cool Ice", game.width / 2 - 111, game.height - 55, f)
  game.drawText("Beat", game.width / 2 - 100, game.height - 35, f)
  
  improvisedcure.moveTo(520, 550)
  game.drawText("Improvised", game.width / 2, game.height - 55, f)
  game.drawText("Cure", game.width / 2 + 20, game.height - 35, f)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  if(firesolo.collidedWith(mouse) && mouse.leftClick) {
    game.state = firetarget2
  }

  if(coolicebeat.collidedWith(mouse) && mouse.leftClick) {
    game.state = icetarget2
  }

  if(improvisedcure.collidedWith(mouse) && mouse.leftClick) {
    game.state = curetarget2
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = level2
  }
}

function chordtarget2() {  
  deathforest.draw()
  johnnieready.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)

  target.moveTo(bluegoblin.x, bluegoblin.y - 150)
  bluegoblin.moveTo(620, 300)
  game.drawText(bluegoblin.health, bluegoblin.x, bluegoblin.y - 100, e)

  game.drawText("Click on the enemy you want to target", game.width / 2 - 190, game.height - 580, g)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  battleportrait.moveTo(125, 475)

  if(bluegoblin.collidedWith(mouse) && mouse.leftClick) {
    game.state = chordready2;
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = level2
  }
}

function firetarget2() {  
  deathforest.draw()
  johnnieready.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)

  target.moveTo(bluegoblin.x, bluegoblin.y - 150)
  bluegoblin.moveTo(620, 300)
  game.drawText(bluegoblin.health, bluegoblin.x, bluegoblin.y - 100, e)

  game.drawText("Click on the enemy you want to target", game.width / 2 - 190, game.height - 580, g)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  battleportrait.moveTo(125, 475)

  if(bluegoblin.collidedWith(mouse) && mouse.leftClick) {
    game.state = fireready2;
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = techniques2
  }
}

function icetarget2() {  
  deathforest.draw()
  johnnieready.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)

  target.moveTo(bluegoblin.x, bluegoblin.y - 150)
  bluegoblin.moveTo(620, 300)
  game.drawText(bluegoblin.health, bluegoblin.x, bluegoblin.y - 100, e)

  game.drawText("Click on the enemy you want to target", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  if(bluegoblin.collidedWith(mouse) && mouse.leftClick) {
    game.state = iceready2;
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = techniques2
  }
}

function curetarget2() {  
  deathforest.draw()
  johnnieready.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)
  target.moveTo(johnnie.x - 20, johnnie.y - 150)

  bluegoblin.moveTo(620, 300)
  game.drawText(bluegoblin.health, bluegoblin.x, bluegoblin.y - 100, e)

  game.drawText("Click on the target you want to cure", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  if(johnnie.collidedWith(mouse) && mouse.leftClick) {
    game.state = cureready2;
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = techniques2
  }
}

function chordready2() {
  deathforest.draw()
  johnnieplay.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay.x, johnnieplay.y - 100, e)

  bluegoblin.moveTo(620, 300)
  game.drawText(bluegoblin.health, bluegoblin.x, bluegoblin.y - 100, e)

  game.drawText("Click anywhere to attack your enemy", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    bluegoblin.health -= 18
    game.state = attack2
    chordsound.play()
    if(bluegoblin.health <= 0) {
      game.state = gameOver2
    }
  }
}

function fireready2() {
  deathforest.draw()
  johnnieplay.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay.x, johnnieplay.y - 100, e)

  bluegoblin.moveTo(620, 300)
  game.drawText(bluegoblin.health, bluegoblin.x, bluegoblin.y - 100, e)

  game.drawText("Click anywhere to attack your enemy", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    bluegoblin.health -= 38
    game.state = weak2
    chordsound.play()
    if(bluegoblin.health <= 0) {
      game.state = gameOver2
    }
  }
}

function iceready2() {
  deathforest.draw()
  johnnieplay.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay.x, johnnieplay.y - 100, e)

  bluegoblin.moveTo(620, 300)
  game.drawText(bluegoblin.health, bluegoblin.x, bluegoblin.y - 100, e)

  game.drawText("Click anywhere to attack your enemy", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    bluegoblin.health -= 27
    game.state = attack2
    chordsound.play()
    if(bluegoblin.health <= 0) {
      game.state = gameOver2
    }
  }
}

function cureready2() {
  deathforest.draw()
  johnnieplay.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay.x, johnnieplay.y - 100, e)

  bluegoblin.moveTo(620, 300)
  game.drawText(bluegoblin.health, bluegoblin.x, bluegoblin.y - 100, e)

  game.drawText("Click anywhere to cure yourself", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    johnnie.health += 44
    chordsound.play()
    game.state = cure2
  }
}

function attack2() {
  deathforest.draw()
  johnnieplay2.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay2.x, johnnieplay2.y - 100, e)
  
  bluegoblinhurt.moveTo(630, 300)
  game.drawText(bluegoblin.health, bluegoblinhurt.x, bluegoblinhurt.y - 100, e)

  game.drawText("Click anywhere for the enemy's turn", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    game.state = enemyturn2
  }
}

function weak2() {
  deathforest.draw()
  johnnieplay2.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay2.x, johnnieplay2.y - 100, e)
  
  bluegoblinhurt.moveTo(630, 300)
  game.drawText(bluegoblin.health, bluegoblinhurt.x, bluegoblinhurt.y - 100, e)
  game.drawText("WEAK", bluegoblinhurt.x, bluegoblinhurt.y - 150, g)

  game.drawText("Click anywhere for the enemy's turn", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    game.state = enemyturn2
  }
}

function cure2() {
  deathforest.draw()
  johnnieplay2.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay2.x, johnnieplay2.y - 100, e)

  bluegoblin.moveTo(620, 300)
  game.drawText(bluegoblin.health, bluegoblin.x, bluegoblin.y - 100, e)

  game.drawText("Click anywhere for the enemy's turn", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    game.state = enemyturn2
  }
}

function enemyturn2() {
  deathforest.draw()
  johnnie.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)
  
  bluegoblin.moveTo(620, 300)
  game.drawText(bluegoblin.health, bluegoblin.x, bluegoblin.y - 100, e)

  game.drawText("Click anywhere to see the enemy attack", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    johnnie.health -= 41
    game.state = enemyattack2
    if(johnnie.health <= 0) {
      game.state = gameOver2
    }
  }
}

function enemyattack2() {  
  deathforest.draw()
  johnniehurt.moveTo(290, 290)
  game.drawText(johnnie.health, johnniehurt.x, johnniehurt.y - 100, e)

  bluegoblin.moveTo(420, 300)
  game.drawText(bluegoblin.health, bluegoblin.x, bluegoblin.y - 100, e)

  game.drawText("Click anywhere for your turn again", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    game.state = level2
  }
}

function gameOver2() {
  game.scrollBackground("left", 0)

  if(bluegoblin.health <= 0) {
    game.drawText("You Win", game.width / 2 - 190, game.height / 2 - 100, new Font("70pt", "Arial", "green", "white"))
    game.drawText("Click the left mouse button to continue the story.", game.width / 2 - 230, game.height - 580, g)
    if(mouse.leftClick) {
      game.state = cutscene2
    }
  }
  else if(johnnie.health <= 0) {
    game.drawText("You Lose", game.width / 2 - 190, game.height / 2 - 100,new Font("70pt", "Arial", "red", "white"))
    game.drawText("Click the left mouse button to return to the start screen.", game.width / 2 - 230, game.height - 580, g)
    if(mouse.leftClick){
      location.reload()
    }
  }
}

function cutscene2() {
  redinferno.draw()

  game.drawText("Click the left mouse button to continue", game.width / 2 - 180, game.height - 580, g)

  game.drawText("Red Inferno", 360, 80, i)
  
  game.drawText("After escaping through Death Forest, Johnnie", 10, 120, h)
  game.drawText("finally made his way to the underworld, where", 10, 170, h)
  game.drawText("he meets a tall, handsome entity with long hair.", 10, 220, h)
  game.drawText("This man was Apollyon, the ruler of the", 10, 270, h)
  game.drawText("underworld. He reveals that Johnnie is the", 10, 320, h)
  game.drawText("descendent of the Chitara Clan, whose music", 10, 370, h)
  game.drawText("brought peace and creativity to mortal humans.", 10, 420, h)
  game.drawText("However, Apollyon wanted eternal silence on", 10, 470, h)
  game.drawText("Earth, and thus war has waged between the", 10, 520, h)
  game.drawText("Chitara and Apollyon...", 10, 570, h)

  if(mouse.leftClick) {
    game.state = cutscene3
  }
}

function cutscene3() {
  redinferno.draw()

  game.drawText("Click the left mouse button to begin", game.width / 2 - 180, game.height - 580, g)

  game.drawText("Red Inferno", 360, 80, i)
  
  game.drawText("The Chitara were almost eradicated by Apollyon's", 10, 120, h)
  game.drawText("demon army, but those remaining managed to", 10, 170, h)
  game.drawText("banish Apollyon to the underworld. Over time,", 10, 220, h)
  game.drawText("Apollyon was slowly regaining his strength,", 10, 270, h)
  game.drawText("so that his goal of eternal silence can finally", 10, 320, h)
  game.drawText("be realized, and all peace and creativity will", 10, 370, h)
  game.drawText("be destroyed. Back in the present, Johnnie, with", 10, 420, h)
  game.drawText("his heart of courage, will accomplish what his ", 10, 470, h)
  game.drawText("ancestors never completed: the destruction of", 10, 520, h)
  game.drawText("Apollyon forever...", 10, 570, h)

  if(mouse.leftClick) {
    game.state = level3
    johnnie.health = 100
  }
}

function level3() {
  redinferno.draw()
  johnnie.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)

  apollyon.moveTo(620, 250)
  game.drawText(apollyon.health, apollyon.x, apollyon.y - 100, e)

  battleportrait.moveTo(125, 475)

  game.drawText("Click either the chord button or the technique button", game.width / 2 - 250, game.height - 580, g)

  chord.moveTo(280, 410)
  game.drawText("Chord", game.width / 2 - 222, game.height - 190, f)

  technique.moveTo(280, 550)
  game.drawText("Technique", game.width / 2 - 235, game.height - 45, f)

  if(chord.collidedWith(mouse) && mouse.leftClick) {
    game.state = chordtarget3
  }

  if(technique.collidedWith(mouse) && mouse.leftClick) {
    game.state = techniques3
  }
}

function techniques3() {
  redinferno.draw()
  johnnie.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)

  apollyon.moveTo(620, 250)
  game.drawText(apollyon.health, apollyon.x, apollyon.y - 100, e)

  battleportrait.moveTo(125, 475)

  game.drawText("Click one of the techniques that you want to use", game.width / 2 - 230, game.height - 580, g)

  firesolo.moveTo(280, 550)
  game.drawText("Fire Solo", game.width / 2 - 233, game.height - 45, f)

  coolicebeat.moveTo(400, 550)
  game.drawText("Cool Ice", game.width / 2 - 111, game.height - 55, f)
  game.drawText("Beat", game.width / 2 - 100, game.height - 35, f)
  
  improvisedcure.moveTo(520, 550)
  game.drawText("Improvised", game.width / 2, game.height - 55, f)
  game.drawText("Cure", game.width / 2 + 20, game.height - 35, f)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  if(firesolo.collidedWith(mouse) && mouse.leftClick) {
    game.state = firetarget3
  }

  if(coolicebeat.collidedWith(mouse) && mouse.leftClick) {
    game.state = icetarget3
  }

  if(improvisedcure.collidedWith(mouse) && mouse.leftClick) {
    game.state = curetarget3
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = level3
  }
}

function chordtarget3() {  
  redinferno.draw()
  johnnieready.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)

  apollyon.moveTo(620, 250)
  game.drawText(apollyon.health, apollyon.x, apollyon.y - 100, e)
  target.moveTo(apollyon.x, apollyon.y - 150)

  game.drawText("Click on the enemy you want to target", game.width / 2 - 190, game.height - 580, g)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  battleportrait.moveTo(125, 475)

  if(apollyon.collidedWith(mouse) && mouse.leftClick) {
    game.state = chordready3;
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = level3
  }
}

function firetarget3() {  
  redinferno.draw()
  johnnieready.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)

  apollyon.moveTo(620, 250)
  game.drawText(apollyon.health, apollyon.x, apollyon.y - 100, e)
  target.moveTo(apollyon.x, apollyon.y - 150)

  game.drawText("Click on the enemy you want to target", game.width / 2 - 190, game.height - 580, g)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  battleportrait.moveTo(125, 475)

  if(apollyon.collidedWith(mouse) && mouse.leftClick) {
    game.state = fireready3;
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = techniques3
  }
}

function icetarget3() {  
  redinferno.draw()
  johnnieready.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)

  apollyon.moveTo(620, 250)
  game.drawText(apollyon.health, apollyon.x, apollyon.y - 100, e)
  target.moveTo(apollyon.x, apollyon.y - 150)

  game.drawText("Click on the enemy you want to target", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  if(apollyon.collidedWith(mouse) && mouse.leftClick) {
    game.state = iceready3;
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = techniques3
  }
}

function curetarget3() {  
  redinferno.draw()
  johnnieready.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)
  target.moveTo(johnnie.x - 20, johnnie.y - 150)

  apollyon.moveTo(620, 250)
  game.drawText(apollyon.health, apollyon.x, apollyon.y - 100, e)

  game.drawText("Click on the target you want to cure", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  if(johnnie.collidedWith(mouse) && mouse.leftClick) {
    game.state = cureready3;
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = techniques3
  }
}

function chordready3() {
  redinferno.draw()
  johnnieplay.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay.x, johnnieplay.y - 100, e)

  apollyon.moveTo(620, 250)
  game.drawText(apollyon.health, apollyon.x, apollyon.y - 100, e)

  game.drawText("Click anywhere to attack your enemy", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    apollyon.health -= 11
    game.state = attack3
    chordsound.play()
    if(apollyon.health <= 0) {
      game.state = gameOver3
    }
  }
}

function fireready3() {
  redinferno.draw()
  johnnieplay.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay.x, johnnieplay.y - 100, e)

  apollyon.moveTo(620, 250)
  game.drawText(apollyon.health, apollyon.x, apollyon.y - 100, e)

  game.drawText("Click anywhere to attack your enemy", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    apollyon.health -= 20
    game.state = attack3
    chordsound.play()
    if(apollyon.health <= 0) {
      game.state = gameOver3
    }
  }
}

function iceready3() {
  redinferno.draw()
  johnnieplay.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay.x, johnnieplay.y - 100, e)

  apollyon.moveTo(620, 250)
  game.drawText(apollyon.health, apollyon.x, apollyon.y - 100, e)

  game.drawText("Click anywhere to attack your enemy", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    apollyon.health -= 20
    game.state = attack3
    chordsound.play()
    if(apollyon.health <= 0) {
      game.state = gameOver3
    }
  }
}

function cureready3() {
  redinferno.draw()
  johnnieplay.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay.x, johnnieplay.y - 100, e)

  apollyon.moveTo(620, 250)
  game.drawText(apollyon.health, apollyon.x, apollyon.y - 100, e)

  game.drawText("Click anywhere to cure yourself", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    johnnie.health += 48
    chordsound.play()
    game.state = cure3
  }
}

function attack3() {
  redinferno.draw()
  johnnieplay2.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay2.x, johnnieplay2.y - 100, e)
  
  apollyonhurt.moveTo(630, 250)
  game.drawText(apollyon.health, apollyonhurt.x, apollyonhurt.y - 100, e)

  game.drawText("Click anywhere for the enemy's turn", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    game.state = enemyturn3
  }
}

function cure3() {
  redinferno.draw()
  johnnieplay2.moveTo(500, 290)
  game.drawText(johnnie.health, johnnieplay2.x, johnnieplay2.y - 100, e)

  apollyon.moveTo(620, 250)
  game.drawText(apollyon.health, apollyon.x, apollyon.y - 100, e)

  game.drawText("Click anywhere for the enemy's turn", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    game.state = enemyturn3
  }
}

function enemyturn3() {
  redinferno.draw()
  johnnie.moveTo(300, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)
  
  apollyon.moveTo(620, 250)
  game.drawText(apollyon.health, apollyon.x, apollyon.y - 100, e)

  game.drawText("Click anywhere to see the enemy attack", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    johnnie.health -= 34
    game.state = enemyattack3
    if(johnnie.health <= 0) {
      game.state = gameOver3
    }
  }
}

function enemyattack3() {  
  redinferno.draw()
  johnniehurt.moveTo(290, 290)
  game.drawText(johnnie.health, johnniehurt.x, johnniehurt.y - 100, e)

  apollyon.moveTo(420, 250)
  game.drawText(apollyon.health, apollyon.x, apollyon.y - 100, e)

  game.drawText("Click anywhere for your turn again", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    game.state = level3
  }
}

function gameOver3() {
  game.scrollBackground("left", 0)

  if(apollyon.health <= 0) {
    game.drawText("You Win", game.width / 2 - 190, game.height / 2 - 100, new Font("70pt", "Arial", "green", "white"))
    game.drawText("Click the left mouse button to continue the story.", game.width / 2 - 230, game.height - 580, g)
    if(mouse.leftClick) {
      game.state = cutscene4
    }
  }
  else if(johnnie.health <= 0) {
    game.drawText("You Lose", game.width / 2 - 190, game.height / 2 - 100,new Font("70pt", "Arial", "red", "white"))
    game.drawText("Click the left mouse button to return to the start screen.", game.width / 2 - 230, game.height - 580, g)
    if(mouse.leftClick){
      location.reload()
    }
  }
}

function cutscene4() {
  game.scrollBackground("left", 0)

  game.drawText("Click the left mouse button to begin", game.width / 2 - 180, game.height - 580, g)

  game.drawText("??????????", 360, 80, i)
  
  game.drawText("After playing the last note, Johnnie saw the", 10, 120, h)
  game.drawText("area around them crumbling down, revealing an", 10, 170, h)
  game.drawText("dark abyss beneath them. The two fell down", 10, 220, h)
  game.drawText("into the abyss. In that abyss, Johnnie saw", 10, 270, h)
  game.drawText("Apollyon, but he looks different. The demon", 10, 320, h)
  game.drawText("lord said, 'I am Abaddon, the true form of", 10, 370, h)
  game.drawText("hatred. I was the form which brought death", 10, 420, h)
  game.drawText("and despair to your kind centuries ago. Now,", 10, 470, h)
  game.drawText("I shall end the legacy of the Chitara, with", 10, 520, h)
  game.drawText("your death.'", 10, 570, h)

  if(mouse.leftClick) {
    game.state = level4
    johnnie.health = 100
  }
}

function level4(){
  game.scrollBackground("left", 25)
  johnnie.scale = 0.03
  johnnie.moveTo(200, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)

  abaddon.moveTo(700, 300)
  game.drawText(abaddon.health, abaddon.x, abaddon.y - 100, e)

  game.drawText("Click either the chord button or the technique button", game.width / 2 - 250, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  chord.moveTo(280, 410)
  game.drawText("Chord", game.width / 2 - 222, game.height - 190, f)

  technique.moveTo(280, 550)
  game.drawText("Technique", game.width / 2 - 235, game.height - 45, f)

  if(chord.collidedWith(mouse) && mouse.leftClick) {
    game.state = chordtarget4
  }

  if(technique.collidedWith(mouse) && mouse.leftClick) {
    game.state = techniques4
  }
}

function techniques4() {
  game.scrollBackground("left", 25)
  johnnie.scale = 0.03
  johnnie.moveTo(200, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)

  abaddon.moveTo(700, 300)
  game.drawText(abaddon.health, abaddon.x, abaddon.y - 100, e)

  battleportrait.moveTo(125, 475)

  game.drawText("Click one of the techniques that you want to use", game.width / 2 - 230, game.height - 580, g)

  firesolo.moveTo(280, 550)
  game.drawText("Fire Solo", game.width / 2 - 233, game.height - 45, f)

  coolicebeat.moveTo(400, 550)
  game.drawText("Cool Ice", game.width / 2 - 111, game.height - 55, f)
  game.drawText("Beat", game.width / 2 - 100, game.height - 35, f)
  
  improvisedcure.moveTo(520, 550)
  game.drawText("Improvised", game.width / 2, game.height - 55, f)
  game.drawText("Cure", game.width / 2 + 20, game.height - 35, f)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  if(firesolo.collidedWith(mouse) && mouse.leftClick) {
    game.state = firetarget4
  }

  if(coolicebeat.collidedWith(mouse) && mouse.leftClick) {
    game.state = icetarget4
  }

  if(improvisedcure.collidedWith(mouse) && mouse.leftClick) {
    game.state = curetarget4
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = level4
  }
}

function chordtarget4() {  
  game.scrollBackground("left", 25)
  johnnieready.scale = 0.03
  johnnieready.moveTo(200, 290)
  game.drawText(johnnie.health, johnnieready.x, johnnieready.y - 100, e)

  abaddon.moveTo(700, 300)
  game.drawText(abaddon.health, abaddon.x, abaddon.y - 100, e)
  target.moveTo(abaddon.x, abaddon.y - 150)

  game.drawText("Click on the enemy you want to target", game.width / 2 - 190, game.height - 580, g)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  battleportrait.moveTo(125, 475)

  if(abaddon.collidedWith(mouse) && mouse.leftClick) {
    game.state = chordready4;
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = level4
  }
}

function firetarget4() {  
  game.scrollBackground("left", 25)
  johnnieready.scale = 0.03
  johnnieready.moveTo(200, 290)
  game.drawText(johnnie.health, johnnieready.x, johnnieready.y - 100, e)

  abaddon.moveTo(700, 300)
  game.drawText(abaddon.health, abaddon.x, abaddon.y - 100, e)
  target.moveTo(abaddon.x, abaddon.y - 150)

  game.drawText("Click on the enemy you want to target", game.width / 2 - 190, game.height - 580, g)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  battleportrait.moveTo(125, 475)

  if(abaddon.collidedWith(mouse) && mouse.leftClick) {
    game.state = fireready4;
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = techniques4
  }
}

function icetarget4() {  
  game.scrollBackground("left", 25)
  johnnieready.scale = 0.03
  johnnieready.moveTo(200, 290)
  game.drawText(johnnie.health, johnnieready.x, johnnieready.y - 100, e)

  abaddon.moveTo(700, 300)
  game.drawText(abaddon.health, abaddon.x, abaddon.y - 100, e)
  target.moveTo(abaddon.x, abaddon.y - 150)

  game.drawText("Click on the enemy you want to target", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  if(abaddon.collidedWith(mouse) && mouse.leftClick) {
    game.state = iceready4;
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = techniques4
  }
}

function curetarget4() {  
  game.scrollBackground("left", 25)
  johnnieready.scale = 0.03
  johnnieready.moveTo(200, 290)
  game.drawText(johnnie.health, johnnieready.x, johnnieready.y - 100, e)
  target.moveTo(johnnie.x - 10, johnnie.y - 100)

  abaddon.moveTo(700, 300)
  game.drawText(abaddon.health, abaddon.x, abaddon.y - 100, e)

  game.drawText("Click on the target you want to cure", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  back.moveTo(100, 100)
  game.drawText("Back", game.width / 2 - 400, game.height - 497, f)

  if(johnnie.collidedWith(mouse) && mouse.leftClick) {
    game.state = cureready4;
  }

  if(back.collidedWith(mouse) && mouse.leftClick) {
    game.state = techniques4
  }
}

function chordready4() {
  game.scrollBackground("left", 25)
  johnnieplay.scale = 0.03
  johnnieplay.moveTo(250, 290)
  game.drawText(johnnie.health, johnnieplay.x, johnnieplay.y - 100, e)

  abaddon.moveTo(700, 300)
  game.drawText(abaddon.health, abaddon.x, abaddon.y - 100, e)

  game.drawText("Click anywhere to attack your enemy", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    abaddon.health -= 8
    game.state = attack4
    chordsound.play()
    if(abaddon.health <= 0) {
      game.state = ending
    }
  }
}

function fireready4() {
  game.scrollBackground("left", 25)
  johnnieplay.scale = 0.03
  johnnieplay.moveTo(250, 290)
  game.drawText(johnnie.health, johnnieplay.x, johnnieplay.y - 100, e)

  abaddon.moveTo(700, 300)
  game.drawText(abaddon.health, abaddon.x, abaddon.y - 100, e)

  game.drawText("Click anywhere to attack your enemy", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    abaddon.health -= 14
    game.state = attack4
    chordsound.play()
    if(abaddon.health <= 0) {
      game.state = ending
    }
  }
}

function iceready4() {
  game.scrollBackground("left", 25)
  johnnieplay.scale = 0.03
  johnnieplay.moveTo(250, 290)
  game.drawText(johnnie.health, johnnieplay.x, johnnieplay.y - 100, e)

  abaddon.moveTo(700, 300)
  game.drawText(abaddon.health, abaddon.x, abaddon.y - 100, e)

  game.drawText("Click anywhere to attack your enemy", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    abaddon.health -= 14
    game.state = attack4
    chordsound.play()
    if(abaddon.health <= 0) {
      game.state = ending
    }
  }
}

function cureready4() {
  game.scrollBackground("left", 25)
  johnnieplay.scale = 0.03
  johnnieplay.moveTo(250, 290)
  game.drawText(johnnie.health, johnnieplay.x, johnnieplay.y - 100, e)

  abaddon.moveTo(700, 300)
  game.drawText(abaddon.health, abaddon.x, abaddon.y - 100, e)

  game.drawText("Click anywhere to cure yourself", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    johnnie.health += 52
    chordsound.play()
    game.state = cure4
  }
}

function attack4() {
  game.scrollBackground("left", 25)
  johnnieplay2.scale = 0.03
  johnnieplay2.moveTo(250, 290)
  game.drawText(johnnie.health, johnnieplay2.x, johnnieplay2.y - 100, e)
  
  abaddonhurt.moveTo(705, 300)
  game.drawText(abaddon.health, abaddonhurt.x, abaddonhurt.y - 100, e)

  game.drawText("Click anywhere for the enemy's turn", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    game.state = enemyturn4
  }
}

function cure4() {
  game.scrollBackground("left", 25)
  johnnieplay2.scale = 0.03
  johnnieplay2.moveTo(250, 290)
  game.drawText(johnnie.health, johnnieplay2.x, johnnieplay2.y - 100, e)

  abaddon.moveTo(700, 300)
  game.drawText(abaddon.health, abaddon.x, abaddon.y - 100, e)

  game.drawText("Click anywhere for the enemy's turn", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    game.state = enemyturn4
  }
}

function enemyturn4() {
  game.scrollBackground("left", 25)
  johnnie.scale = 0.03
  johnnie.moveTo(200, 290)
  game.drawText(johnnie.health, johnnie.x, johnnie.y - 100, e)
  
  abaddon.moveTo(700, 300)
  game.drawText(abaddon.health, abaddon.x, abaddon.y - 100, e)

  game.drawText("Click anywhere to see the enemy attack", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    johnnie.health -= 41
    game.state = enemyattack4
    if(johnnie.health <= 0) {
      game.state = gameOver4
    }
  }
}

function enemyattack4() {  
  game.scrollBackground("left", 25)
  johnniehurt.scale = 0.03
  johnniehurt.moveTo(190, 290)
  game.drawText(johnnie.health, johnniehurt.x, johnniehurt.y - 100, e)

  abaddon.moveTo(650, 300)
  game.drawText(abaddon.health, abaddon.x, abaddon.y - 100, e)

  game.drawText("Click anywhere for your turn again", game.width / 2 - 190, game.height - 580, g)

  battleportrait.moveTo(125, 475)

  if(mouse.leftClick) {
    game.state = level4
  }
}

function ending() {
  game.scrollBackground("left", 0)

  game.drawText("Click the left mouse button to continue", game.width / 2 - 180, game.height - 580, g)

  game.drawText("??????????", 360, 80, i)
  
  game.drawText("After seemingly destroying Abaddon, the", 10, 120, h)
  game.drawText("demon lord revived instantly. Johnnie", 10, 170, h)
  game.drawText("was convinced that Abaddon cannot be", 10, 220, h)
  game.drawText("beaten, for he is too powerful. The monster", 10, 270, h)
  game.drawText("reveals that he was charging up his power", 10, 320, h)
  game.drawText("all this time for his ultimate move to take", 10, 370, h)
  game.drawText("over the world. It seemed that all hope is ", 10, 420, h)
  game.drawText("lost for the world...", 10, 470, h)

  if(mouse.leftClick) {
    game.state = ending2
  }
}

function ending2() {
  game.scrollBackground("left", 0)

  game.drawText("Click the left mouse button to continue", game.width / 2 - 180, game.height - 580, g)

  game.drawText("??????????", 360, 80, i)
  
  game.drawText("However...", 10, 120, h)

  if(mouse.leftClick) {
    game.state = ending3
  }
}

function ending3() {
  game.scrollBackground("left", 0)

  game.drawText("Click the left mouse button to continue", game.width / 2 - 180, game.height - 580, g)

  game.drawText("??????????", 360, 80, i)
  
  game.drawText("The badge of luck that the old monk gave", 10, 120, h)
  game.drawText("to Johnnie earlier shined in his pocket.", 10, 170, h)
  game.drawText("It transformed his Fender guitar into", 10, 220, h)
  game.drawText("a guitar that shined as bright as the sun.", 10, 270, h)
  game.drawText("Johnnie played his best solo on it, and", 10, 320, h)
  game.drawText("the demon lord exploded into dust. The", 10, 370, h)
  game.drawText("void around him then transformed to", 10, 420, h)
  game.drawText("Fret Plains...", 10, 470, h)

  if(mouse.leftClick) {
    game.state = ending4
  }
}

function ending4() {
  fretplains.draw()

  game.drawText("Click the left mouse button to continue", game.width / 2 - 180, game.height - 580, g)

  game.drawText("??????????", 360, 80, i)
  
  game.drawText("He saw a crowd: friends, family, complete", 10, 120, h)
  game.drawText("strangers. They cheered his name and", 10, 170, h)
  game.drawText("yelled, 'Hooray! You saved the world!'", 10, 220, h)
  game.drawText("Johnnie, valiant and brave, made a", 10, 270, h)
  game.drawText("thumbs-up as he walked toward the crowd.", 10, 320, h)
  game.drawText("Johnnie Rockington, for he gave the", 10, 370, h)
  game.drawText("CHORDS OF COURAGE to the world.", 10, 420, h)

  if(mouse.leftClick) {
    game.state = gameOver4
  }
}

function gameOver4() {
  game.scrollBackground("left", 0)

  if(abaddon.health <= 0) {
    game.drawText("The End.", game.width / 2 - 190, game.height / 2 - 100, new Font("70pt", "Arial", "white", "black"))
    game.drawText("Click the left mouse button to play again.", game.width / 2 - 230, game.height - 580, g)
    if(mouse.leftClick) {
      location.reload()
    }
  }
  else if(johnnie.health <= 0) {
    game.drawText("You Lose", game.width / 2 - 190, game.height / 2 - 100,new Font("70pt", "Arial", "red", "white"))
    game.drawText("Click the left mouse button to return to the start screen.", game.width / 2 - 230, game.height - 580, g)
    if(mouse.leftClick){
      location.reload()
    }
  }
}