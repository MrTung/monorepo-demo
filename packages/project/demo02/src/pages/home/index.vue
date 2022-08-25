<template>
  <view class="uni-container">
    <view class="uni-header-logo">
      <image class="uni-header-image" src="/static/templateIndex.png"></image>
    </view>
    <view class="uni-hello-text">
      <text class="hello-text">以下是部分模板示例，更多模板见插件市场：</text>
      <uniLink class="hello-link" href="https://ext.dcloud.net.cn" :text="'https://ext.dcloud.net.cn'" :inWhiteList="true"></uniLink>
    </view>
  </view>
</template>
<script>
import { uniLink } from '@dcloudio/uni-ui';
import { mapState, mapMutations } from 'vuex';
import { format, http } from '@packages/utils';
import { getData } from '@packages/core/service/index.service';

export default {
  components: {
    uniLink,
  },
  data() {
    return {
      hideList: ['ucharts', 'nav-city-dropdown'],
      list: [
        {
          name: '导航栏带自定义按钮',
          url: 'nav-button',
        },
      ],
    };
  },
  created() {
    console.log(format(new Date()));

    http({ url: 'https://baidu.com', method: 'get' }).then((res) => {
      console.log(res, 'uni-app');
    });

    getData().then((res) => {
      console.log(res, 'uni-app');
    });
  },
  computed: {},
  // #endif
  methods: {},
};
</script>

<style>
@import '../../common/uni-nvue.css';
</style>
