<template>
  <div id="aCoursesList" className="bg-fa of">
    <!-- 讲师列表 开始 -->
    <section className="container">
      <header className="comm-title">
        <h2 className="fl tac">
          <span className="c-333">College List</span>
        </h2>
      </header>
      <section className="c-sort-box unBr">
        <div>
          <!-- /无数据提示 开始-->
          <section v-if="items.length===0" class="no-data-wrap">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">No relevant data is available and efforts are underway to increase it....</span>
          </section>
          <!-- /无数据提示 结束-->

          <!-- /数据列表 开始-->
          <article v-if="items.length>0" class="i-college-list">
            <ul class="of">
              <li v-for="item in items" :key="item.id">
                <section class="i-teach-wrap">
                  <div class="i-teach-pic">
                    <a :href="'/college/'+item.id" :title="item.name">
                      <img :src="item.avatar" :alt="item.name" height="142">
                    </a>
                  </div>
                  <div class="mt10 hLh30 txtOf tac">
                    <a :href="'/college/'+item.id" :title="item.name" class="fsize18 c-666">{{ item.name }}</a>
                  </div>
                  <div class="hLh30 txtOf tac">
                    <span class="fsize14 c-999" >{{ item.intro }}</span>
                  </div>
                  <div class="mt15 i-q-txt">
                    <p class="c-999 f-fA">{{ item.career }}</p>
                  </div>
                </section>
              </li>
            </ul>
            <div class="clear"/>
          </article>
          <!-- /数据列表 结束-->
        </div>
      </section>
    </section>
    <!-- /讲师列表 结束 -->
  </div>
</template>
<script>
import collegeApi from '~/api/college'
export default {
  // 异步获取数据
  asyncData() {
    return collegeApi.getList().then(response => {
      return {
        items: response.data.items
      }
    })
  },

  data() {
    return {
      test: 'test' // 这里的数据最后会和asyncData中的数据定义合并
    }
  }
}
</script>
