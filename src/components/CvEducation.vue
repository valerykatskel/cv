<template>
  <div
    class="cv-section skill-section"
    v-if="education && education.length > 0"
  >
    <div class="cv-section-inner">
      <h3>{{ currentLanguage === "ru" ? "Образование" : "Education" }}</h3>

      <div
        v-for="item in education"
        :key="item.id"
        class="pv-entity__position-group mt2"
      >
        <div class="entity-name">
          <h3>{{ item.name }}</h3>
          <div>
            <strong>{{ item.position }}</strong>
            <br />
            <span>{{ item.start }} - {{ item.end }}</span>
          </div>
        </div>
        <div class="entity-description">
          <div v-html="item.description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { i18n } from "../i18n";

export default {
  name: "CvEducation",
  props: {
    education: {
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

<style lang="scss" scoped>
.entity-name {
  width: 31%;
  flex-shrink: 0;
  padding-right: 15px;
  h3 {
    font-size: 16px;
    font-weight: 700;
  }
}
.entity-description {
  width: 69%;
  flex-shrink: 0;
  position: relative;
}
.pv-entity__position-group {
  display: flex;
  margin-bottom: 15px;
  padding-bottom: 15px;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>
