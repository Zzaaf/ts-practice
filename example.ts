// подключаем axios
import axios from 'axios'

// подключаем интерфейс
import pokeCardInt from './interfaces/pokeCardInt'

// формируем переменную адреса запроса
const url = 'https://pokeapi.co/api/v2/pokemon/pikachu'

// инициируем GET запрос (проверим ответ, фактический ответ хранится в ключе 'data')
axios.get(url)
  // проверка запроса
  // .then(response => console.log(response.data))
  .then(response => {
    // формирование карточки покемона (+ интерфейс)
    const pokeCard = response.data as pokeCardInt

    // формирование переменных, для составления карточки
    const name = pokeCard.name
    const order = pokeCard.order
    const height = pokeCard.height
    const weight = pokeCard.weight
    const status = pokeCard.is_default

    // вывод в консоль
    // console.log(`
    //   Card #${order}:
    //   Name: ${name}
    //   Order: ${order}
    //   Params: height - ${height} m., weight - ${weight} kg.
    //   Status: ${status}
    // `)

    createCard(order, name, height, weight, status)
  })

// функция с указаными типами параметров
const createCard = (order: number, name: string, height: number, weight: number, status: boolean) => {
  console.log(`
      Card #${order}:
      Name: ${name}
      Params: height - ${height} m., weight - ${weight} kg.
      Status: ${status}
    `)
}