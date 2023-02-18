import React, { SyntheticEvent, useRef } from 'react'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerConstructor.module.css'
import { useDrag, useDrop, XYCoord } from 'react-dnd'
import { IIngredientElement } from '../../types/constructor';


interface FillingItemProps {

    item: IIngredientElement
    deleteFilling: (id: string) => void
    index: number
    moveCard: (dragIndex: number, hoverIndex: number) => void
}


const FillingItem = ({ item, deleteFilling, index, moveCard }: FillingItemProps) => {


    const fillingRef = useRef<HTMLLIElement | null>(null)

    const [, drop] = useDrop({
        accept: 'element',
        hover(item: IIngredientElement, monitor) {
            if (!fillingRef.current) {
                return
            }
            const dragIndex = item.index as number
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = fillingRef?.current.getBoundingClientRect();

            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset() as XYCoord

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

    const preventDef = (e: SyntheticEvent) => e.preventDefault()

    return (
        <li className={styles.list__item}
            ref={fillingRef}
            data-testid='filling-element'
            onDrop={preventDef}
            style={style}>
            <DragIcon type="primary" />
            <ConstructorElement
                key={item.dragId}
                isLocked={false}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                handleClose={() => deleteFilling(item.key)}
            />
        </li>
    )
}


export default FillingItem