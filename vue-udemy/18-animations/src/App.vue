<template>
  <div class='container'>
    <div class='block' :class='{animate: animatedBlock}'></div>
    <button @click='animateBlock'>Animate</button>
  </div>
  <div class='container'>
    <!-- Element not mounted -->
    <!-- -enter-from, -enter-active, -enter-to   -->
    <!-- Element mounted -->
    <!-- -leave-from, -leave-active, -leave-to   -->
    <!-- Element not mounted -->
    <transition name='para'
                @before-enter='beforeEnter'
                @enter='enter'
                @after-enter='afterEnter'
                @before-leave='beforeLeave'
                @leave='leave'
                @after-leave='afterLeave'
                @enter-cancelled='enterCancelled'
                @leave-cancelled='leaveCancelled'
    >
      <p v-if='paraIsVisible'>버튼을 눌러야 보입니다!</p>
    </transition>
    <button @click='toggleParagraph'>문단 열기</button>
  </div>
  <div class='container'>
    <transition name='fade-button' mode='out-in'>
      <button @click='showUsers' v-if='!this.userAreVisible'>사용자 보기</button>
      <button @click='hideUsers' v-else>사용자 숨기기</button>
    </transition>
  </div>
  <base-modal @close='hideDialog' :open='dialogIsVisible'>
    <p>This is a test dialog!</p>
    <button @click='hideDialog'>Close it!</button>
  </base-modal>
  <div class='container'>
    <button @click='showDialog'>Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      userAreVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    enterCancelled() {
      console.log('enterCancelled');
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      console.log('leaveCancelled');
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el) {
      console.log('beforeEnter');
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter');
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('afterEnter');
      console.log(el);
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      console.log(el);
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave');
      console.log(el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - (round * 0.01);
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('afterLeave');
      console.log(el);
    },


    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showUsers() {
      this.userAreVisible = true;
    },
    hideUsers() {
      this.userAreVisible = false;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /*transition: transform 0.3s ease-out;*/
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

/*.para-enter-from {*/
/*  !*opacity: 0;*!*/
/*  !*transform: translateY(-30px);*!*/
/*}*/

/*.para-enter-active {*/
/*  !*transition: all 0.3s ease-out;*!*/
/*  animation: slide-scale 0.3s ease-out*/
/*}*/

/*.para-enter-to {*/
/*  !*opacity: 1;*!*/
/*  !*transform: translateY(0);*!*/
/*}*/

/*.para-leave-from {*/
/*  !*opacity: 0.5;*!*/
/*  !*transform: translateY(0);*!*/
/*}*/

/*.para-leave-active {*/
/*  !*transition: all 0.3s ease-in;*!*/
/*  animation: slide-scale 0.3s ease-out;*/
/*}*/

/*.para-leave-to {*/
/*  !*opacity: 0;*!*/
/*  !*transform: translateY(100px);*!*/
/*}*/

.animate {
  /*transform: translateX(150px);*/
  animation: slide-fade 0.3s ease-out;
}

.fade-button-enter-from,
.fade-button-leave-from {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-to {
  opacity: 1;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-200px) scale(1.5);
  }

  100% {
    transform: translateX(-250px) scale(1);
  }
}
</style>
