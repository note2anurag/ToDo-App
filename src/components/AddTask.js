import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')

    //Submit 
    const onSubmit =(e) => {
        e.preventDefault()
        if(!text) {
            alert('There can\'t be an empty todo. You need to add some text.')
            return
        }
        onAdd({text})
        setText('')
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Add ToDo</label>
                <input 
                type='text' 
                placeholder='Add Task' 
                value={text} 
                onChange = {(e)=>
                setText(e.target.value) }
                />
            </div>
            <input type='submit' value= 'Save ToDo' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
