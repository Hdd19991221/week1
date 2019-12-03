<template>
   <div>
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

}
</script>

<style lang="scss">
.box {
  width: 100%;
  height: 120px;
  border: 1px solid lemonchiffon;
  margin-top: 40px;
  display: flex;
}
.onerr {
  width: 95px;
  height: 120px;
  text-align: center;
  line-height: 160px;
  color: #eee;
}
.onerr{
background:hotpink;
}
.two {
  width: 200px;
  margin-left: 20px;
  height: 40px;
  line-height: 40px;
}
.threer {
  margin-left: 17px;
    line-height: 40px;
}
.threer span {
  display: inline-block;
  background:orangered;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 3px;

}
.four b {
  margin-left: 20px;
  font-weight: normal;
  height: 40px;
  line-height: 40px;
}
</style>