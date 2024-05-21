function rectangle(width, height, color) {

    color = color.charAt(0).toUpperCase() + color.slice(1)

    let rect = { width, height, color };
    rect.calcArea = () => {
        return width * height
    }
    return rect
    
    console.log(rect.width);
    console.log(rect.height);
    console.log(rect.color);
    console.log(rect.calcArea());
}

rectangle(4, 5, 'red')