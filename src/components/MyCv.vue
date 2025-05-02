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
    <!-- <div v-if="localeData.Projects && localeData.Projects.length > 0" class="cv-section">
      <div class="cv-section-inner">
        <h3>{{ currentLanguage === 'ru' ? 'Проекты' : 'Projects' }}</h3>

        <ul class="pv-accomplishments-block__list pv-accomplishments-block__list--has-more">
          <cv-project v-for="project in localeData.Projects" :key="project.id" :project="project" />
        </ul>
      </div>
    </div>-->
    <!-- CV Projects section end -->

    <!-- CV Licenses & Certifications section start -->
    <!-- <div v-if="localeData.Certifications && localeData.Certifications.length > 0" class="cv-section">
      <h3>{{ currentLanguage === 'ru' ? 'Лицензии и сертификаты' : 'Licenses & certifications' }}</h3>

      <ul>
        <cv-certification
          v-for="certification in localeData.Certifications"
          :key="certification.id"
          :certification="certification"
        />
      </ul>
    </div>-->
    <!-- CV Licenses & Certifications section end -->
    <div v-if="CVForPoland" class="cv-section disclamer-section">
      <p>
        „Na podstawie Rozporządzenia Parlamentu Europejskiego i Rady (UE)
        2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
        związku z przetwarzaniem danych osobowych i w sprawie swobodnego
        przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
        rozporządzenie o ochronie danych, tzw. RODO) (Dz.U.UE L z dnia 4 maja
        2016 r.) wyrażam zgodę na przetwarzanie przez GFT Poland sp. z o.o. z
        siedzibą w Łodzi (90-118 Łódź, ul. Kilińskiego 66) udostępnionych przeze
        mnie moich danych osobowych
      </p>
      <p>
        a) w celu prowadzenia rekrutacji na stanowisko wskazane w ogłoszeniu
      </p>
      <p>
        b) w celach związanych z organizowanymi w przyszłości procesami
        rekrutacji."
      </p>
    </div>
  </div>
</template>

<script>
import { i18n } from "../i18n";
import CvHeader from "./CvHeader";
import CvAchievements from "./CvAchievements";
// import CvProject from "./CvProject";
import CvSkill from "./CvSkill";
import CvExperience from "./CvExperience";
import CvEducation from "./CvEducation";
import LanguageSwitcher from "./LanguageSwitcher";
// import CvCertification from "./CvCertification";
export default {
  name: "MyCv",
  components: {
    CvHeader,
    CvAchievements,
    // CvProject,
    CvSkill,
    CvExperience,
    CvEducation,
    LanguageSwitcher,
    // CvCertification
  },
  data() {
    return {
      CVForPoland: false,
      localeData: {
        Header: {},
        contacts: [],
        Summary: {},
        Achievements: [],
        Experience: [],
        Skills: [],
        Education: [],
        Projects: [],
        Certifications: [],
      },
      currentLanguage: i18n.currentLanguage,
    };
  },
  async mounted() {
    await this.loadLocaleData();
  },
  methods: {
    async loadLocaleData() {
      this.currentLanguage = i18n.currentLanguage;
      const localeModule = await i18n.getCurrentLocale();

      // Загружаем данные из модуля языка
      this.localeData = {
        Header: localeModule.Header || {},
        contacts: localeModule.contacts || [],
        Summary: localeModule.Summary || {},
        Achievements: localeModule.Achievements || [],
        Experience: localeModule.Experience || [],
        Skills: localeModule.Skills || [],
        Education: localeModule.Education || [],
        Projects: localeModule.Projects || [],
        Certifications: localeModule.Certifications || [],
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

  &.disclamer-section {
    padding-top: 20px;
    overflow: hidden;
    padding-bottom: 20px;
    margin-top: -30px;
    background: #fff;
    p {
      font-size: 10px;
      color: grey;
      margin-top: 5px;
      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>
