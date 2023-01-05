import { SingleColor } from "./SingleColor"

export const ColorList = ({ colors }) => {
  return (
    <section className='colors'>
      {
        colors.map((color, index) => 
            <SingleColor
              {...color}
              hexColor={color.hex}
              index={index}
              key={index}
            />
          )
      }
    </section>
  )
}
