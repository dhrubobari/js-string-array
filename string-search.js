const products = [
    'Dell Inspiron 15 3511 laptop',
    'Iphone 11 Pro 12-megapixel',
    'Galaxy Watch4 classic',
    'Lenovo IdeaPad Slim 3i Core i5 11th Gen 15.6 Laptop',
    'lG oled tv',
    'Samsung Galaxy S',
    'HUAWEI nova 7i'
]
const searching = 'laptop';

// index Of

const output = [];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        // output.push(product);
    }
}

// console.log(output);
for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        output.push(product);
    }
};
console.log(output);
// .startsWith() dekha hoynai