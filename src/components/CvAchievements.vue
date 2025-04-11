<template>
  <div v-if="data.length > 0" class="cv-section">
    <div class="cv-section-inner">
      <h3>Achievements</h3>
      <ul class="cv-section-list">
        <li v-for="item in data" :key="item">
          <span v-html="item"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Achievements } from "../data/data";
export default {
  name: "CvAchievements",

  data() {
    return {
      data: {},
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.data = Achievements;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
