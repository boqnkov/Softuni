
function hasClima(obj){
    obj.temp = 21;
    obj.tempSettings = 21;
    obj.adjustTemp = () => {
        if (obj.temp<obj.tempSettings){
            obj.temp++
        } else if (obj.temp>obj.tempSettings){
            obj.temp--
        } 
    } 
}

function hasAudio(obj) {
    obj.currentTrack = {
        name: null,
        artist: null
    }
    obj.nowPlaying = () => {
        if (currentTrack){
            console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`);
        }
    }

}

function hasParktronic(obj){
    obj.checkDistance = (distance) => {
        if (distance < 0.1){
            console.log("Beep! Beep! Beep!");
        } else if (distance < 0.25){
            console.log("Beep! Beep!");
        } else {
            console.log("Beep!");
        }
    }
}



const obj = {
    make: 'Toyota',
    model: 'Avensis'
} 

console.log(obj);
