import React from 'react'
import './SwipeableList.css'
import SwipeableListItem from './SwipeableListItem'

const data = [
    { id: 1, title: 'Onions' },
    { id: 2, title: 'Apples' },
    { id: 3, title: 'Oranges' },
    { id: 4, title: 'Paneer' },
]

const SwipeableList = () => {
    return <>
        {data.map(item => <SwipeableListItem id={item.id} title={item.title} />)}
    </>
}

export default SwipeableList