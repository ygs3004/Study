<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="해야 할 일을 추가해주세요" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">경고</h3>
      <span slot="footer" @click="showModal = false">
        할 일을 입력하세요
        <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
      </span>
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {

  data(){
    return {
      newTodoItem:'',
      showModal: false
    }
  },

  methods: {
    addTodo(){
      if (this.newTodoItem !== "") {
        let value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit('addTodo', value);
        this.clearInput();
      } else{
        this.showModal = !this.showModal;
      }
    },

    clearInput(){
      this.newTodoItem = "";
    },
  },

  components: {
    Modal:Modal
  }
}

</script>

<style scoped>
  input:focus{
    outline: none
  }
  .inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input{
    border-style: none;
    font-size: 0.9rem
  }
  .addContainer{
    float:right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn{
    color: white;
    vertical-align: middle;
  }
</style>
