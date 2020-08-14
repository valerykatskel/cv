<template>
  <div v-if="data.length > 0" class="cv-section">
    <div class="cv-section-inner">
      <h3>Experience</h3>

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
            <p class="t-16 t-black">
              {{ item.name }}
              <span
                v-show="item.type !== undefined && item.type.trim().length > 0"
                class="pv-entity__secondary-title separator"
                >{{ item.type }}</span
              >
            </p>
            <p class="t-14 t-black">
              {{ getDuration(item.start, item.end) }}
              <span
                v-show="
                  item.location !== undefined && item.location.trim().length > 0
                "
                class="pv-entity__secondary-title separator"
                >{{ item.location }}</span
              >
            </p>

            <div class="break-words t-14 t-black item-description">
              <p v-if="item.descriptionHeader != ''" class="description-header">
                {{ item.descriptionHeader }}
              </p>
              <div
                class="description-content"
                dir="ltr"
                v-html="item.description"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Experience } from "../data/data";
import moment from "moment";
export default {
  name: "CvExperience",
  data() {
    return {
      data: {}
    };
  },
  methods: {
    getLogoAlt(name) {
      return `Logo for ${name}`;
    },
    getDuration(start, end) {
      const tsStart = Date.parse(start);
      const tsEnd = end === "" ? Date.now() : Date.parse(end);
      const duration = Math.ceil(
        moment.duration((tsEnd - tsStart) / 1000, "seconds").asMonths()
      );
      const years = Math.floor(duration / 12);
      const months = duration % 12;
      let durationText = "";
      durationText +=
        years === 0 ? "" : `${years} ${years > 1 ? "years" : "year"}`;

      if (months > 0) {
        durationText +=
          years === 0 ? `${months} months` : ` and ${months} months`;
      }

      return end === ""
        ? `${durationText} (${start} – Present)`
        : `${durationText} (${start} – ${end})`;
    }
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.data = Experience;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.pv-entity__secondary-title.separator::before {
  content: "\00B7";
  padding: 0 4px 0 0;
}
.item-description {
  margin-top: 15px;

  .description-header {
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 14px;
    display: inline-block;
  }

  .description-content {
    p {
      margin-top: 5px;
      font-size: 14px;

      &:first-child {
        margin-top: 0;
      }
    }

    ul {
      list-style-type: disc;
      margin-left: 16px;
      margin-top: 5px;
      li {
        font-size: 14px;
      }
    }
  }
}
</style>
