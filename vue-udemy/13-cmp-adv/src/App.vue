<template>
  <div>
    <the-header/>
<!--    <badge-list></badge-list>-->
<!--    <user-info-->
<!--      :full-name="activeUser.name"-->
<!--      :info-text="activeUser.description"-->
<!--      :role="activeUser.role"-->
<!--    ></user-info>-->
<!--    <course-goal  #default="slotProps">-->
<!--      <h2> {{slotProps.item}}</h2>-->
<!--      <p>{{slotProps['anotherProp']}}</p> &lt;!&ndash; 강의랑 다름 버젼 문제? &ndash;&gt;-->
<!--    </course-goal>-->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Management Goals</button>
<!--    <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>-->
<!--    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>-->
    <keep-alive>
      <component :is="selectedComponent"/>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
// import BadgeList from "@/components/BadgeList.vue";
// import UserInfo from "@/components/UserInfo.vue";
// import CourseGoal from "@/components/CourseGoal.vue";
import ManageGoals from "@/components/ManageGoals.vue";
import ActiveGoals from "@/components/ActiveGoals.vue";

export default {
  components:{
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoal,
    ManageGoals,
    ActiveGoals,
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    setSelectedComponent(cmp){
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
