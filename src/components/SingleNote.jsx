import React from 'react'

function SingleNote(props) {
  const handleClick = index =>{
    props.getId(index)
  }

  const UpdateClick = note =>{
    props.updateId(note)
  }

  return (
    <>
    <div className="note-container">
    <h3 className="title">{props.title}</h3>
    <p className="content">{props.content}</p>
    <button className='delete' onClick={()=>handleClick(props.id)}>Delete</button>
    <button className='delete' onClick={()=>UpdateClick({content:props.content,title:props.title,id:props.id})}>Update</button>
  </div>
    </>
  )
}

export default SingleNote