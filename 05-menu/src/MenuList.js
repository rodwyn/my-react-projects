import { Menu } from "./Menu"

export const MenuList = ({ items }) => {
  return (
    <div className="section-center">
      {
        
        items.map( item => <Menu key={ item.id } { ...item } />)
      }
    </div>
  )
}
