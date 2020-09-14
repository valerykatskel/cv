<template>
  <div class="core-rail container-with-shadow p0" role="main">
    <cv-header />
    <cv-achievements />

    <cv-experience />

    <cv-education />

    <!-- CV Skills section start -->
    <div v-if="skills.length > 0" class="cv-section skill-section">
      <div class="cv-section-inner">
        <h3>Skills</h3>

        <ul class="cv-section-list">
          <li v-for="skill in skills" :key="skill.id">
            <cv-skill :skill="skill" />
          </li>
        </ul>
      </div>
    </div>
    <!-- CV Skills section end -->

    <!-- CV Projects section start -->
    <!-- <div v-if="projects.length > 0" class="cv-section">
      <div class="cv-section-inner">
        <h3>Projects</h3>

        <ul class="pv-accomplishments-block__list pv-accomplishments-block__list--has-more">
          <cv-project v-for="project in projects" :key="project.id" :project="project" />
        </ul>
      </div>
    </div>-->
    <!-- CV Projects section end -->

    <!-- CV Licenses & Certifications section start -->
    <!-- <div v-if="certifications.length > 0" class="cv-section">
      <h3>Licenses &amp; certifications</h3>

      <ul>
        <cv-certification
          v-for="certification in certifications"
          :key="certification.id"
          :certification="certification"
        />
      </ul>
    </div>-->
    <!-- CV Licenses & Certifications section end -->
    <div class="cv-section disclamer-section">
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
        rekrutacji.”
      </p>
    </div>
  </div>
</template>

<script>
import { Projects, Skills, Certifications } from "../data/data";
import CvHeader from "./CvHeader";
import CvAchievements from "./CvAchievements";
// import CvProject from "./CvProject";
import CvSkill from "./CvSkill";
import CvExperience from "./CvExperience";
import CvEducation from "./CvEducation";
// import CvCertification from "./CvCertification";
export default {
  name: "MyCv",
  components: {
    CvHeader,
    CvAchievements,
    // CvProject,
    CvSkill,
    CvExperience,
    CvEducation
    // CvCertification
  },
  data() {
    return {
      projects: [],
      skills: [],
      experience: [],
      certifications: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.projects = Projects;
      this.skills = Skills;
      this.certifications = Certifications;
    });
  }
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
