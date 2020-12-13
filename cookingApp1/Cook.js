const EventEmitter = require('events');
class Cook extends EventEmitter{
    constructor(name,IDNumber,foodSpecialty,salary,breaks){
        super();
       this.name = name;
       this.IDNumber=IDNumber;
       this.foodSpecialty=foodSpecialty;
       this.salary=salary;
       this.breaks=breaks;

    }
    makeFood(food){
        if(food===this.foodSpecialty){
            this.emit('Cooked Correctly');
        }else
            this.emit('I did my best');
    }
    salaryCut(salaryDecrease){
        if (salaryDecrease>this.salary*.1){
            this.emit('Going on Strike');
        }else {
        this.salary= this.salary-salaryDecrease;
        this.emit('fine');
        }

    }
    goOnBreak(milliseconds){
        if (this.breaks>0){
            this.breaks--;
            setTimeout(function(){
                console.log("Break done!");
            }, milliseconds);
        }else 
            console.log("No More Breaks Allowed!");
    }
}
module.exports = Cook;