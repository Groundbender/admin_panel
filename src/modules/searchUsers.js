import { render } from "./render";
import { debounce } from "./helpers";

export const searchUsers = () => {
  const input = document.querySelector("#search-input");

  // наш колбэк, который мы обернем в debounce
  const debounceSearch = debounce(() => {
    userService.getSearchUsers(input.value).then((users) => {
      render(users);
    });
  }, 500);

  input.addEventListener("input", debounceSearch);
};
