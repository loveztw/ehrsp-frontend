<template>
  <div  :style="backgroundStyle">
    <my-header></my-header>
    <el-container>
      <el-main>
        <div class="line1">
          <div class="slide">
            <el-carousel>
              <el-carousel-item style="background-color: grey">abc</el-carousel-item>
              <el-carousel-item style="background-color: grey">ddd</el-carousel-item>
            </el-carousel>
          </div>
          <div class="tab">
            <el-tabs style="margin: 10px">
              <el-tab-pane label="国务院" name="first">
                <el-table :data="tableData" :show-header="false" max-height="280px" size="small" style="width: 100%; margin-top: -10px">
                  <el-table-column lable="标题" prop="title" width="470">
                  <template slot-scope="scope">
                    <i class="el-icon-news"></i>
                    <span style="margin-left: 10px">{{ scope.row.title }}</span>
                  </template>
                  </el-table-column>
                  <el-table-column lable="时间" prop="date" width="100"></el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="湖北要闻" name="second">湖北要闻</el-tab-pane>
              <el-tab-pane label="武汉要闻" name="third">武汉要闻</el-tab-pane>
              <el-tab-pane label="通知公告" name="fourth">通知公告</el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="line2">
          <div class="picbox"></div>
          <div class="picbox"></div>
          <div class="picbox"></div>
          <div class="picbox"></div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
  /* 去掉浏览器右侧滚动条 */
  html, body {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
  }

  .el-main {
    width: 100%;
  }

  .line1 {
    display: flex;
    justify-content: space-between;
    height: 303px;
    /* elmain左右对齐 */
    margin-left: -20px;
    margin-right: -20px;
  }

  .line2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 100px;
    /* elmain左右对齐 */
    margin-left: -20px;
    margin-right: -20px;
  }

  .picbox {
    background-color: yellow;
    width: 300px;
    height: 80px;
    margin-top: 20px;
  }

  .slide {
    /* height: 300px; */
    width: 49%;
  }
  .tab {
    /* height: 100%; */
    width: 49%;
    border-style: solid;
    border-width: 2px;
    border-color: rgb(187, 240, 250);
  }

</style>

<script>
import myHeader from '@/components/Header'

export default {
  name: 'Main',
  components: {
    myHeader
  },
  data () {
    return {
      backgroundStyle: {
        height: window.innerHeight + 'px',
        // width: window.innerWidth - 30 + 'px',
        width: '1250px',
        margin: '0 auto' /* 水平居中 */
      },
      tableData: [{
        title: '我的文章11',
        date: '2019-09-01'
      }, {
        title: '我的文章2',
        date: '2019-09-02'
      }, {
        title: '我的文章2',
        date: '2019-09-02'
      }, {
        title: '我的文章2',
        date: '2019-09-02'
      }, {
        title: '我的文章2',
        date: '2019-09-02'
      }, {
        title: '我的文章2',
        date: '2019-09-02'
      }, {
        title: '我的文章2',
        date: '2019-09-02'
      }, {
        title: '我的文章2',
        date: '2019-09-02'
      }]
    }
  }
}
</script>
