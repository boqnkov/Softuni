function vacation(people, type, day) {

    let price = 0
    switch (day) {
        case 'Friday':
            if (type === 'Students') {
                price = people * 8.45
                if (people >= 30) {
                    price *= 0.85
                }
            } else if (type === 'Business') {
                price = people * 10.9
                if (people >= 100) {
                    price = (people - 10) * 10.9
                }
            } else if (type === 'Regular') {
                price = people * 15
                if (people >= 10 && people <= 20) {
                    price *= 0.95
                }
            }
            break;

        case 'Saturday':
            if (type === 'Students') {
                price = people * 9.8
                if (people >= 30) {
                    price *= 0.85
                }
            } else if (type === 'Business') {
                price = people * 15.6
                if (people >= 100) {
                    price = (people - 10) * 15.6
                }
            } else if (type === 'Regular') {
                price = people * 20
                if (people >= 10 && people <= 20) {
                    price *= 0.95
                }
            }
            break;

        case 'Sunday':
            if (type === 'Students') {
                price = people * 10.46
                if (people >= 30) {
                    price *= 0.85
                }
            } else if (type === 'Business') {
                price = people * 16
                if (people >= 100) {
                    price = (people - 10) * 16
                }
            } else if (type === 'Regular') {
                price = people * 22.5
                if (people >= 10 && people <= 20) {
                    price *= 0.95
                }
            }
            break;

    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday")