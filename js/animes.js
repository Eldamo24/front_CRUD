const myApp = {
    data(){
        return {
            animes: [],
            nombre: "",
            temporadas: 0,
            capitulos: 0,
            descripcion: "",
            imagen: "",
            url: "https://eldamo24.pythonanywhere.com/animes"
        }
    },
    methods: {
        cargarCards(){
            fetch(this.url)
            .then(response => response.json())
            .then(data => this.animes = data)
        },
        delete(id){
            let url = this.url +"/"+id
            console.log(url)
            let options = {
                method: "DELETE",
            }
            fetch(url, options)
            .then(res => res.json())
            .then(res => location.reload())
        }
    },
    mounted(){
        this.cargarCards()
    }
}

Vue.createApp(myApp).mount("#app")