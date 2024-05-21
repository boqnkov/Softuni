function createSortedList() {
    let object = {
        list: [],
        size: 0,
        add: function(element){
            this.list.push(element)
            this.list.sort(this.sort)
            this.size++
            return object
        },
        remove: function(index){
            this.validate(index);
            this.list.splice(index,1)
            this.list.sort(this.sort)
            this.size--
            return object
        },
        get: function(index){
            return this.list[index]
        },
        
        validate: function(index){
            if (index < 0 || index >= this.list.length){
                throw new Error("Index is out of bounds")
            }
        },
        sort(a,b){
            return a - b
        }
    
    }

    return object
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

