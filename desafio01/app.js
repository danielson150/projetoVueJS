new Vue({
    el: '#desafio',
    data: {
        nome: 'Danielson',
        idade: 25,
        link: 'http://combopop.com.br/wp-content/uploads/2019/01/Homem-de-Ferro-Marvel-Comics-3.png'

    },
    methods: {
        multiplicaIdade() {
            return this.idade * 3
        },
        aleatorio() {
            return Math.random()
        }
    },

})