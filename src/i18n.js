import Vue from "vue";

// Функция для получения сохраненного языка из localStorage
export const getSavedLanguage = () => {
  const savedLanguage = localStorage.getItem("cvLanguage");
  return savedLanguage || "en"; // По умолчанию английский
};

// Функция для установки языка в localStorage
export const setLanguage = (language) => {
  localStorage.setItem("cvLanguage", language);
  return language;
};

// Создаем реактивный объект для отслеживания текущего языка
export const i18n = Vue.observable({
  currentLanguage: getSavedLanguage(),

  // Метод для переключения языка
  setLanguage(language) {
    this.currentLanguage = setLanguage(language);
  },

  // Получение текущего модуля данных для выбранного языка
  async getCurrentLocale() {
    try {
      return await import(`./data/${this.currentLanguage}.js`);
    } catch (error) {
      console.error(
        `Failed to load language module: ${this.currentLanguage}`,
        error
      );
      // В случае ошибки пытаемся загрузить английский язык
      this.setLanguage("en");
      return await import("./data/en.js");
    }
  },
});

export default i18n;
