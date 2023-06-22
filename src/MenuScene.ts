import { Container, Sprite, Texture } from "pixi.js";
import { ScenePinguinoVaYViene } from "./ScenePinguinoVaYViene";
import { ButtonMenu } from "./ButtonMenu";

export class MenuScene extends Container{



    constructor(){
        super();


        const sprBGM = new Sprite(Texture.from('BackgroundMenu'));

        const menu = new Sprite(Texture.from('Menu'));
        menu.scale.set(0.7);
        menu.x= sprBGM.width/2;        
        menu.y= sprBGM.height/2;
        menu.anchor.set(0.5);

        const scenePVYV = new ScenePinguinoVaYViene();
        scenePVYV.x= sprBGM.width/2.1;
        scenePVYV.y= sprBGM.height/9.2;

        const buttonNP = new ButtonMenu("NP");
        buttonNP.x= 837;
        buttonNP.y= 405;

        const buttonCP = new ButtonMenu("CP");
        buttonCP.x= 837 ;
        buttonCP.y= 490;
        

        

	    this.addChild(sprBGM,scenePVYV, menu, buttonNP, buttonCP);
        


    }


    


}