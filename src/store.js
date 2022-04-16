import { reactive } from "vue";

export const store = reactive({
  count: 0,
  userName: "",
  isLoggedIn: false,
  getUserName(newName) {
    this.userName = newName;
  },
  login(){
      this.isLoggedIn = true;
  }
});
