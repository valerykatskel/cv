<template>
  <div class="language-switcher">
    <button
      v-for="lang in languages"
      :key="lang.code"
      :class="{ active: currentLanguage === lang.code }"
      @click="switchLanguage(lang.code)"
    >
      {{ lang.name }}
    </button>
  </div>
</template>

<script>
import { i18n } from "../i18n";

export default {
  name: "LanguageSwitcher",
  data() {
    return {
      languages: [
        { code: "en", name: "English" },
        { code: "ru", name: "Русский" },
      ],
      currentLanguage: i18n.currentLanguage,
    };
  },
  methods: {
    switchLanguage(langCode) {
      i18n.setLanguage(langCode);
      this.currentLanguage = langCode;
      this.$emit("language-changed", langCode);
    },
  },
};
</script>

<style scoped>
.language-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.language-switcher button {
  border: none;
  background: transparent;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.language-switcher button:hover {
  background: #f5f5f5;
}

.language-switcher button.active {
  background: #0073b1;
  color: white;
}
</style>
