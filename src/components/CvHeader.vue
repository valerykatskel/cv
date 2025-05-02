<template>
  <section class="cv-section cv-header">
    <div class="cv-section-inner">
      <div class="header-left">
        <div class="cv-personal-information">
          <h2>{{ displayName }}</h2>
          <h3>{{ displayPosition }}</h3>
          <h4>{{ age }}, {{ displayLocation }}</h4>
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
          :alt="displayName"
          class="profile-photo"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { i18n } from "../i18n";

export default {
  name: "CvHeader",
  props: {
    header: {
      type: Object,
      default: () => ({}),
    },
    contacts: {
      type: Array,
      default: () => [],
    },
    summary: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      personalInfo: {},
      formattedContacts: [],
      isShowDropdown: false,
    };
  },
  computed: {
    displayName() {
      return this.header && this.header.name ? this.header.name : "";
    },
    displayPosition() {
      return this.header && this.header.position ? this.header.position : "";
    },
    displayLocation() {
      return this.header && this.header.location ? this.header.location : "";
    },
    age() {
      if (!this.header || !this.header.yob) return "";

      try {
        let birthYear;
        // Если русская версия, извлекаем год из строки "9 октября 1983"
        if (i18n.currentLanguage === "ru") {
          // Извлекаем год из конца строки
          const yearMatch = this.header.yob.match(/\d{4}$/);
          birthYear = yearMatch ? parseInt(yearMatch[0]) : 1983;
        } else {
          // Для английской версии используем полную дату
          const birthDate = new Date(this.header.yob);
          birthYear = birthDate.getFullYear();
        }

        // Вычисляем возраст
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;

        // Возвращаем возраст с правильным текстом в зависимости от языка
        if (i18n.currentLanguage === "ru") {
          // Правильное склонение для русского языка
          let yearWord;
          const lastDigit = age % 10;
          const lastTwoDigits = age % 100;

          if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
            yearWord = "лет";
          } else if (lastDigit === 1) {
            yearWord = "год";
          } else if (lastDigit >= 2 && lastDigit <= 4) {
            yearWord = "года";
          } else {
            yearWord = "лет";
          }

          return `${age} ${yearWord}`;
        } else {
          return `${age} years old`;
        }
      } catch (e) {
        console.error("Error calculating age:", e);
        return i18n.currentLanguage === "ru" ? "N/A лет" : "N/A years old";
      }
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
      this.formattedContacts = this.formatContacts(this.contacts);
    },

    toggleDropdown() {
      this.isShowDropdown = !this.isShowDropdown;
    },

    checkHeader(prop) {
      return this.header && this.header[prop];
    },

    checkSummary(prop) {
      return this.summary && this.summary[prop];
    },
  },
  watch: {
    contacts: {
      handler() {
        this.formattedContacts = this.formatContacts(this.contacts);
      },
      immediate: true,
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
