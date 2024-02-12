const app = Vue.createApp({
    data() {
        return{
            books: [
                {id: 0, title: "Мать учения", author: "Nobody103", img_path: "../img/MoL.jpg", isFav: true},
                {id: 1, title: "Повелитель Тайн", author: "Cuttlefish that loves diving", img_path: "../img/LOTM.jpeg", isFav: true},
                {id: 2, title: "Противостаяние Святого", author: "Er Gen", img_path: "../img/Renegade Immortal.jpeg", isFav: false},
                {id: 3, title: "Воля Вечная", author: "Er Gen", img_path: "../img/Will Eternal.jpeg", isFav: true}],
            title: "Мать учения",
            current: "0"
        }
    },

    methods: {
        next() {
            // Значение current на одно больше чем обычно. Не с нуля начинается
            if (this.books[this.current+1]==undefined){
                this.current = 0
            } else{
                this.current++
            }
            this.title = this.books[this.current].title
        },

        previous() {
            // Значение current на одно больше чем обычно. Не с нуля начинается
            if (this.books[this.current-1]==undefined){
                this.current = this.books.length-1
            } else{
                this.current--
            }
            console.log(this)
            this.title = this.books[this.current].title
        },

        main_page(){
            window.location.href = "index.html"
        },

        changeFavState(e){
            id = e.target.id
            this.books[id].isFav = !this.books[id].isFav 
            
        }
    }
})

app.mount('.app')
