document.addEventListener('DOMContentLoaded', () => {
    const app = Vue.createApp({
        data(){
            return{
                asdf: "qwerty",
                logged_in: true
            }
        }
    })

    app.mount('#header');
  });