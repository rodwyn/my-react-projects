import { useState } from "react";
import { Categories } from "./Categories"
import { MenuList } from "./MenuList";
import items from './data';

export const App = () => {
  const allCategories = ['all', ...new Set(items.map( item => item.category ))];
  const [menuItems, setMenuItems] = useState(items);
  
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    setMenuItems(items.filter((item) => item.category === category));
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={ allCategories } onFilterItems={ filterItems } />
        <MenuList items={ menuItems } />
      </section>
    </main>
  )
}
