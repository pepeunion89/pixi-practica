import { Container, Sprite, Texture } from "pixi.js";

export class ButtonMenu extends Container{

    constructor(botonText: String) {
        super();

        const buttonSprite = new Sprite(Texture.from('Boton'+botonText+'_1'));
        buttonSprite.scale.set(0.7);

        buttonSprite.interactive = true;
        //buttonSprite.buttonMode = true;

        buttonSprite.on('pointerover', () => {
        buttonSprite.texture = Texture.from('Boton'+botonText+'_2');
        });

        buttonSprite.on('pointerout', () => {
        buttonSprite.texture = Texture.from('Boton'+botonText+'_1');
        });

        buttonSprite.on('pointerdown', () => {
        buttonSprite.texture = Texture.from('Boton'+botonText+'_3');
        });

        buttonSprite.on('pointerup', () => {
        buttonSprite.texture = Texture.from('Boton'+botonText+'_2');
            
            switch(botonText){

                case 'NP':  console.log("¡INICIANDO PARTIDA!");
                            break;

                case 'CP':  console.log("¡CARGANDO PARTIDA!");
                            break;
            }

        });

        this.addChild(buttonSprite);
      }


}