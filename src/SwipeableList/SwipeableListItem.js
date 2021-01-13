import './SwipeableListItem.css'
import React, { useState } from 'react'

const SwipeableListItem = (props) => {

    // DOM refs
    let optionsDiv;
    let swipeFrontDiv;

    const [dragStartX, setDragStartX] = useState(0);
    const [hideOptions, setHideOptions] = useState(true);

    const checkIfSwipeToLeft = (dragEndX) => dragStartX > dragEndX;

    //////////////////////////  MOUSE EVENTS  //////////////////////////
    const onDragEndMouse = (evt) => {
        if (checkIfSwipeToLeft(evt.screenX)) {
            if (hideOptions && (dragStartX - evt.screenX) > optionsDiv.offsetWidth/2) {
                swipeFrontDiv.style.transform = `translateX(${-optionsDiv.offsetWidth}px)`;
                setHideOptions(false)
            }
        } else {
            swipeFrontDiv.style.transform = `translateX(0px)`;
            setHideOptions(true);
        }
    }

    const onDragStartMouse = (evt) => {
        evt.preventDefault();
        setDragStartX(evt.screenX);
    }

    //////////////////////////  TOUCH EVENTS  //////////////////////////

    const onDragStartTouch = (evt) => {
        //evt.preventDefault();
        setDragStartX(evt.targetTouches[0].screenX);
    }

    const onDragEndTouch = (evt) => {
        let dargEndX = evt.changedTouches[0].screenX;
        if (checkIfSwipeToLeft(dargEndX)) {
            if (hideOptions && (dragStartX - dargEndX) > optionsDiv.offsetWidth) {
                swipeFrontDiv.style.transform = `translateX(${-optionsDiv.offsetWidth}px)`;
                setHideOptions(false)
            }
        } else {
            swipeFrontDiv.style.transform = `translateX(0px)`;
            setHideOptions(true);
        }
    }

    return (
        <div key={props.id} className="wrapper">
            <div
                className="swipe-back"
                ref={div => (optionsDiv = div)}
            >
                <div className="changeBrand">
                    Switch
                </div>
                <div className="deleleteItem">
                    Delete
                </div>
            </div>
            <div className="swipe-front"
                ref={div => (swipeFrontDiv = div)}
                style={{ transform: `translateX(0px)` }}
                onMouseDown={onDragStartMouse}
                onMouseUp={onDragEndMouse}
                onTouchStart={onDragStartTouch}
                onTouchEnd={onDragEndTouch}
            >
                {props.title}
            </div>
        </div>
    )
}

export default SwipeableListItem;