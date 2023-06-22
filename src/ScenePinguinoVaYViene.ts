import { AnimatedSprite, Container, Graphics, Texture, Text, NineSlicePlane, Ticker } from "pixi.js";

export class ScenePinguinoVaYViene extends Container{

    constructor(){
        
        super();

  
// ACA CREAMOS LA ANIMACION CON VARIOS SPRITE QUE VIENEN DE ASSETS
        const pinguinoVaYViene: AnimatedSprite = new AnimatedSprite(
            [

                Texture.from("Penguin08"),
                Texture.from("Penguin09"),
                Texture.from("Penguin10"),
                Texture.from("Penguin11"),
                Texture.from("Penguin08"),
                Texture.from("Penguin09"),
                Texture.from("Penguin10"),
                Texture.from("Penguin11"),
                Texture.from("Penguin08"),
                Texture.from("Penguin09"),
                Texture.from("Penguin10"),
                Texture.from("Penguin11"),
                Texture.from("Penguin08"),
                Texture.from("Penguin09"),
                Texture.from("Penguin10"),
                Texture.from("Penguin11"),

                Texture.from("Penguin07"),
                Texture.from("Penguin06"),

                Texture.from("Penguin02"),
                Texture.from("Penguin03"),
                Texture.from("Penguin04"),
                Texture.from("Penguin05"),
                Texture.from("Penguin02"),
                Texture.from("Penguin03"),
                Texture.from("Penguin04"),
                Texture.from("Penguin05"),
                Texture.from("Penguin02"),
                Texture.from("Penguin03"),
                Texture.from("Penguin04"),
                Texture.from("Penguin05"),
                Texture.from("Penguin02"),
                Texture.from("Penguin03"),
                Texture.from("Penguin04"),
                Texture.from("Penguin05"),

                Texture.from("Penguin01"),
                Texture.from("Penguin00"),

            ], true
        );

        pinguinoVaYViene.animationSpeed=0.1;
        pinguinoVaYViene.play();
        this.addChild(pinguinoVaYViene);






        // Definimos la velocidad y la distancia de desplazamiento del pingüino
        const velocidad = 1.8; // Velocidad del desplazamiento
        const distancia = 162; // Distancia de desplazamiento en píxeles

        // Variables para controlar la dirección y la posición actual del pingüino
        let direccion = 1; // 1 para derecha, -1 para izquierda
        let posicionActual = -162; // Posición actual del pingüino


        const pinguinoCaminaFunc = (()=>{

            // Actualizamos la posición del pingüino
            posicionActual += velocidad * direccion;
            pinguinoVaYViene.x = posicionActual;

            // Si alcanza los límites de desplazamiento, cambiamos la dirección
            if (posicionActual >= distancia || posicionActual <= -distancia) {
            direccion *= -1;
            }
                
        });


        // Solicitamos al ticker que llame a la función 'update' en cada cuadro de animación
       Ticker.shared.add(pinguinoCaminaFunc);


// DIBUJAR POLIGONOS - GRAPHICS //

        const myGraph: Graphics = new Graphics();
        myGraph.lineStyle({color: 0xFF00FF, width: 10, alpha: 1})
        myGraph.moveTo(0,0);
        myGraph.lineTo(1000,700);
        myGraph.lineTo(1000,300);
        myGraph.lineTo(500,300);
        
        // CON ESTO BORRA
        myGraph.clear();

        // PROBAMOS UN CIRCULO
        myGraph.lineStyle({color: 0xFF00FF, width: 10, alpha: 1})
        
        // CON ESTO RELLENA
        myGraph.beginFill(0x00FF00,1)
        myGraph.drawCircle(300,300,100);

        // CON ESTO DEJA DE RELLENAR
        myGraph.endFill();
        myGraph.drawCircle(600,300,100);

 //       this.addChild(myGraph);

// TEXTOS - Recordar importar Text de la libreria de PIXI arriba //
            
        const myText: Text = new Text("Hola", {fontSize: 48, fill: 0xFF00FF, fontFamily:"Comic Sans MS"}) 
        myText.text = "Hola loco";
        myText.x = 100;
 //       this.addChild(myText);

// NINE-SLICE Plane para que no se estiren las esquinas y quede mas prolijo

        const panel = new NineSlicePlane(
            Texture.from("Terreno"),
            35,35,35,35            
            );

 //       this.addChild(panel);
        panel.scale.set(0.3);


    }

}