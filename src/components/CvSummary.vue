<template>
  <div class="cv-section">
    <div class="cv-section-inner">
      <h3>Summary</h3>

      <p class="mt2 mb4 white-space-pre-wrap break-words t-14 t-black">
        <span dir="ltr" v-html="data.text" />
      </p>
    </div>
  </div>
</template>

<script>
import { Summary } from "../data/data";
export default {
  name: "CvSummary",

  data() {
    return {
      data: {},
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.data = { ...Summary };
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
