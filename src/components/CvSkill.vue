<template>
  <span v-html="skill"></span>
</template>

<script>
export default {
  name: "CvSkill",
  props: {
    skill: {
      type: String,
      required: true,
    },
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
