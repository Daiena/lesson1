type TGender="male"|"female";

interface IAdress{
    city: string,
    street: string,
    house: string,
    apartment?: string,
}

interface IUser{
    name:string,
    age:number,
    gender?: TGender,
    adress:IAdress,
}

const userOne:IUser={
name:"Иван",
age: 20,
gender: "male",
adress:{
    city:"Нижний Новгород",
    street:"Гагарина",
    house:"23а"
}
}
console.log(userOne);


export{}
