function newProduct() {
    
    // ADICIONAR OS ITENS COM OS
    const data = {
        
    };
    
    
    let products = JSON.parse(localStorage.getItem('produtos'));

    products.push(data)

    localStorage.setItem('produtos', JSON.stringify(products))

}



function viewProduct() {
    const data = Object.keys(localStorage)

    for (i = 0; i < data.length - 1; i++) {
        let input = data[i]


        console.log(data.length);

        if (input[0].toLowerCase() == "p"){
            newData.push(input)
        }
    }

};
