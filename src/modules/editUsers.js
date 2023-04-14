import { render } from "./render";
// редактирование пользователей  (метод PUT)
export const editUsers = () => {
  const tbody = document.querySelector("#table-body");
  const form = document.querySelector("form ");
  const nameInput = form.querySelector("#form-name");
  const emailInput = form.querySelector("#form-email");
  const childrenInput = form.querySelector("#form-children");

  tbody.addEventListener("click", (e) => {
    if (e.target.closest(".btn-edit")) {
      const tr = e.target.closest("tr");
      const id = tr.dataset.key;

      console.log(id);
      userService.getUser(id).then((user) => {
        // console.log(user); // user - полученный объект из массива хранящемся в бд
        nameInput.value = user.name;
        emailInput.value = user.email;
        childrenInput.checked = user.children;

        form.dataset.method = id; // вешаем флажок на форму (data аттрибут) и далее проверим его наличие (если есть, то put запрос)
      });
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (form.dataset.method) {
      // если data аттрибут есть не отрпавляем post, а делаем put запрос на сервер
      const id = form.dataset.method;
      const user = {
        name: nameInput.value,
        email: emailInput.value,
        children: childrenInput.checked,
        permissions: false,
      };

      // console.log(user);
      // console.log(form.dataset.method);
      userService.editUser(id, user).then(() => {
        userService.getUsers().then((users) => {
          render(users);
          form.reset();
          form.removeAttribute("data-method");
        });
      });
    }
  });
};
