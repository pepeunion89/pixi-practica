import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Assets.add("myGame", "./game.png");

Assets.load(["myGame"]).then(()=>{

	const clampy: Sprite = Sprite.from("myGame");
	console.log ("Hola mundo!", clampy.width, clampy.height);

	console.log("Tamaño imagen: "+clampy.width,"x",clampy.height);

	//clampy.anchor.set(0.5);

	clampy.x = 0;
	clampy.y = 0;

	app.stage.addChild(clampy);

});

/*

Loader.shared.add({url: "./game.png", name: "myGame"});

Loader.shared.onComplete.add(()=>{

	const clampy: Sprite = Sprite.from("./game.png");

	console.log("Tamaño imagen: "+clampy.width,"x",clampy.height);

	//clampy.anchor.set(0.5);

	clampy.x = 0;
	clampy.y = 0;

	app.stage.addChild(clampy);

});

Loader.shared.load();
*/

