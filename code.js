var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e609a485-b509-4cc9-989c-edc3c85512e0","d10c265c-347e-44f0-9b77-c5e514ff0314","3591ac84-de61-4024-894d-b9b48def419c","10d25119-d356-4dfd-a5a6-d0b100c1076b"],"propsByKey":{"e609a485-b509-4cc9-989c-edc3c85512e0":{"name":"plane","sourceUrl":"assets/api/v1/animation-library/gamelab/7eOaJzJi2IJDNiuNWLPRwYIsKsqQjpHA/category_vehicles/playerShip2_red.png","frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"7eOaJzJi2IJDNiuNWLPRwYIsKsqQjpHA","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7eOaJzJi2IJDNiuNWLPRwYIsKsqQjpHA/category_vehicles/playerShip2_red.png"},"d10c265c-347e-44f0-9b77-c5e514ff0314":{"name":"mouse","sourceUrl":null,"frameSize":{"x":300,"y":296},"frameCount":2,"looping":true,"frameDelay":12,"version":"r2EO0y8HsQs0fyUuusstiQrb7u1RgRGB","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":592},"rootRelativePath":"assets/d10c265c-347e-44f0-9b77-c5e514ff0314.png"},"3591ac84-de61-4024-894d-b9b48def419c":{"name":"shot","sourceUrl":"assets/api/v1/animation-library/gamelab/5FuvDqNMMcfI0wht0.T2lbse5HkaXsKY/category_gameplay/pieceBlack_border00.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"5FuvDqNMMcfI0wht0.T2lbse5HkaXsKY","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5FuvDqNMMcfI0wht0.T2lbse5HkaXsKY/category_gameplay/pieceBlack_border00.png"},"10d25119-d356-4dfd-a5a6-d0b100c1076b":{"name":"bg","sourceUrl":"assets/api/v1/animation-library/gamelab/6R1r6_thyaqHGORcm3JlEVMzjsWX0mFI/category_backgrounds/background_scifi.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"6R1r6_thyaqHGORcm3JlEVMzjsWX0mFI","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6R1r6_thyaqHGORcm3JlEVMzjsWX0mFI/category_backgrounds/background_scifi.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var count=0;

var bg = createSprite(200, 200,400,400);
bg.setAnimation("bg");
var plane = createSprite(200, 330);
plane.setAnimation("plane");
var mouse = createSprite(340, 60);
mouse.setAnimation("mouse");
var mouse2 = createSprite(200, 60);
mouse2.setAnimation("mouse");
var mouse3 = createSprite(60, 60);
mouse3.setAnimation("mouse");
var shot = createSprite(500, 190);
shot.setAnimation("shot");
mouse.scale = 0.26;
mouse2.scale = 0.3;
mouse3.scale = 0.26;
shot.scale = 0.24;
function draw() {
  drawSprites();

  textSize(20);
  text("score"+ count ,330,350);


if (keyDown("left")) {
  plane.x = plane.x-10;
}
if (keyDown("right")) {
  plane.x = plane.x+10;
}
if (keyWentDown("space")) {
    shot.x = plane.x;
    shot.y = plane.y;
    shot.velocityY=-4;
    playSound("assets/category_explosion/8bit_explosion.mp3", false);
    
  }
  
  createEdgeSprites();
  plane.bounceOff(edges);
    if (shot.isTouching(mouse)) {
      mouse.x = randomNumber(30,350);
      mouse.y = randomNumber(70,170);
      playSound("assets/category_digital/squeak.mp3", false);
      count=count+1
    }
      if (shot.isTouching(mouse2)) {
      mouse2.x = randomNumber(30,350);
      mouse2.y = randomNumber(70,170);
    playSound("assets/category_digital/squeak.mp3", false);
     count=count+1
        
      }
      if (shot.isTouching(mouse3)) {
      mouse3.x = randomNumber(30,350);
      mouse3.y = randomNumber(70,170);
    playSound("assets/category_digital/squeak.mp3", false);
      count=count+1
        
      }
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
