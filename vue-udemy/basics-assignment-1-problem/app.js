const app = Vue.createApp({
    data(){
        return {
            name: 'Yoon GunSoo',
            age: 34,
            favoriteNumber: 1,
            url: 'http://img1.ruliweb.com/img/cmu_yu02/689/688024_1.jpg'
        }
    },
    methods:{
        ageIn5Year(){
            return this.age+5;
        },
        favorite(){
            return this.favoriteNumber*Math.random()
        }
    }
})

app.mount('#assignment')