import React,{useState} from 'react'

function Form(props) {

  const [note,setNote] = useState({title:"",content:""})

  const handleChange = e =>{
    const name = e.target.name;
    const value = e.target.value;

    setNote({
      ... note, [name]:value
    })

  }

  const handleSubmit = e =>{
    e.preventDefault()
    setNote({title:'',content:''})
    props.onCreate(note)

  }


  return (
    <div id="InputArea">
      <div className="wrapper">

        <form method='post' onSubmit={handleSubmit}>
          <input onChange={handleChange} type='text' name="title" placeholder='Enter Title...' value={note.title}></input>
          <textarea onChange={handleChange} name="content" placeholder='Type Content here...' rows="4" value={note.content}></textarea>
          <button type='submt'  >Submt</button>
        </form>
      </div>
    </div>
  )
}

export default Form