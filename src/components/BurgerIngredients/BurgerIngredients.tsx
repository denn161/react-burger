import React from 'react'
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerIngredients.module.css';
import { TABS } from '../../constants';
import BurgerCategory from './BurgerCategory';
import useIngredients from '../../hooks/useIngredients';

const BurgerIngredients = () => {

  const { currentTab, setCurrentTab, refs, dataResult } = useIngredients()


  return (
    <section className={`${styles.section}`}>
      <h2 className={styles.title}>
        Собери бургер
      </h2>
      <div className={`${styles.tabs} mt-5`}>
        {TABS.map(({ value, name }, index) =>
          <Tab key={index} value={value} active={currentTab === value} onClick={setCurrentTab}>
            {name}
          </Tab>
        )}
      </div>
      <div className={styles.items} id="scrollBox">
        {dataResult.length && dataResult.map((item, index) => {
          return (<BurgerCategory key={item.id} products={item.products} title={item.title} id={item.id} targetRef={refs[index]} />)
        }
        )}
      </div>
    </section>
  )
}



export default BurgerIngredients;