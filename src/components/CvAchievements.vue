<template>
  <div
    class="cv-section skill-section"
    v-if="achievements && achievements.length > 0"
  >
    <div class="cv-section-inner">
      <h3>{{ currentLanguage === "ru" ? "Достижения" : "Achievements" }}</h3>

      <ul class="cv-section-list">
        <li
          v-for="(achievement, i) in achievements"
          :key="i"
          v-html="achievement"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { i18n } from "../i18n";

export default {
  name: "CvAchievements",
  props: {
    achievements: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentLanguage: i18n.currentLanguage,
    };
  },
  created() {
    // Обновление текущего языка при его изменении
    this.$watch(
      () => i18n.currentLanguage,
      (newVal) => {
        this.currentLanguage = newVal;
      }
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
