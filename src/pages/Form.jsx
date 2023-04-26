import React, { useState } from 'react'
import AnimatedButton from '../components/AnimatedButton'
import AnimatedText from '../components/AnimatedText'
import { useEffect } from 'react'

const Form = () => {

  const [form, setForm] = useState({
    name: null,
    mail: null,
    msg: null
  }) 
 useEffect(()=>{
    console.log(form);
 },[form])

  return (
    <div className=' form_container'>

        <div className='form_sub contact'>
            <AnimatedText text={`< CONTACT ME />`} clase='title'/>
            <AnimatedText text={`Let's Work Together!`} clase='lets'/>

            <p>📧 buitr4go@gmail.com</p>            
        </div>
        <div className='form_sub form'>
            <input 
            onChange={(e)=>{
            setForm({ ...form, name: e.target.value})}}
            type="text" placeholder='Name' className='field'/>
            <input 
            onChange={(e)=>{
            setForm({ ...form, mail: e.target.value})}}
            type="text" placeholder='E-mail' className='field'/>
            <input
            onChange={(e)=>{ 
            setForm({ ...form, msg: e.target.value})}}
            type="text" placeholder='Message' className='field text'/>
            <div className='button_submit'>
                <AnimatedButton text='submit'/>
            </div>
        </div>

      
    </div>
  )
}

export default Form