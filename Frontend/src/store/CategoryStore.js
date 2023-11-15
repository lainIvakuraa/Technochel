import  {makeAutoObservable} from "mobx";
import image from "../assets/categories/smartphones.png"

export default class CategoryStore {
    constructor() {
        this._categories = [
            {id:1, name: "Телефоны, Смартфоны", img:image},
            {id:2, name: "Телефоны, Смартфоны", img:image},
            {id:3, name: "Телефоны, Смартфоны", img:image},
            {id:4, name: "Телефоны, Смартфоны", img:image},
            {id:5, name: "Телефоны, Смартфоны", img:image},
            {id:6, name: "Телефоны, Смартфоны", img:image},
            {id:7, name: "Телефоны, Смартфоны", img:image},
            {id:8, name: "Телефоны, Смартфоны", img:image},
            {id:9, name: "Телефоны, Смартфоны", img:image},
            {id:1, name: "Телефоны, Смартфоны", img:image},
            {id:2, name: "Телефоны, Смартфоны", img:image},
            {id:3, name: "Телефоны, Смартфоны", img:image},
            {id:4, name: "Телефоны, Смартфоны", img:image},
            {id:5, name: "Телефоны, Смартфоны", img:image},
            {id:6, name: "Телефоны, Смартфоны", img:image},
            {id:7, name: "Телефоны, Смартфоны", img:image},
            {id:8, name: "Телефоны, Смартфоны", img:image},
            {id:9, name: "Телефоны, Смартфоны", img:image},
            {id:1, name: "Телефоны, Смартфоны", img:image},
            {id:2, name: "Телефоны, Смартфоны", img:image},
            {id:3, name: "Телефоны, Смартфоны", img:image},
            {id:4, name: "Телефоны, Смартфоны", img:image},
            {id:5, name: "Телефоны, Смартфоны", img:image},
            {id:6, name: "Телефоны, Смартфоны", img:image},

        ]
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }

    get categories() {
        return this._categories
    }

}