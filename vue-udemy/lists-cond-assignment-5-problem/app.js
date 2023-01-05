const app = Vue.createApp({
    data(){
        return {
            tasks: [],
            inputTask: '',
            showList:true,
        }
    },
    computed:{
      buttonStatus(){
          return this.showList ? 'Hide' : 'List';
      }
    },
    methods: {
        toggleList(){
            this.showList = !this.showList;
        },
        addTask(){
            this.tasks.push(this.inputTask);
        }
    }
});

app.mount('#assignment');