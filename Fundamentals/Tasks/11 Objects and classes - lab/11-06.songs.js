function songs(arr) {

    let songsNum = arr.shift()
    let typeList = arr.pop()
    let songsArr = []

    class Song {
        typeList
        name
        time

        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

    }

    for (let i = 0; i < songsNum; i++) {
        let [typeList, name, time] = arr[i].split('_');
        let song = new Song(typeList, name, time);
        songsArr.push(song)
    }

    if (typeList == 'all') {
        songsArr.forEach((i) => console.log(i.name))
    } else {
        let filtered = songsArr.filter((i) => i.typeList == typeList);
        filtered.forEach((i) => console.log(i.name))
    }

}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)