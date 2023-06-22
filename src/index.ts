import { Application, Assets} from 'pixi.js'
//import { Scene } from './Scene';
import { assets } from './assets';
import { MenuScene } from './MenuScene';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1920,
	height: 1080
});

window.addEventListener("resize",()=>{

	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	
	const scale = Math.min (scaleX, scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth)/2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight)/2);

	const view = app.view as HTMLCanvasElement;

	view.style!.width = gameWidth + "px";
	view.style!.height = gameHeight + "px";

	view.style.marginLeft = marginHorizontal + "px";
	view.style.marginRight = marginHorizontal + "px";

	view.style.marginTop = marginVertical + "px";
	view.style.marginBottom = marginVertical + "px";

	// Colocamos la imagen de fondo principal de la app que es el menu
	


});

window.dispatchEvent(new Event("resize"));

Assets.addBundle("myAssets", assets);
Assets.loadBundle(["myAssets"]).then(()=>{

//	const myScene = new Scene();

//	app.stage.addChild(myScene);


	const menuScene = new MenuScene();
	app.stage.addChild(menuScene);


});

