# Lesson13 - JS Basic

0. Бодлого тайлбар - 5 минут
1. Kahoot-тэй танилцуулах хост линк: https://www.kahoot.it (pin:7029066)

- 3 оноо

1. Лекц (30 минут):

## Хичээлийн бичлэг:

https://youtu.be/XHLmyO8jfsQ

### if else

```sh
if(condition_1)
    console.log('condition_1 биелэх үед');
else if(condition_2){
    console.log('condition_2 биелэх үед.');
    ...
}
else
    console.log('Өмнөх нөхцөлүүд биелэхгүй үед ажиллана.');

let temperature = prompt("Өнөөдрийн температур оруулна уу:");

// Гараас өгсөн утгийг тооруу хөрвүүлэх
temperature = parseFloat(temperature);

if (temperature > 30) {
  console.log("Маш халуун өдөр байна, ус сайн уугаарай");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("Дажгүй өдөр байна!");
} else if (temperature < 20) {
  console.log("Тийм ч дулаахан биш байна");
} else {
  console.log("Буруу температур оруулсан байна.");
}

```

Жишээ 1: Тухайн цагаас хамаарч мэнд мэдэх нөхцөл шалгах

### switch case

- case
- break
- default

```sh
let x = 5;
switch (x) {
    case 5:
        console.log('condition_1 биелэх үед');
        break;
    case 6:
        console.log('condition_1 биелэх үед');
        break;

    default:
        console.log('Өмнөх нөхцөлүүд биелэхгүй үед ажиллана.');
        break;
}


let fruit = "Banana"

fruit = fruit.toLowerCase();

switch (fruit) {
    case "apple":
    console.log("Apples are crunchy and delicious.");
    break;
    case "banana":
    console.log("Bananas are a great source of potassium.");
    break;
    case "orange":
    console.log("Oranges are refreshing and packed with vitamin C.");
    break;
    case "strawberry":
    console.log("Strawberries are sweet and perfect for desserts.");
    break;
    default:
    console.log("That's an interesting fruit choice!");
    break;
}
```

### Давталт

- For давталт

```sh
for (let i = 0; i <= 10; i++) {
    # 1. i = 0
    # 2. i < 10 байна уу шалгаад худлаа бол үргэлжилнэ
    # 3. i++ буюу i утга нэмэгдүүлээд дараагийн алхамд шилжинэ
    console.log("Давталт №", i);
}
```

- While давталт - 'while' доторхи нөхцөл биелэж байх үед ажиллана

```sh
let i;
while (i <= 10) {
    if(i % 2 === 0) console.log(i);
    i++;
}
```

- Do...while давталт - Эхлээд 'do' доторхи үйлдэл ажлаад дараа нь 'while' нөхцөл биелэж байна уу шалгана

```sh
let i =0;
do {
    if(i % 2 === 0) console.log(i);
    i++;
} while (i<= 10);
```

- Хязгааргүй давталт

```sh
  for(let i=0; true; i++) {}
  while(true){}
  do{} while(true)

  let i =0;
  while (i <= 10) {
    if(i % 2 === 0) console.log(i);
  }

```

- For...in давталт: Тухайн object болон array-ийн properties (key, index)-р давтана

```sh
const fresh_meat = {
    name: "Үхрийн мах",
    price: 20000,
    protein: '26 грам'
}

for (const key in fresh_meat) {
      console.log(key, fresh_meat[key]);
}
const fruits = ['Алим','Банана','Киви'];
for (const fruit in fruits) {
    # ?
    console.log(fruit);
}

```

- For...of болон forEach: Тухайн object болон array-ийн утгуудаар нь давтана

```sh
for (const fruit of fruits) {
    # ?
    console.log(key);
}

fruits.forEach(fruit => {

});

```

- Break and Continue:

```sh
for (let i = 0; i <= 5; i++) {
    # if(i % 2 === 0) break;
    # if(i % 2 === 0)
    # {
    #     console.log(i);
    #     continue;
    # }
}
```

### Дасгал:

1. x,y 2 тооны ихийг олоод дэлгэцэнд харуулна уу.
2. Гараас өгсөн тоо хүртлэх тэгш эсвэл сондгой тоог ол (1 оноо)
3. FizzBuzz: x тооны утаг дараах нөхцөл биелэж байх үед тохирох текст хэвлэнэ. (1 оноо)
   - /3 => Fizz
   - /5 => Buzz
   - /3/5 => FizzBuzz
   - !/3/5 => Input
   - Not number => 'Not number'
4. Зам дээр хурд хэтрүүлсэн эсэхийг шалгана уу. (2.5)
   - Хурдны дээд хязгаар 80км/цаг
   - Тухайн хурднаас 5км цаг хэтрэх бүрт 1 оноо хасах бөгөөд хэрэв 5 оноо алдах юм бол эрхээ хасуулна.
   - Оролт: Хурдны хэмжээ
   - Гаралт: Алдсан оноо эсвэл эрхээ хасуулсан эсэх

```

6. Оноо цуглуулах:

- Ирц: 1
- Бататгах тест: 3
- Даалгавар биелүүлэх дээр оноо цуглуулна: 6 хүртэл (3 хялбар \* 0.5 + 2 дундаж \* 1 + 1 \* 2.5)
- Бусдад мэдсэн зүйлсээ хуваалцсан тохиолдолд багшаас оноо авах боломжтой: 1

- Хугацаа: 2:20 - 2:50
- Боломжит оноо: 10
```
