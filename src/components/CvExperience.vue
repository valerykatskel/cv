<template>
  <div
    class="cv-section skill-section"
    v-if="experience && experience.length > 0"
  >
    <div class="cv-section-inner">
      <h3>{{ currentLanguage === "ru" ? "Опыт работы" : "Experience" }}</h3>

      <div
        v-for="item in experience"
        :key="item.id"
        class="pv-entity__position-group mt2"
      >
        <div class="entity-name">
          <h3>{{ item.name }} - {{ item.position }}</h3>
          <div>
            <strong>{{ item.type }}</strong>
            <br />
            <span
              >{{ item.start }} - {{ item.end ? item.end : "Present" }}</span
            >
          </div>
        </div>
        <div class="entity-description">
          <p class="entity-description-top" v-html="item.descriptionHeader"></p>
          <div v-html="item.description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { i18n } from "../i18n";
import { Experience } from "../data/data";
import moment from "moment";

export default {
  name: "CvExperience",
  props: {
    experience: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentLanguage: i18n.currentLanguage,
      data: {},
    };
  },
  created() {
    this.$watch(
      () => i18n.currentLanguage,
      (newVal) => {
        this.currentLanguage = newVal;
      }
    );
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
    },
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.data = Experience;
    });
  },
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
  .entity-description-top {
    margin-bottom: 20px;
  }
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
