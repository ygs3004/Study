let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        // 할 일 #1
        // 새로운 데이터 속성 1개 추가, {{}} 데이터 바인딩을 이용해 화면 표시
        newMessage : 'New Message',

        uid: '20',
        // 할 일 #2
        // uid를 변경하고 해당 uid의 변경여부를 크롬 개발자 도구의 '화면 요소 검사' 기능으로 확인
        // p 태그의 id 값을 검사
        flag: true
        // 할 일 #4
        // 위 flag  값을 false로 변경했을 때 화면에 어떤 영향을 주는지 확인
    },
    methods: {
        //ES6문법
        clickBtn(){
            console.log("hi");
        },
        // 할일 # 3
        // eventMethod를 하나 추가하고 #3 영역에 해당 이벤트를 실행하는 버튼 추가
        eventMethod(){
            console.log("추가한 이벤트")
            this.uid++;
            this.flag = !this.flag;
        }
    }
})