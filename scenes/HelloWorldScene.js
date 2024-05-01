// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("hello-world");
  }

  init() {
    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
    console.log("init");
  }

  preload() {
    // load assets
    console.log("preload");
    this.load.image("sky", "./assets/space3.png");
    this.load.image("logo", "./assets/phaser3-logo.png");
    this.load.image("red", "./assets/particles/red.png");
  }

  create() {
    // create game objects
    console.log("create");
    this.add.image(400, 300, "sky");

    this.logo = this.physics.add.image(400, 100, "logo");
    this.logo.setVelocity(100, 200);
    this.logo.setBounce(1, 1);
    this.logo.setCollideWorldBounds(true);

    // emmit particles from logo
    const emitter = this.add.particles(0, 0, "red", {
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: "ADD",
    });
    emitter.startFollow(this.logo);

    this.ENTER = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
  }

  update() {
    // update game objects
    console.log("update");

    //on keydown event
    if (Phaser.Input.Keyboard.JustDown(this.ENTER)) {
      console.log("ENTER keydown");
      this.logo.setVelocity(0, 0);
    }
  }
}
