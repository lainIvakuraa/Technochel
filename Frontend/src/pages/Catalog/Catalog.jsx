import React from 'react';
import image from "../../assets/categories/smartphones.png"
import CatCardSmall from '../../components/itemCard/CatCardSmall';
import { Container, Row } from 'react-bootstrap';
import "./categories.css"


const categories = [
    [{ category: "Бытовая техника" },
    [
        { id: 1, name: "Плиты и печи", img: image },
        { id: 2, name: "Холодильное оборудование", img: image },
        { id: 2, name: "Мультиварки и техника для варки", img: image },
        { id: 3, name: "Посудомоечные машины", img: image },
        { id: 1, name: "Стирка и сушка", img: image }
    ]],
    [{ category: "Красота и здоровье" },
    [
        { id: 3, name: "Фены", img: image },
        { id: 1, name: "Триммеры", img: image },
        { id: 2, name: "Машинки для стрижки волос", img: image },
        { id: 3, name: "Фены", img: image },
        { id: 1, name: "Триммеры", img: image },
        { id: 2, name: "Машинки для стрижки волос", img: image },
    ]],
    [{ category: "Офис и мебель" },
    [
        { id: 3, name: "Лазерные МФУ", img: image },
        { id: 1, name: "Струйные МФУ", img: image },
        { id: 3, name: "Лазерные МФУ", img: image },
        { id: 1, name: "Струйные МФУ", img: image },
        { id: 3, name: "Лазерные МФУ", img: image },
        { id: 1, name: "Струйные МФУ", img: image },
    ]],
    [{ category: "Смартфоны и фототехника" }, [

        { id: 2, name: "Смартфоны", img: image },
        { id: 3, name: "Планшеты", img: image },
        { id: 1, name: "Сотовые телефоны", img: image },
        { id: 2, name: "Фотоаппараты", img: image },
        { id: 2, name: "Смартфоны", img: image },
        { id: 3, name: "Планшеты", img: image },
        { id: 1, name: "Сотовые телефоны", img: image },
        { id: 2, name: "Фотоаппараты", img: image },
    ]],
    [{ category: "ТВ, консоли" }, [
        { id: 3, name: "Телевизоры", img: image },
        { id: 1, name: "Microsoft Xbox", img: image },
        { id: 3, name: "PlayStation", img: image },
        { id: 3, name: "Телевизоры", img: image },
        { id: 1, name: "Microsoft Xbox", img: image },
        { id: 3, name: "PlayStation", img: image },
        { id: 3, name: "Телевизоры", img: image },
        { id: 1, name: "Microsoft Xbox", img: image },
        { id: 3, name: "PlayStation", img: image },
    ]],
    [{ category: "ПК, ноутбуки, периферия" }, [
        { id: 1, name: "Ноутбуки", img: image },
        { id: 2, name: "Персональные компьютеры", img: image },
        { id: 3, name: "Моноблоки", img: image },
        { id: 1, name: "Мониторы", img: image },
        { id: 2, name: "Клавиатуры", img: image },
        { id: 1, name: "Ноутбуки", img: image },
        { id: 2, name: "Персональные компьютеры", img: image },
        { id: 3, name: "Моноблоки", img: image },
        { id: 1, name: "Мониторы", img: image },
        { id: 2, name: "Клавиатуры", img: image },
    ]],
    [{ category: "Комплектующие для ПК" }, [
        { id: 3, name: "Процессоры", img: image },
        { id: 1, name: "Материнские платы", img: image },
        { id: 2, name: "Видеокарты", img: image },
        { id: 3, name: "Оперативная память", img: image },
        { id: 1, name: "Блоки питания", img: image },
        { id: 2, name: "Корпуса", img: image },
        { id: 3, name: "Жесткие диски", img: image }
    ]]
]

const Catalog = () => {


    // var categories_sorted = new Map()
    // console.log("0")


    // categories.map(element => {
    //     console.log("1")
    //     if (categories_sorted.has(element.category)) {
    //         categories_sorted.set(element.category, categories_sorted.get(element.category).concat(new Array(element.name)))
    //         console.log(categories_sorted.get(element.category))
    //     } else {
    //         categories_sorted.set(element.category, new Array(element.name))
    //         console.log(categories_sorted.get(element.category))
    //     }
    // })



    return (
        <Container style={{marginTop: "30px"}}>
            {categories.map(section => {
                return (
                    <div className='section'>
                        <Row>
                            <div className='sectionName'>{section[0].category}</div>
                        </Row>
                        <Row >
                            {section[1].map(element => {
                                return (<CatCardSmall item={element} />)
                            })}
                        </Row>
                    </div>
                )
            })}
        </Container>
    )

};


export default Catalog;