import React, { useRef } from 'react'
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerConstructor.module.css'
import { useDrag, useDrop } from 'react-dnd'


const FillingItem = ({ item, deleteFilling, index, moveCard }) => {


    const fillingRef = useRef(null)

    const [, drop] = useDrop({
        accept: 'element',
        hover(item, monitor) {
            if (!fillingRef.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = fillingRef?.current.getBoundingClientRect();

            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset()

            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveCard(dragIndex, hoverIndex)
            item.index = hoverIndex
        }

    })

    const [{ isDrag }, drag] = useDrag({
        type: 'element',
        item: () => ({ id: item._id, index }),
        collect: (monitor) => ({
            isDrag: monitor.isDragging(),
        }),
    });

    const style = {
        opacity: isDrag ? 0 : 1
    }

    drag(drop(fillingRef));

    const preventDef = (e) => e.preventDefault()

    return (
        <li className={styles.list__item} ref={fillingRef}
            onDrop={preventDef}
            style={style}>
            <DragIcon type="primary" />
            <ConstructorElement
                key={item.dragId}
                type={'middle'}
                isLocked={false}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                handleClose={() => deleteFilling(item.key)}
            />
        </li>
    )
}

FillingItem.propTypes = {
    item: PropTypes.object.isRequired,
    deleteFilling: PropTypes.func,
    index: PropTypes.number,
    moveCard: PropTypes.func,

}

export default FillingItem