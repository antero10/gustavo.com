import GameObject = Phaser.GameObjects.GameObject;

export class MainScene extends Phaser.Scene {
  private player;
  private aliens;
  private bullets;
  private bulletTime = 0;
  private cursors;
  private fireButton;
  private explosions;
  private starfield;
  private score = 0;
  private scoreString = '';
  private scoreText;
  private lives;
  private enemyBullet;
  private firingTimer = 0;
  private stateText;
  private livingEnemies = [];
  constructor() {
    super({ key: 'main' });
  }
  preload() {
    this.load.image('bullet', 'assets/this.games/invaders/bullet.png');
    this.load.image('ship', 'assets/this.games/invaders/this.player.png');
    this.load.spritesheet('kaboom', 'assets/this.games/invaders/explode.png', {frameWidth: 128, frameHeight: 128});

    this.load.spritesheet('invader1', 'assets/invader1.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('invader2', 'assets/invader2.png', { frameWidth: 44, frameHeight: 32 });
    this.load.spritesheet('invader3', 'assets/invader3.png', { frameWidth: 48, frameHeight: 32 });

  }
  create() {
    const invader1 = this.add.group(undefined, { key: 'invader1', frame: 0, repeat: 13, setXY: { x: 32, y: 100, stepX: 40 } });
    const invader2 = this.add.group(undefined, { key: 'invader2', frame: 0, repeat: 10, setXY: { x: 32, y: 148, stepX: 52 }});
    const invader3 = this.add.group(undefined, { key: 'invader3', frame: 0, repeat: 9, setXY: { x: 32, y: 148 + 96, stepX: 58 } });

    Phaser.Actions.IncX(invader1.getChildren(), 100);
    Phaser.Actions.IncX(invader2.getChildren(), 100);
    Phaser.Actions.IncX(invader3.getChildren(), 100);

    Phaser.Actions.SetTint(invader1.getChildren(), 0xff0000);
    Phaser.Actions.SetTint(invader2.getChildren(), 0x00ff00);
    Phaser.Actions.SetTint(invader3.getChildren(), 0x00ffff);

    this.bullets = this.add.group()
    this.bullets.enableBody = true;
    this.bullets.physicsBodyType = Phaser.Physics.Arcade;
    this.bullets.createMultiple(30, 'bullet');
    this.bullets.setAll('anchor.x', 0.5);
    this.bullets.setAll('anchor.y', 1);
    this.bullets.setAll('outOfBoundsKill', true);
    this.bullets.setAll('checkWorldBounds', true);

    this.player = this.add.sprite(400, 500, 'ship');
    this.player.anchor.setTo(0.5, 0.5);
    this.physics.world.enable(this.player);

    //  The score
    this.scoreString = 'Score : ';
    this.scoreText = this.add.text(10, 10, this.scoreString + this.score, { font: '34px Arial', fill: '#fff' });

    //  Lives
    // this.lives = this.add.group();
    // this.add.text(this.physics.world.width - 100, 10, 'Lives : ', { font: '34px Arial', fill: '#fff' });

    //  Text

  }
  update() {
    console.log('update method');
  }
}
