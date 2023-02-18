const App={
    data() {
        return {
          selectedOption: "none",
          isActive: false,
          isLoading: false,
        };
      },
      methods: {
        toggleButtonStatus() {
          if (this.selectedOption === "none") {
            this.isActive = false;
          } else {
            this.isActive = true;
          }
        },
        onClick() {
          this.isLoading = true;
          setTimeout(() => {
            this.isLoading = false;
          }, 2000);
        },
      },
      computed: {
        buttonLabel() {
          return this.isActive ? "Создать" : "Создать";
        },
      },
}

Vue.createApp(App).mount("#app") 