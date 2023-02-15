// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

type user = {
    name: string,
    phone: string,
    age: number,
    male: boolean
}

const user1:user = { name: 'John', phone: '1212', age: 12, male: false }


console.log("user1 ", user1);
