// интерфейс определяет свойства и методы, которые объект должен реализовать. Другими словами, интерфейс - это определение кастомного типа данных, но без реализации. Интерфейсы определяются с помощью ключевого слова interface

interface pokeCardInt {
  name: string
  order: number
  height: number
  weight: number
  is_default: boolean
}

export default pokeCardInt