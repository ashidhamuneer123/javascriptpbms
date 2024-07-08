class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    displayProduct(){
        console.log(`product:${this.name} price:${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        console.log(`Total(tax included):${this.price + (this.price * salesTax/100)}`);
    }
}

const pro1=new Product("pen",10.99);
const pro2=new Product("book",25)
pro1.displayProduct();
pro2.displayProduct();
pro1.calculateTotal(5);//5 percent tax
pro2.calculateTotal(10);
