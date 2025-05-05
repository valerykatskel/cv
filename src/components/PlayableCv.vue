<template>
  <div class="core-rail container-with-shadow p0" role="main">
    <language-switcher @language-changed="loadLocaleData" />
    <cv-header
      :header="localeData.Header"
      :contacts="localeData.contacts"
      :summary="localeData.Summary"
    />
    <cv-achievements :achievements="localeData.Achievements" />

    <cv-experience :experience="localeData.Experience" />

    <cv-education :education="localeData.Education" />

    <!-- CV Skills section start -->
    <div
      v-if="localeData.Skills && localeData.Skills.length > 0"
      class="cv-section skill-section"
    >
      <div class="cv-section-inner">
        <h3>{{ currentLanguage === "ru" ? "Навыки" : "Skills" }}</h3>

        <ul class="cv-section-list">
          <li v-for="(skill, index) in localeData.Skills" :key="index">
            <cv-skill :skill="skill" />
          </li>
        </ul>
      </div>
    </div>
    <!-- CV Skills section end -->

    <!-- CV Projects section start -->
    <div
      v-if="localeData.Projects && localeData.Projects.length > 0"
      class="cv-section"
    >
      <div class="cv-section-inner">
        <h3>{{ currentLanguage === "ru" ? "Проекты" : "Projects" }}</h3>

        <ul
          class="pv-accomplishments-block__list pv-accomplishments-block__list--has-more"
        >
          <cv-project
            v-for="project in localeData.Projects"
            :key="project.id"
            :project="project"
          />
        </ul>
      </div>
    </div>
    <!-- CV Projects section end -->
  </div>
</template>

<script>
import CvHeader from "./CvHeader";
import CvAchievements from "./CvAchievements";
import CvProject from "./CvProject";
import CvSkill from "./CvSkill";
import CvExperience from "./CvExperience";
import CvEducation from "./CvEducation";
import LanguageSwitcher from "./LanguageSwitcher";

export default {
  name: "PlayableCv",
  components: {
    CvHeader,
    CvAchievements,
    CvProject,
    CvSkill,
    CvExperience,
    CvEducation,
    LanguageSwitcher,
  },
  data() {
    return {
      localeData: {
        Header: {},
        contacts: [],
        Summary: {},
        Achievements: [],
        Experience: [],
        Skills: [],
        Education: [],
        Projects: [],
      },
      currentLanguage: "ru",
    };
  },
  async mounted() {
    await this.loadLocaleData();
  },
  methods: {
    async loadLocaleData() {
      try {
        // Всегда загружаем данные из playable.js
        const localeModule = await import("../data/playable.js");

        // Загружаем данные из модуля
        this.localeData = {
          Header: localeModule.Header || {},
          contacts: localeModule.contacts || [],
          Summary: localeModule.Summary || {},
          Achievements: localeModule.Achievements || [],
          Experience: localeModule.Experience || [],
          Skills: localeModule.Skills || [],
          Education: localeModule.Education || [],
          Projects: localeModule.Projects || [],
        };
      } catch (error) {
        console.error("Failed to load playable resume data", error);
      }
    },
  },
};
</script>

<style lang="scss">
.cv-section {
  position: relative;
  overflow: hidden;
  padding: 0 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  &:last-of-type {
    margin-bottom: 48px;
    border-bottom: none;
  }

  .cv-section-inner {
    margin: 30px 0;

    h3 {
      font-size: 20px;
      line-height: 1;
      margin-bottom: 15px;
    }

    .cv-section-list {
      margin-left: 16px;

      li {
        font-size: 14px;
        line-height: 23px;
      }
    }
  }
}
</style>
