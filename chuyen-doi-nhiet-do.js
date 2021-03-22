class TemPerature{
    constructor(c) {
        this.c=c;
    }
    changeTof(){
        return (this.c*1.8)+32;
    }
    changeTok(){
        return this.c+273.15;
    }
}
let temPerature= new TemPerature(25);
document.write(temPerature.changeTof()+" độ F "+"<br>"+temPerature.changeTok()+" độ k ")
