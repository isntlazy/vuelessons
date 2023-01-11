---
image: 'reduce.jpg'
imageAlt: 'reduce'
tags: '#javascript'
category: 'Веб-розробка'
datePublished: '2023-09-01'
datePublishedFormatted: '9 січня 2023'
---

# Розбираємось із методом reduce та коли його варто використовувати
`reduce` - вбудований метод для масивів в javascript, що сам по собі є потужним інструментом для роботи з елементами масиву будь-якого типу.


Найпростішим прикладом роботи reduce наводять підрахунок суми елементів масиву з числами, а саме:
```js
let myArr = [2, 4, 6, 7]

const sum = myArr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)

// initialValue в даному випадку це 0

console.log(sum) // 19
```

Як бачимо `reduce` отримує на вхід два параметра:

- `callback-функція` , що виконується для кожного елементу масиву (з одним вийнятком, коли не було передано `initialValue`).
  Вона отримує на вхід два параметри:
  - `accumulator` - акумулює значення, яке повертає функція `callback` для кожного елементу масиву
  - `currentValue` - поточне значення елемента з масиву
  - `index` (необов'язковий) - поточне значення індексу елемента в масиві
  - `array` (необов'язковий) - масив, для якого виконується `reduce()`
- `initialValue` (необов'язково) - значення, що буде передано в `callback` при першому виконанні. Якщо відсутнє, перший елемент виступає в ролі акумулятора при першому виконанні і
  `callback()` не буде для нього виконуватись

Щоб краще зрозуміти можливості `reduce()` давайте переглянемо наступний приклад з конкатенацією рядків пісні:
```js
let stringsArr = ['Ой,', 'у', 'лузі', 'червона', 'калина', 'похилилася']

const resultString = stringsArr.reduce((accumulator, currentValue) => {
  return `${accumulator} ${currentValue}`
})

console.log(resultString) // Ой, у лузі червона калина похилилася
```

В цьому 👆 випадку ми виводимо в консоль рядок усім нам відомої та актуальної пісні. Тут ми вже працюємо не з числами, а з рядками (типом даних string).


Як можна побачити, ми не передали `initialValue` в `reduce` і функція всерівно спрацювала. Давайте розберемось, як саме вона спрацювала та порівняємо з
варіантом коли ми передаємо `initialValue` зі значенням пустого рядка `''`

Без `initialValue`:

```js
let stringsArr = ['Ой,', 'у', 'лузі', 'червона', 'калина', 'похилилася']

const resultString = stringsArr.reduce((accumulator, currentValue) => {
  console.log(`accumulator: ${accumulator}`)
  console.log(`currentValue: ${currentValue}`)
  return `${accumulator} ${currentValue}`
})

// accumulator: Ой,
// currentValue: у
// accumulator: Ой, у
// currentValue: лузі
// accumulator: Ой, у лузі
// currentValue: червона
// accumulator: Ой, у лузі червона
// currentValue: калина
// accumulator: Ой, у лузі червона калина
// currentValue: похилилася
// Ой, у лузі червона калина похилилася


console.log(resultString)
```

З `initialValue`:
```js
let stringsArr = ['Ой,', 'у', 'лузі', 'червона', 'калина', 'похилилася']

const resultString = stringsArr.reduce((accumulator, currentValue) => {
  console.log(`accumulator: ${accumulator}`)
  console.log(`currentValue: ${currentValue}`)
  return `${accumulator} ${currentValue}`
}, '')

console.log(resultString)
// accumulator:
// currentValue: Ой,
// accumulator:  Ой,
// currentValue: у
// accumulator:  Ой, у
// currentValue: лузі
// accumulator:  Ой, у лузі
// currentValue: червона
// accumulator:  Ой, у лузі червона
// currentValue: калина
// accumulator:  Ой, у лузі червона калина
// currentValue: похилилася
// Ой, у лузі червона калина похилилася

```

Як бачимо, в першому випадку наш `accumulator` отримує значення першого елемента, і функція `callback()` для нього не виконується, а починає
це робити вже з другого і до кінця. В другому випадку початковим значенням `accumulator` є передане нами `initialValue`, а саме пустий рядок.

<span class="inline-flex mb-6 font-medium">
<img class="w-6 h-6 mr-2" src="/_nuxt/assets/icons/info.svg"/>Порада: з власного досвіду рекомендую завжди вказувати initialValue, це робить код зрозумілішим та менша ймовірність можливих логічних помилок
</span>

## Знаходимо середнє арифметичне з допомогою методу reduce

Цього разу ми використаємо два інші параметри функції `callback` (її також називають редюсером). Давайте порахуємо середнє арифметичне курсів гривні до долара в 2019-2021 роках:
```js
const dollarExchangeRates = [25.8, 26.96, 27.7] 
// якщо в цьому місці ви зронили сльозинку, це нормально 🥲

const average = dollarExchangeRates.reduce((total, currentAmount, index, array) => {
  total += currentAmount;
  if (index === array.length - 1) {
    // якщо ми знаходимось на останньому елементі масиву,
    // то ділимо суму на кількість значень і повертаємо результат
    return total / array.length
  } else {
    return total
  }
}, 0)
console.log(average)
// 26.820000000000004
```

Якщо вас дивує, чому ми отримали `26.820000000000004` замість `26.82` рекомендую вам прочитати цю статтю з блогу:
<a target="_blank" class="inline-flex" href="#">
<strong>Дивна поведінка JavaScript</strong>
<img class="w-6 h-6" style="color: red" src="/_nuxt/assets/icons/external-link.svg"/>
</a>

## Складніший приклад використання reduce
Частіше інформація, яку так чи інакше потрібно обробити, зберігається в більш складних структурах даних. В цьому прикладі з допомогою `reduce` ми складемо унікальний список
інструментів, на яких грають учасники гурту **ДахаБраха**:
```js
const dakhaBrakhaData = [
  { artist: 'Ніна Гаренецька', age: 39, instruments: ['вокал','віолончель', 'басовий барабан'] },
  { artist: 'Ірина Коваленко', age: 40, instruments:
      ['вокал', 'джембе', 'перкусія', 'басовий барабан', 'жалійка', 'флейта', 'бугай', 'акордеон', 'фортепіано', 'укулеле']
  },
  { artist: 'Олена Цибульська', age: 41, instruments: ['вокал', 'басовий барабан', 'перкусія'] },
  { artist: 'Марко Галаневич', age: 41, instruments: 
      ['вокал', 'дарбука', 'табла', 'діджеріду', 'губна гармоніка', 'акордеон', 'кахон'] },
];

const uniqueInstruments = dakhaBrakhaData.reduce((accumInstruments, artist) => {
  artist.instruments.forEach(instrument => {
    if (!accumInstruments.includes(instrument)) {
      // зберігаємо лише інструмент, якого ще немає у масиві accumInstruments
      accumInstruments.push(instrument)
    }
  })
  return accumInstruments
}, []);

// initialValue - це в нашому випадку пустий масив []

console.log(uniqueInstruments)
// Унікальні інструменти:
// ['вокал', 'віолончель', 'басовий барабан', 'джембе', 'перкусія', 'жалійка', 'флейта', 'бугай', 'акордеон', 'фортепіано', 'укулеле', 'дарбука', 'табла', 'діджеріду', 'губна гармоніка', 'кахон']
```

