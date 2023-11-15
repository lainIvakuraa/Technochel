import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Row} from "react-bootstrap";
import CategoryItem from "./CategoryItem";
import "./categories.css"

const CategoryList = observer(() => {
    const {category} = useContext(Context)

    return (
        <Row className="list">
            {category.categories.map(category =>
                <CategoryItem key={category.id} category={category}/>
            )}
        </Row>
    );
});

export default CategoryList;