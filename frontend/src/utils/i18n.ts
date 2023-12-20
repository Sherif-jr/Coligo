// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        greeting: "Hello, World!",
        examTime: "Exam Time",
        mainCaption:
          "Here we are, Are you ready to fight? Don't worry, we prepared some tips to be ready for your exams.",
        qoute: '"Nothing happens until something moves" - Albert Einstein',
        ViewExamTips: "View exam tips",
        announcements: "Announcements",
        WhatsDue: "What's due",
        all: "All",
        startQuiz: "Start Quiz",
      },
    },
    es: {
      translation: {
        greeting: "¡Hola, Mundo!",
        examTime: "Tiempo de examen",
        mainCaption:
          "Aquí estamos, ¿estás listo para luchar? No te preocupes, preparamos algunos consejos para que estés listo para tus exámenes.",
        qoute: '"Nada sucede hasta que algo se mueve" -Albert Einstein',
        ViewExamTips: "Ver consejos para el examen",
        announcements: "Anuncios",
        WhatsDue: "Lo que se debe",
        all: "Todo",
        startQuiz: "Iniciar prueba",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
