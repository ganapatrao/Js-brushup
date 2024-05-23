// function studenet(name, surname){
//     this.name = name;
//     this.surname= surname
// }

// //getdetails


// function Admini(name, surname,country){
//     studenet.call(this,name,surname,country)
//     this.country= country


// }


// x = new Admini("one","two","India")


class studenet{
    constructor(name, surname){
        this.name = name;
        this.surname= surname
    }

}

//getdetails


class Admini extends studenet{
    constructor(name,surname,country){
        super(name,surname)
        this.country = country
    }

}


x = new Admini("one","two","India")