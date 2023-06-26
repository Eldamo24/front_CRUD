const myApp = {
    data(){
        return {
            animes: [],
            id: 0,
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
            let options = {
                method: "DELETE",
            }
            fetch(url, options)
            .then(res => res.json())
            .then(res => location.reload())
        },
        crear(){
            let anime ={
                nombre:this.nombre,
                temporadas:this.temporadas,
                capitulos:this.capitulos,
                descripcion:this.descripcion,
                imagen:this.imagen
            }
            let options = {
                body: JSON.stringify(anime),
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                redirect: "follow"
            }
            fetch(this.url, options)
            .then(function (){
                alert("Se guardo el anime")
                location.reload()
            })
        },
        cargarDatos(id){
            let url = this.url +"/"+id
            let anime
            fetch(url)
            .then(response => response.json())
            .then(data =>{
                anime = data
                this.nombre = anime.nombre
                this.temporadas = anime.temporadas
                this.capitulos = anime.capitulos
                this.descripcion = anime.descripcion
                this.imagen = anime.imagen
            })
        },
        update(id){
            let url = this.url  +"/"+id
            
            let anime = {
                nombre: this.nombre,
                temporadas: this.temporadas,
                capitulos: this.capitulos,
                descripcion: this.descripcion,
                imagen: this.imagen
            }
            let options ={
                body: JSON.stringify(anime),
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                redirect: "follow"
            }
            fetch(url, options)
            .then(function () {
                alert("Anime modificado")
                location.reload()
            })
            
        }
    },
    mounted(){
        this.cargarCards()
    }
}

Vue.createApp(myApp).mount("#app")