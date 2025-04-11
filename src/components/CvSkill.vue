<template>
  <span class="cv-section-skill-section__skill" v-html="skill"></span>
</template>

<script>
export default {
  name: "CvSkill",
  props: {
    skill: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cv-section-skill-section__skill {
  margin: 0 2px;
  &:before {
    margin-right: 3px;
  }
  &:not(:first-child)::before {
    content: "•";
  }
}
</style>
