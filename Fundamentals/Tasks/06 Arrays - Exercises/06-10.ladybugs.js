function ladybugs(arr) {

    let fieldSize = Number(arr[0]);
    let placedBugsAsString = arr[1];
    let positions = placedBugsAsString.split(' ')
    let initialField = []
    let result = ''

    for (let r = 0; r < fieldSize; r++) {
        initialField.push(0)
    }

    for (let i = 0; i < fieldSize; i++) {

        for (let y = 0; y < positions.length; y++) {

            if (i == Number(positions[y])) {
                initialField[i] = 1
            }
        }
    }

    for (let h = 2; h < arr.length; h++) {

        let comAsStr = arr[h]
        let newArr = comAsStr.split(' ')
        let movedLadybug = Number(newArr[0])
        let direction = newArr[1];
        let steps = Number(newArr[2]);

        if (initialField[movedLadybug] == 1) {
            if (direction == 'right') {
                initialField[movedLadybug] = 0
                initialField[movedLadybug + steps] += 1

                if (initialField[movedLadybug + steps] != 1) {
                    initialField[movedLadybug + steps] = 1
                    initialField[movedLadybug + steps + steps] = 1
                }

            } else if (direction == 'left') {
                initialField[movedLadybug] = 0
                initialField[movedLadybug - steps] += 1

                if (initialField[movedLadybug - steps] != 1) {
                    initialField[movedLadybug - steps] = 1
                    initialField[movedLadybug - steps - steps] = 1
                }
            }
        }
    }

    for (let p = 0; p < fieldSize; p++) {
        result += initialField[p] + ' '
    }

    console.log(result);

}
ladybugs([5, '3',
    '3 left 2',
    '1 left -2']
)

ladybugs([3, '0 1',
    '0 right 1',
    '2 right 1']
)