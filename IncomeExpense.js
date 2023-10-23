class Income {
    constructor (name, total, category){
        this.name = name;
        this.total = total;
        this.category = category;
    }
}

class Expanse {
    constructor (name, total, category){
        this.name = name;
        this.total = total;
        this.category = category;
    }
}

module.exports ={
    Income, Expanse
}