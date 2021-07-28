function Player() {

}

const intro = new Audio("/pokemons1.mp3");
let player = new (Player as any);


Player.prototype.playIntro = async function() {
    console.log('play intro');
    await intro.play();
}

Player.prototype.pauseIntro = async function() {
    console.log('pause intro');
    await intro.pause();
}

Player.prototype.playButton = async function() {
    console.log('play button');
    const button = new Audio("/mixkit-select-click-1109.wav");
    await button.play();
}



export {player};