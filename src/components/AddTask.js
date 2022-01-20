import { useState } from 'react'

// Add task props//
const AddTask = ({onAdd}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault()
    // validation
    if (!text) {
      alert('please add task')
      return
    }
    onAdd({text, day, reminder})
    setText('') 
    setDay('') 
    setReminder(false) 
  }
  return (
    <form className='add-task' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Add Task</label>
        <input type='text' placeholder='Add Task'
          value={text} onChange={(e)=> setText(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Add Day</label>
        <input type='text' placeholder='Add Day & time'
         value={day} onChange={(e)=> setDay(e.target.value)}/>
      </div>
      <div className='form-control form-control-check'>
        <label>Set reminder</label>
        <input type='checkbox'
          checked={reminder}
         value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}/>
      </div>
      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask
