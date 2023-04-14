import { render } from "./render";
// неполное изменение кнопки доступа (метод PATCH)
export const changePermissions = () => {
  const tbody = document.querySelector("#table-body");
  tbody.addEventListener("click", (e) => {
    if (e.target.closest("input[type='checkbox']")) {
      const tr = e.target.closest("tr");
      const input = tr.querySelector("input[type='checkbox']");
      const id = tr.dataset.key; // получаем data аттрибут и находим по нему id пользователя

      userService.changeUser(id, { permissions: input.checked }).then(() => {
        userService.getUsers().then((users) => {
          render(users);
        });
      });
    }
  });
};
