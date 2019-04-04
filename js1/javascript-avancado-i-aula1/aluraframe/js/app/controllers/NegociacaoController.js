class NegociacaoController {

    adiciona(event) {
        event.preventDefault();
        alert('Chamei ação no controller');

        /* 
        let $ = document.querySelector.bind(document); U can change querrySelector to $ using
        that assossiation, but u need to bind the document to have meaning when u try to use
        $
        */
       
        let inputQuantidade = document.querySelector('#quantidade');
        let inputData = document.querySelector('#data');
        let inputValor = document.querySelector('#valor');

        console.log(inputQuantidade.value);
        console.log(inputData.value);
        console.log(inputValor.value);
    }
}