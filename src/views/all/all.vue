<template>
  <div>
    <div class="box">
      <p class="one">进行中</p>
      <div class="smallbox">
        <p class="two">客户经理掌上宝测试</p>
        <p class="three">
          <span class="col"></span>
          <span class="col"></span>
          <span class="col"></span>
          <span></span>
          <span></span>
        </p>
        <p class="four">
          <b>开始日期 2013年04月03日</b>
          <b>结束时间 2013年05月03日</b>
        </p>
      </div>
    </div>
    <div class="box">
      <p class="oner">终止中</p>
      <div class="smallbox">
        <p class="two">biubiubiu测试</p>
        <p class="three">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </p>
        <p class="four">
          <b>开始日期 2019年04月03日</b>
          <b>结束时间 2019年05月03日</b>
        </p>
      </div>
    </div>
    <div class="box">
      <p class="onerr">已完成</p>
      <div class="smallbox">
        <p class="two">狼人杀测试</p>
        <p class="threer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </p>
        <p class="four">
          <b>开始日期 2017年09月21日</b>
          <b>完成时间 2017年12月21日</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("hdd");
  }
};
</script>

<style lang="scss">
.box {
  width: 100%;
  height: 120px;
  border: 1px solid lemonchiffon;
  margin-top: 40px;
  display: flex;
}
.one {
  width: 95px;
  height: 120px;
  background: lightgreen;
  text-align: center;
  line-height: 160px;
  color: #eee;
}
.oner {
  width: 95px;
  height: 120px;
  background: tomato;
  text-align: center;
  line-height: 160px;
  color: #eee;
}
.onerr {
  width: 95px;
  height: 120px;
  background: hotpink;
  text-align: center;
  line-height: 160px;
  color: #eee;
}
.two {
  width: 200px;
  margin-left: 20px;
  height: 40px;
  line-height: 40px;
}
.three {
  margin-left: 17px;
  line-height: 40px;
}
.threer {
  margin-left: 17px;
  line-height: 40px;
}
.three span {
  display: inline-block;
  background: #eee;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 3px;
}
.threer span {
  display: inline-block;
  background: #eee;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 3px;
}
.three .col {
  background: orangered;
}
.four b {
  margin-left: 20px;
  font-weight: normal;
  height: 40px;
  line-height: 40px;
}
</style>