import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { Row } from "react-bootstrap";
import CategoryItem from "./CategoryItem";
import "./categories.css"

const CategoryList = observer(({ section }) => {
    const { category } = useContext(Context)

    return (
        <>
            <div>
                {section}
            </div>
            <Row className="list">
                {category.categories.forEach(category => {
                    if (section === category.section) {
                        return <CategoryItem key={category.id} category={category} />
                    }
                })}

            </Row>
        </>
    );
});

export default CategoryList;