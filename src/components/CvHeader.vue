<template>
  <section class="cv-section cv-header">
    <div class="cv-section-inner">
      <div class="header-left">
        <div class="cv-personal-information">
          <h2>{{ personalInfo.name }}</h2>
          <h3>{{ personalInfo.position }}</h3>
          <h4>{{ age }}, {{ personalInfo.location }}</h4>
        </div>

        <ul class="cv-contact-info">
          <li v-for="contact in formattedContacts" :key="contact.key">
            <span class="name">{{ contact.key }}</span>
            <template v-if="contact.url">
              <a :href="contact.url" target="_blank" rel="noopener">
                {{ contact.value }}
              </a>
            </template>
            <template v-else>
              {{ contact.value }}
            </template>
          </li>
        </ul>
      </div>

      <div class="header-right">
        <img
          src="@/assets/photo.jpg"
          :alt="personalInfo.name"
          class="profile-photo"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { Header, contacts } from "../data/data";
import moment from "moment";

export default {
  name: "CvHeader",

  data() {
    return {
      personalInfo: {},
      formattedContacts: [],
    };
  },

  computed: {
    age() {
      if (!this.personalInfo.yob) return "";

      const birthDate = Date.parse(this.personalInfo.yob);
      const now = Date.now();
      const years = moment
        .duration((now - birthDate) / 1000, "seconds")
        .years();

      return `${Math.ceil(years)} years old`;
    },
  },

  methods: {
    formatContacts(contactsList) {
      return contactsList.map((contact) => ({
        ...contact,
        url: this.isUrl(contact.value) ? contact.value : null,
      }));
    },

    isUrl(value) {
      return typeof value === "string" && value.startsWith("http");
    },

    initializeData() {
      this.personalInfo = { ...Header };
      this.formattedContacts = this.formatContacts(contacts);
    },
  },

  mounted() {
    this.$nextTick(this.initializeData);
  },
};
</script>

<style scoped lang="scss">
.cv-header {
  .cv-section-inner {
    display: flex;
    justify-content: space-between;
  }
}

.header-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header-right {
  .profile-photo {
    height: 200px;
    vertical-align: bottom;
  }
}

.cv-personal-information {
  h2 {
    font-size: 3.2rem;
    line-height: 1.25;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.9);
    margin-top: -8px;
  }

  h3 {
    font-weight: normal;
    font-size: 18px;
    margin: 5px 0 0;
    color: rgba(0, 0, 0, 0.9);
  }

  h4 {
    font-size: 14px;
    color: gray;
    margin-top: 5px;
  }
}

.cv-contact-info {
  margin: 16px 20px 0 0;
  padding: 0;
  list-style-type: none;

  li {
    font-size: 14px;
    display: flex; // Добавлено
    flex-wrap: wrap; // Добавлено
  }

  .name {
    display: inline-block;
    min-width: 280px;
    flex-shrink: 0;
  }

  a {
    word-break: break-all;
    color: #0073b1;
    text-decoration: none;
    flex: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
