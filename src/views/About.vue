<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/user">user</router-link>
  </div>
</template>
<script>

export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // axios
    //   .post("https://www.runoob.com/try/ajax/demo_axios_post.php")
    //   .then((response) => (this.info = response))
    //   .catch(function (error) {
    //     // 请求失败处理
    //     console.log(error);
    //   });
    console.log(this)
  },
};
</script>