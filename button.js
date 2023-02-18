

const Button = {
    data() {
        return {
          selected: '',
          isLoading: false,
          buttonText: 'Create'
        }
      },
      methods: {
        handleSubmit() {
            this.isLoading = true;
            setTimeout(() => {
              this.isLoading = false;
            }, 2000); 
          },
      }
}

Vue.createApp(Button).mount("#btn")