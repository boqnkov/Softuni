function gramophone(band, album, songName) {

    let songDuration = (band.length * album.length) * songName.length / 2
    let rotations = songDuration / 2.5

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);

}
gramophone('Black Sabbath', 'Paranoid',
    'War Pigs')