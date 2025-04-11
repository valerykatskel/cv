<template>
  <div v-if="data.length > 0" class="cv-section">
    <div class="cv-section-inner">
      <h3>Education</h3>

      <ul
        class="pv-accomplishments-block__list pv-accomplishments-block__list--has-more"
      >
        <li
          class="cv-section-item"
          v-for="item in data"
          :key="item.id"
          :item="item"
        >
          <div class="full-width">
            <h4 class="t-16 t-black t-bold">{{ item.position }}</h4>
            <p class="t-16 t-black">{{ item.name }}</p>
            <p class="t-14 t-black">{{ getDuration(item.start, item.end) }}</p>
            <div class="break-words t-14 t-black item-description">
              <div
                dir="ltr"
                class="description-content"
                v-html="item.description"
              ></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Education } from "../data/data";
export default {
  name: "CvEducation",
  data() {
    return {
      data: {},
    };
  },
  methods: {
    getDuration(start, end) {
      return end === "" ? `${start} – Present` : `${start} – ${end}`;
    },
  },
  computed: {
    duration() {
      return this.data;
      // return this.data.end === ""
      //   ? `${this.data.start} – Present`
      //   : `${this.data.start} – ${this.data.end}`;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.data = Education;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
