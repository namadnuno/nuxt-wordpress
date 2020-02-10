<template>
  <div class="container" v-html="page.content.rendered">
    dwqdqw
  </div>
</template>

<script>
import { get } from '../routes/Pages';

export default {
  asyncData({params}) {
    return get('pages')
      .then(response => {
        console.log(response);
        return {
            page: response.data[0]
        };
      })
  },
  mounted() {
    console.log(this.page);
  }
}
</script>