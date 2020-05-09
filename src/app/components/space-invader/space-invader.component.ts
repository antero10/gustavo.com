import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MainScene} from '../../game/MainScene';

@Component({
  selector: 'app-space-invader',
  templateUrl: './space-invader.component.html',
  styleUrls: ['./space-invader.component.sass']
})
export class SpaceInvaderComponent implements OnInit {
  @ViewChild('gameContainer') gameContainer: ElementRef;
  phaserGame: Phaser.Game;
  config: GameConfig;
  constructor() {
    // @ts-ignore
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [ MainScene ],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 100 }
        }
      }
    };
  }

  ngOnInit(): void {
    this.phaserGame = new Phaser.Game(this.config);
  }

}
