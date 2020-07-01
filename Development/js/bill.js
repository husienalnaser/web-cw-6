let product = prompt("enter product (write 'done' when you're done)");

let price = prompt("enter price");

let quantity = prompt("enter quantity");

let products= [];

let prices= [];

let quantities= [];

while(product!="done"){
    products.push(product);
    prices.push(price);
    quantities.push(quantity);

     product = prompt("enter product (write 'done' when you're done)");
if(product!="done"){
    price = prompt("enter price");

    quantity = prompt("enter quantity");
}


};

let result= 0;

for(let i =0; i< prices.length; i++){
result= result+(parseFloat(prices[i])*quantities[i]);
};

console.log("--------------");

console.log("reciept");

console.log("--------------");
for(let i =0; i< prices.length; i++){
    console.log(quantities[i] + " "+ products[i]+ " "+ prices[i]+ " KD");
    };
console.log("--------------");
console.log("sum: "+ result+ " KD");