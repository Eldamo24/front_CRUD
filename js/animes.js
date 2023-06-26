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
            .catch(err => {
                console.error(err);
            })
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
                alert("El anime se guardo correctamente")
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
                this.id = anime.id
                this.nombre = anime.nombre
                this.temporadas = anime.temporadas
                this.capitulos = anime.capitulos
                this.descripcion = anime.descripcion
                this.imagen = anime.imagen
            })
            document.getElementById("idMod").disabled = true
        },
        limpiarDatos(){
            document.getElementById("nombre").value = ""
            document.getElementById("temporadas").value = ""
            document.getElementById("capitulos").value = ""
            document.getElementById("descripcion").value = ""
            document.getElementById("imagen").value = ""
            document.getElementById("nombre").style.borderBlockColor = ""
            document.getElementById("temporadas").style.borderBlockColor = ""
            document.getElementById("capitulos").style.borderBlockColor = ""
            document.getElementById("descripcion").style.borderBlockColor = ""
            document.getElementById("imagen").style.borderBlockColor = ""
            this.nombre = ""
            this.temporadas = 0
            this.capitulos = 0
            this.descripcion = ""
            this.imagen = ""
            document.getElementById("guardarAnime").disabled = true
        },
        limpiarDatos2(){
            document.getElementById("nombreMod").style.borderBlockColor = ""
            document.getElementById("temporadasMod").style.borderBlockColor = ""
            document.getElementById("capitulosMod").style.borderBlockColor = ""
            document.getElementById("descripcionMod").style.borderBlockColor = ""
            document.getElementById("imagenMod").style.borderBlockColor = ""
            this.nombre = ""
            this.temporadas = 0
            this.capitulos = 0
            this.descripcion = ""
            this.imagen = ""
            document.getElementById("upButton").disabled = true
        },
        update(){
            let url = this.url  +"/"+document.getElementById("idMod").value
            
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
                alert("El anime se modifico correctamente")
                location.reload()
            })
        }
    },
    mounted(){
        this.cargarCards()
    }
}

Vue.createApp(myApp).mount("#app")