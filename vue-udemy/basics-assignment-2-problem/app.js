const app = Vue.createApp({
    data() {
        return {
            keydownText: '',
            enterText: ''
        }
    },
    methods: {
        showAlert(){
            alert("clicked!")
        },
        keydownTextChange(e){
            this.keydownText = e.target.value;
        },
        enterTextChange(e){
            this.enterText = e.target.value;
        }
    }
});

app.mount('#assignment');