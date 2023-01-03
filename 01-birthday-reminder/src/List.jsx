import { ListItem } from "./ListItem";

export const List = ({ people }) => {
  return (
    <>
      {
        people.map( person => <ListItem key={person.id} { ...person } /> )
      }
    </>
  )
}
