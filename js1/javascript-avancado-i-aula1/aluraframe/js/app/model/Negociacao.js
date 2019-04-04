class Negociacao {
    
    constructor() {
        this._quantidade = 1; //This "_" mean that u have a private atribute
        this._data = new Date();
        this._valor = 0.0;

    }

    valorTotal() {
        
        return this.valor * this.quantidade;
    }

    getQuantidade() { //Same like return in Java - to return some atribute using methods

        return this._quantidade;
    }

    getData() { 

        return this._data;
    }




}