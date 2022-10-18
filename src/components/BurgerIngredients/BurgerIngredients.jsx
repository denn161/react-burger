import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerIngredients.module.css';
import { TABS } from '../../constants';
import BurgerLIst from './BurgerLIst';


const BurgerIngredients = ({ data, getId, setActive }) => {

  const [current, setCurrent] = useState('one')


  const handleOpenModal = (id) => {
    setActive(true)
    getId(id)
  }
  return (
    <section className={`${styles.section}`}>
      <h2 className={styles.title}>
        Собери бургер
      </h2>
      <div className={`${styles.tabs} mt-5`}>
        {TABS.map(({ value, name }, index) =>
          <Tab key={index} value={value} active={current === value} onClick={setCurrent}>
            {name}
          </Tab>
        )}
      </div>
      <div className={styles.items}>
        {data.length && data.map((item, index) => {
          if (item.current === current) {
            return <BurgerLIst title={item.title} data={item.products} key={index} getId={handleOpenModal} />
          }
        }
        )}
      </div>
    </section>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.array.isRequired
}

export default BurgerIngredients;