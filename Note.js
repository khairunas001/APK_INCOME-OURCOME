const {Income, Expanse} = require(`./IncomeExpense`)
const fs = require ('fs');
class Note{
    // constructor(list){
    //     this.list = list || [];
    // }
    // addIncome (name, total){
    //     let income = new Income (name, total, "Income");
    //     this.list.push(income);
    // }
    // addExpanse (name, total){
    //     let expanse  = new Expanse (name, total, "Expanse");
    //     this.list.push(expanse);
    // }
    // listIncome (){
    //     console.log("List Income  : ");
    //     this.list.forEach(inc=> {
    //         if(inc.category === "Income"){
    //             console.log (`${inc.name}, ${inc.total}`);
    //         }
    //     })
    // }
    // listExpanse (){
    //     console.log("List Expanse  : ");
    //     this.list.forEach(inc=> {
    //         if(inc.category === "Expanse"){
    //             console.log (`${inc.name}, Rp. ${inc.total}`);
    //         }
    //     })
    // }
    // balance(){
    //     let totalIncome = 0;
    //     let totalExpanse = 0;
    //     this.list.forEach(el=> {
    //         if (el.category === "Income"){
    //             totalIncome += el.total;
    //         } else if (el.category === "Expanse"){
    //             totalExpanse += el.total;
    //         }
    //     })
    //     // status = plus, minus, balance
    //     let total = totalIncome - totalExpanse;
    //     if ( total === 0){
    //         console.log ("status : Balance")
    //     } else if ( total < 0){
    //         console.log ("status : Minus");
    //     } else if ( total > 0){
    //         console.log ("status : Plus");
    //     }
    // }
    static listincome(){
        let temp = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let incomes = temp.incomes;
        console.log("list incomes : ");
        incomes.forEach(income =>{
            const { name, total} = income;
            console.log (`${name}, Rp. ${total}`);
        })

    }
    static listExpanse(){
        let temp = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let expanses = temp.expanses;
        console.log("list incomes : ");
        expanses.forEach(expanse =>{
            const { name, total} = expanse;
            console.log (`${name}, Rp. ${total}`);
        })
    }
    static addIncome(name, total){
        let temp = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let income = new Income(name, total, "Income");
        temp.incomes.push (income);
        // console.log(temp);
        this.save(temp);
    }
    static addExpanse(name, total){
        let temp = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let expanse = new Expanse(name, total, "Expanse");
        temp.expanses.push (expanse);
        // console.log(temp);
        this.save(temp);
    }
    static balance (){
        let temp = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let totalIncome = 0;
        let totalExpanse = 0;
        temp.incomes.forEach(income =>{
            totalIncome += income.total;
        })
        temp.expanses.forEach(expanse =>{
            totalExpanse += expanse.total;
        })
        // console.log (totalIncome, totalExpanse);
        // status = plus, minus, balance
        let total = totalIncome - totalExpanse;
        if ( total === 0){
            console.log ("status : Balance")
        } else if ( total < 0){
            console.log ("status : Minus");
        } else if ( total > 0){
            console.log ("status : Plus");
        }
    }
    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 3));

    }
}

module.exports = Note;