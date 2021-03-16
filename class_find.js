class Finding_prac{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    experiment2(){
        console.log('practice purpose');
    }

    experiment(){
        var arr1=[1,2,3];
        arr1.find(function(indexValue){
            if(indexValue===1){
                this.experiment2();
            }
        },this)// this "this is indicating local this...except mentioning this it'll call the window so it's mandatory"
    }





}

var boy = new Finding_prac('lamia',35);
boy.experiment();