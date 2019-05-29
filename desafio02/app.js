new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },

    methods: {
        exibirAlerta() {
            alert('O botao foi clicado')
        },
        receberValor(event) {
            this.valor = event.target.value
        },

    },
})