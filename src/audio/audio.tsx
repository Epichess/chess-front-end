function Player() {

}

const intro = new Audio("/pokemons1.mp3");
let introIsPlaying = true;
let player = new (Player as any);


Player.prototype.playIntro = async function() {
    console.log('play intro');
    await intro.play();
}

Player.prototype.playButton = async function() {
    console.log('play button');
    const button = new Audio("/mixkit-select-click-1109.wav");

    await button.play();
    if (introIsPlaying) {
        await intro.pause();
        introIsPlaying = false;
    }
}

export {player};