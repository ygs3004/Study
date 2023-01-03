const app = Vue.createApp({
    data(){
        return{
            styleMe:'',
            inLineColor: '',
            visibility:'show'
        }
    },
    methods: {
        changeInline(){
            this.inLine = !this.inLine
        },
        changeVisiblity(){
            if(this.visibility === 'show'){
                this.visibility = 'hidden';
            }else if(this.visibility === 'hidden'){
                this.visibility = 'show';
            }
        }
    }
});

app.mount("#assignment")