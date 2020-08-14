<template>
  <div class="cv-section cv-header">
    <div class="cv-section-inner">
      <div class="header-left">
        <h2>{{ data.name }}</h2>
        <h3>{{ data.position }}</h3>
        <h4>{{ age }}, {{ data.location }}</h4>

        <ul class="cv-contact-info">
          <li><span class="name">E-mail:</span>ne.vse.srazu@gmail.com</li>
          <li><span class="name">Skype:</span>bestnickname</li>
          <li>
            <span class="name">Phone/WhatsApp/Telegram/Viber:</span>+375 29 768
            86 32
          </li>
          <li>
            <span class="name">Linkedin:</span>
            <a href="https://www.linkedin.com/in/valerykatskel/"
              >linkedin.com/in/valerykatskel</a
            >
          </li>
          <li>
            <span class="name">GitHub:</span>
            <a href="https://github.com/valerykatskel"
              >github.com/valerykatskel</a
            >
          </li>
        </ul>
      </div>
      <div class="header-right">
        <img src="@/assets/photo.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { Header } from "../data/data";
import moment from "moment";

export default {
  name: "CvHeader",

  data() {
    return {
      data: {}
    };
  },
  computed: {
    age() {
      const tsStart = Date.parse(this.data.yob);
      const tsEnd = Date.now();
      const duration = Math.ceil(
        moment.duration((tsEnd - tsStart) / 1000, "seconds").years()
      );

      return `${duration} years old`;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.data = { ...Header };
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2,
h3 {
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
}
h2 {
  font-size: 3.2rem;
  line-height: 1.25;
}
.cv-header {
  .cv-section-inner {
    display: flex;
    justify-content: space-between;
    h2 {
      margin-top: -8px;
    }
    h3 {
      font-weight: normal;
      font-size: 18px;
      margin-bottom: 0;
      margin-top: 5px;
    }
    h4 {
      font-size: 14px;
      color: gray;
      margin-top: 5px;
    }
  }

  .header-right {
    img {
      height: 200px;
      vertical-align: bottom;
    }
  }
}
.cv-contact-info {
  margin: 16px 0 0;
  padding: 0;
  list-style-type: none;

  li {
    font-size: 14px;

    .name {
      display: inline-block;
      width: 280px;
    }
  }
}
</style>
