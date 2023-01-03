const app = Vue.createApp({
    data(){
        return{
            result: 0,
        }
    },
    methods: {
        add(number){
            this.result += number;
        },
    },
    computed: {
        message(){
            if(this.result<37){
                return 'Not there yet';
            }else if(this.result>37){
                return 'Too much!';
            }else{
                return 'Nice! There is 37'
            }
        }
    },
    watch: {
        message(value){
            console.log('watching : '+value);
            if (value === 'Nice! There is 37')
                const that = this;
                setTimeout(function () {
                    that.result = 0
                },5000);
        }
    }
})

app.mount('#assignment')