import { Container, SCALE_MODES, Sprite } from "pixi.js";

export class Penguin extends Container{

   constructor(){

        super();

        const penguin: Sprite = Sprite.from("penguin");
	
        // Ajustar el punto de anclaje al centro de la imagen
        //penguin.anchor.set(0.5);
    
        //clampy.anchor.set(0.5);      
    
        penguin.texture.baseTexture.scaleMode = SCALE_MODES.LINEAR;
    
        this.addChild(penguin);

   }


}