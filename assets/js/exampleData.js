function createFakeData() {

    const fakeClients = [
        {
            name: "Exemplo Pessoa Física",
            document: "203.252.778-26",
            city: "Ribeirão Preto",
            address: "Rua Monterei, 221",
            phone: "(16)98123-6634",       
        },
    
        {
            name: "Exemplo Pessoa Jurídica",
            document: "98.714.264/0001-01",
            city: "São Paulo",
            address: "Rua Cotoxo, 799",
            phone: "(16)98123-6634", 
        }
    ];

    const fakeProducts = [
        {
            code: 001,
            name: "Exemplo Produto 1",
            tipo: "Químico"
            
             
        },
    
        {
            code: 002,
            name: "Exemplo Produto 2",
            tipo: "Biológico"

        }
    ];

    localStorage.setItem('clientes', JSON.stringify(fakeClients));

    localStorage.setItem('produtos', JSON.stringify(fakeProducts));
}

createFakeData();