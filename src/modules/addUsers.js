import { render } from "./render";
// добавление пользователя (метод POST)
export const addUsers = () => {
  const form = document.querySelector("form ");
  const nameInput = form.querySelector("#form-name");
  const emailInput = form.querySelector("#form-email");
  const childrenInput = form.querySelector("#form-children");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.dataset.method) {
      // если data аттрибута нет, отправляем post запрос
      const user = {
        name: nameInput.value,
        email: emailInput.value,
        children: childrenInput.checked,
        permissions: false,
      };

      userService.addUser(user).then(() => {
        // добавляем пользователя и отправляем на сервер
        userService.getUsers().then((users) => {
          // получаем всех пользователей get запросом и отрисовывем страницу
          render(users);
          form.reset(); // очищаем форму
        });
      });
    }
  });
};
