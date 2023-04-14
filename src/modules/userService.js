// класс со всеми методами
export class UserService {
  getUsers() {
    return fetch("http://localhost:4545/users").then((response) =>
      response.json()
    );
  }

  addUser(user) {
    return fetch("http://localhost:4545/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(user),
    }).then((response) => response.json());
  }

  removeUser(id) {
    return fetch(`http://localhost:4545/users/${id}`, {
      method: "DELETE",
    }).then((response) => response.json());
  }

  changeUser(id, data) {
    return fetch(`http://localhost:4545/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    }).then((res) => res.json());
  }

  getUser(id) {
    return fetch(`http://localhost:4545/users/${id}`).then((res) => res.json());
  }
  editUser(id, user) {
    return fetch(`http://localhost:4545/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    }).then((res) => res.json());
  }

  // фильтрация при нажатии на кнопки (?title=json-server&author=typicode)
  filterUsers(filterOption) {
    return fetch(`http://localhost:4545/users?${filterOption}=true`).then(
      (res) => res.json()
    );
  }

  // сортировка по порядку (?_sort=user,views&_order=desc,asc) (asc или desc)
  getSortUsers(sortOption) {
    return fetch(
      `http://localhost:4545/users?_sort=${sortOption.name}&_order=${sortOption.value}`
    ).then((res) => res.json());
  }

  // реализация поиска (?name_like=al)

  getSearchUsers(str) {
    return fetch(`http://localhost:4545/users?name_like=${str}`).then((res) =>
      res.json()
    );
  }
}
