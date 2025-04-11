<template>
  <li
    class="cv-project cv-project--with-separator cv-project--first cv-project--expanded"
  >
    <h4 class="cv-project__title t-14 t-bold">
      <span class="visually-hidden">Project name</span>
      {{ project.name }}
    </h4>

    <p class="cv-project__date t-14">{{ projectDuration }}</p>

    <p class="cv-project__description t-14" v-html="project.description">
      <span class="visually-hidden">Project description</span>
    </p>
    <a
      :href="project.url"
      target="_blank"
      rel="noopener noreferrer"
      class="cv-project__external-source"
    >
      <span class="visually-hidden">See project {{ project.name }}</span>
      {{ project.url }}
    </a>
  </li>
</template>

<script>
export default {
  name: "CvProject",
  props: {
    project: Object,
  },
  computed: {
    projectDuration() {
      return this.project.start === this.project.end
        ? this.project.start
        : `${this.project.start} – ${this.project.end}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cv-project {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 72px;
  animation: fade-in 334ms cubic-bezier(0.4, 0, 1, 1);

  &--with-separator {
    // cv-project--with-separator
    &:after {
      content: "";
      border: 0;
      border-color: rgba(0, 0, 0, 0.15);
      border-top: 1px solid rgba(0, 0, 0, 0.15);
      display: block;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
}
.cv-project--last::after {
  display: none;
}
.cv-project__title > .visually-hidden {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.cv-project__external-source {
  text-decoration: none;
  font-weight: 600;
  background-color: transparent;
  border: 0;
  color: #0073b1;
  margin-top: 16px;
  font-size: 14px;
}
.cv-project__external-source:visited {
  color: #0073b1;
}
.cv-project__external-source:focus,
.cv-project__external-source:hover {
  text-decoration: underline;
  color: #006097;
}
.cv-project__external-source:active {
  color: #004b7c;
}
.cv-project {
  padding: 24px 60px 24px 0;
}
.cv-project:first-child {
  padding-top: 16px;
}
.cv-project:last-child::after {
  border: none;
}
.cv-project__description {
  line-height: 1.5;
  margin-top: 16px;
}
</style>
