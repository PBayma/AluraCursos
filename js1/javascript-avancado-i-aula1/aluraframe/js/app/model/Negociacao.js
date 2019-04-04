class Negociacao {
    
    constructor(quantidade, valor) {
        this._quantidade = quantidade; //This "_" mean that u have a private atribute
        this._data = new Date(this._data.getTime());
        this._valor = valor;
        Object.freeze(this)//Freeze this object, to cannot change on other methods or file

    }

    valorTotal() {
        
        return this.valor * this.quantidade;
    }

    get quantidade() { //Almost the same like get in Java - to return some atribute using methods

        return this._quantidade;
    }

    get data() { 

        return new Date(this._data.getTime()); //to "freeze" the date. U cannot change using setDate
    }

    get valor(){

        return this._valor;
    }

    //Usar sempre let em vez de var para garantir q a variável n será usada fora do escopo do pro
    //jeto


}