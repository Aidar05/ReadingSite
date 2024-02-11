book_titles = ["Мать учения", "Повелитель Тайн", "Противостаяние Святого", "Воля Вечная"]

const app = Vue.createApp({
    data() {
        return{
            title: "Мать учения",
            current: "0" 
        }
    },

    methods: {
        next() {
            // Значение current на одно больше чем обычно. Не с нуля начинается
            if (book_titles[this.current+1]==undefined){
                this.current = 0
            } else{
                this.current++
            }
            this.title = book_titles[this.current]
        },

        previous() {
            // Значение current на одно больше чем обычно. Не с нуля начинается
            if (book_titles[this.current-1]==undefined){
                this.current = book_titles.length-1
            } else{
                this.current--
            }
            console.log(this.current)
            this.title = book_titles[this.current]
        },

        main_page(){
            window.location.href = "index.html"
        }
    }
})

app.mount('#app')
