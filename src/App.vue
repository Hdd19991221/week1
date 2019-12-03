<template>
  <div id="app">
    <div class="nav">
      <router-link to="/all">全部任务</router-link>
      <router-link to="/ing">进行中任务</router-link>
      <router-link to="/out">强行终止任务</router-link>
      <router-link to="/ok">已完成任务</router-link>
      <router-view/>
    </div>
    
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  width: 800px;
  height: 550px;
  margin: 0 auto;
  background:-webkit-linear-gradient(top,lightseagreen,rgb(198, 236, 198),lightblue,lightskyblue, lightsteelblue,rgba(0, 0, 255, 0.37),#5a5add);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   color: #2c3e50;
   display: flex;
   flex-direction: column;
  //  background:
}
.nav{
  width: 90%;
  height: 45px;
  margin-top: 15px;
  border-bottom:1px solid #eee;
  margin-left: 5%;

}

.nav a{
  text-decoration: none;
  display: inline-block;
  width: 24%;
  text-align: center;
  color: white;
  padding: 3px;
}
.nav a.router-link-active{
color: aquamarine;
border: 1px solid white;
}
</style>
