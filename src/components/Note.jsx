import React,{useState,useEffect} from 'react'
import SingleNote from './SingleNote'
import { collection,getDocs,addDoc,deleteDoc,doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase-config'




function Note() {
  const [finalNote,setFinalNote] = useState([])
  const [addNote, setAddNote] = useState({title:'', content:''})
  const [id,setId] = useState('')
const noteRef = collection(db,"note")

  useEffect(()=>{
    const getNotes = async () =>{
      const data = await getDocs(noteRef);
      setFinalNote(data.docs.map((docs)=>({...docs.data(),id: docs.id})))
    }
    getNotes()
  },[noteRef])

  const handleChange = e =>{
    const name = e.target.name;
    const value = e.target.value;

setAddNote({... addNote, [name]:value})
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    console.log(addNote.title); 
    if (addNote.title && addNote.content ){

      await addDoc(noteRef,addNote)
      setAddNote({title:'',content:''})
    }
    else{
      alert("Input Title and Content")
    }
  }


  const deleteNode = async(id) =>{
    const deletenote = doc(noteRef,id)
    await deleteDoc(deletenote)

  }

  const updateNode = async(note) =>{
    console.log(note);
    setAddNote({title:note.title,content:note.content})
    setId(note.id)
  }

  const updateButton = async(id) =>{
    console.log(id);
    const updateNote = doc(db,"note",id)

    await updateDoc(updateNote, addNote)
  }



  return (
    <div id="Note">
        <div className="wrapper">
        <form method='post' onSubmit={handleSubmit}>
          <input onChange={handleChange} type='text' name="title" placeholder='Enter Title...' value={addNote.title}></input>
          <textarea onChange={handleChange} name="content" placeholder='Type Content here...' rows="4" value={addNote.content}></textarea>
          <button type='submt'  >Submt</button>
          <button type='button' onClick={()=>updateButton(id)} >Update</button>
        </form>
            <div className='container'>
              {
                finalNote && finalNote.map((fNote) =>{
                  return <SingleNote key={fNote.id} title={fNote.title} updateId={updateNode} getId={deleteNode} id={fNote.id}   content={fNote.content}/>
                })
              }
                
            </ div>
        </div>
    </div>
  )
}

export default Note