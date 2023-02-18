const App = {
  data() {
    return {
      options: ["Не выбрано",'Сделка', 'Контакт', 'Компания'],
      selectedOption: null,
      isOpen: false,
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
    },
  },
}

Vue.createApp(App).mount("#dropdown")