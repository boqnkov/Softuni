class Laptop {
    constructor(info, quality){
        this.info = info
        this.info.producer = info.producer.toString()
        this.info.age = Number(info.age)
        this.info.brand = info.brand.toString()
        this.isOn = false
        this.quality = Number(quality)
        
    }

    turnOn() {
        this.isOn = true
        this.quality-=1
        this.price =(800 - (this.info.age*2) + (this.quality*0.5))
        if (this.price <0){
            this.price = 0
        }
    }

    turnOff() {
        this.isOn = false
        this.quality-=1
        this.price =(800 - (this.info.age*2) + (this.quality*0.5))
        if (this.price <0){
            this.price = 0
        }
    }

    showInfo(){
        return JSON.stringify(this.info)
    }
}

let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)


