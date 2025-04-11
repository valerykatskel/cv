<template>
  <li class="cv-section-item">
    <img
      width="24"
      :src="certification.img"
      loading="lazy"
      height="24"
      :alt="getAltText(certification.name)"
      class="flex-shrink-zero mr2 lazy-image"
    />
    <div>
      <h4 class="t-16 t-black t-bold">
        {{ certification.name }} -
        <span class="t-normal">{{ certification.company }}</span>
      </h4>
      <p class="t-14 t-black">Issued {{ certification.issued }}</p>
      <p class="t-14 t-black">{{ certification.description }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "CvCertification",
  props: {
    certification: Object,
  },
  computed: {},
  methods: {
    getAltText(name) {
      return `Logo for  ${name}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
