import { Button } from "./Button"

export const ButtonList = ({ jobs, value, onSetValue }) => {
  

  return (
    <div className="btn-container">
      {
        jobs.map((job, index) => {
          const { company } = job;
          const params = { company, index, value };

          return <Button key={ job.id } { ...params } onSetValue={ onSetValue } />
        })
      }
    </div>
  )
}
