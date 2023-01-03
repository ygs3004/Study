const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods:{
    comfirmInput(){
      this.confirmedName = this.name;
    },
    submitForm(event){
      // event.preventDefault(); -> submit.prevent
      alert("Submitted");
    },
    setName(event, nim){
      this.name = event.target.value+nim;
    },
    add(num){
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
