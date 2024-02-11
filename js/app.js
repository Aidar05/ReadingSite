const app = Vue.createApp({
    data() {
        return{
            books: [
                {title: "Мать учения", author: "Nobody103", img_path: "../img/MoL.jpg", fav: true},
                {title: "Повелитель Тайн", author: "Cuttlefish that loves diving", img_path: "../img/LOTM.jpeg", fav: true },
                {title: "Противостаяние Святого", author: "Er Gen", img_path: "../img/Renegade Immortal.jpeg", fav: true},
                {title: "Воля Вечная", author: "Er Gen", img_path: "../img/Will Eternal.jpeg", fav: true}],
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
                this.current = books.length-1
            } else{
                this.current--
            }
            console.log(this.current)
            this.title = this.books[this.current].title
        },

        main_page(){
            window.location.href = "index.html"
        }
    }
})

app.mount('#app')
