//! Тут пробувати робити логіку і апішки

// export const loadTicket = () => {
//     fetch("https://63c657fed307b76967371f48.mockapi.io/api/v1/contacts")
//      .then(response => {
//       if (!response.ok) {
//       throw new Error(response.status);
//       }
//       return response.json();
//       })
//       .then(data => {
//         console.log("show me something", data)
//       })
//      .catch(error => {
//       console.log(error.message)
//       });
// }



export function loadContacts() {
    return fetch("https://63c657fed307b76967371f48.mockapi.io/api/v1/contacts").then((responsive) =>
    responsive.json()
    );
  }
