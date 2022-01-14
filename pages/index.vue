<template>
  <div>
    <div class="swiper-wrapper">
      <div
        v-for="topBannerAd in topBannerAdList"
        :key="topBannerAd.id"
        :style="'background: ' + topBannerAd.color"
        class="swiper-slide">
        <a target="_blank" href="/">
          <img :src="topBannerAd.imageUrl" :alt="topBannerAd.title">
        </a>
      </div>
    </div>
    <div id="aCoursesList">
      <!-- 网校课程 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">Top Courses</span>
            </h2>
          </header>
          <div>
            <article class="comm-course-list">
              <ul id="bna" class="of">
                <li v-for="course in courseList" :key="course.id">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img
                        :src="course.cover"
                        :alt="course.title"
                        class="img-responsive"
                      >
                      <div class="cc-mask">
                        <a :href="'/course/'+course.id" title="开始学习" class="comm-btn c-btn-1">开始学习</a>
                      </div>
                    </section>
                    <h3 class="hLh30 txtOf mt10">
                      <a :href="'/course/'+course.id" :title="course.title" class="course-title fsize18 c-333">{{ course.title }}</a>
                    </h3>
                    <span v-if="Number(course.price) === 0" class="fr jgTag bg-green">
                      <i class="c-fff fsize12 f-fA">免费</i>
                    </span>
                    <span v-else class="fr jgTag ">
                      <i class="c-orange fsize12 f-fA"> ￥{{ course.price }}</i>
                    </span>
                    <span class="fl jgAttr c-ccc f-fA">
                      <i class="c-999 f-fA">{{ course.viewCount }}人学习</i>
                      |
                      <i class="c-999 f-fA">{{ course.buyCount }}人购买</i>
                    </span>
                  </div>
                </li>
              </ul>
              <div class="clear"/>
            </article>
            <section class="tac pt20">
              <a href="#" title="More Courses" class="comm-btn c-btn-2">More Courses</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校课程 结束 -->
      <!-- 学校 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">College</span>
            </h2>
          </header>
          <div>
            <article class="i-college-list">
              <ul class="of">
                <li v-for="college in collegeList" :key="college.id">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                      <a :href="'/college/'+college.id" :title="college.name">
                        <img :src="college.avatar" :alt="college.name" height="142">
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a :href="'/college/'+college.id" :title="college.name" class="fsize18 c-666">{{ college.name }}</a>
                    </div>
                  </section>
                </li>
              </ul>
              <div class="clear"/>
            </article>
            <section class="tac pt20">
              <a href="college" title="More college" class="comm-btn c-btn-2">More college</a>
            </section>
          </div>
        </section>
      </div>
      <!-- 学校 结束 -->
    </div>
  </div>
</template>

<script>
import indexApi from '~/api/index'
export default {
  async asyncData() {
    // 获取首页banner数据
    const topBannerAdListResponse = await indexApi.getTopBannerAdList()
    const topBannerAdList = topBannerAdListResponse.data.items
    // 获取名师和热门课程
    const indexDataResponse = await indexApi.getIndexData()
    const courseList = indexDataResponse.data.courseList
    const collegeList = indexDataResponse.data.collegeList

    return {
      topBannerAdList,
      courseList,
      collegeList
    }
  },
  data() {
    return {
      swiperOption: {
        // 配置分页
        pagination: {
          el: '.swiper-pagination'// 分页的dom节点
        },
        // 配置导航
        navigation: {
          nextEl: '.swiper-button-next', // 下一页dom节点
          prevEl: '.swiper-button-prev'// 前一页dom节点
        }
      }
    }
  }
}
</script>
