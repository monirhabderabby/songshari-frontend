import React,{memo, useEffect, useState} from 'react'
import './steps.css'

const StepThree = ({value, handleChange, handleCheck, setProceed}) => {
    const [error, setError] = useState({
        tyep:'',
        message:''
    })
    const check = () =>{
        let passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/;
       if(!value.password || !value.confirmPassword || !value.agreed){
            setProceed(false)
        }else if(!value.password.match(passwordFormat)){
            setProceed(false)
            setError({type:'pass', message:'Password should be of 6-20 characters and must contains 1 special character, 1 number, 1 lowercase letter & 1 uppercase letter'})
        }else if(value.password !== value.confirmPassword){
            setProceed(false)
            setError({type:'cPass', message:'Both passwords should match'})
        }else{
            setError({
                tyep:'',
                message:''
            })
            setProceed(true)
        }
    };
    
    useEffect(()=>{
        const timer = setTimeout(()=>{
            check()
        },1000)
        
        return ()=> clearTimeout(timer)
    },[value])

    return (
        <div className='steps'>
            <div className='inp-div'>
                <label>Password</label>
                <input type='password' name="password" placeholder='enter password...' value={value.password}  onChange={handleChange}/>
                <p className='error'>{error.type === 'pass' ? error.message : null}</p>
            </div>
            <div className='inp-div'>
                <label>Confirm Password</label>
                <input type='password' name="confirmPassword" placeholder='confirm your password...' value={value.confirmPassword}  onChange={handleChange}/>
                <p className='error'>{error.type === 'cPass' ? error.message : null}</p>
            </div>
            <div className='inp-div'>
                <label>Terms &amp; Conditions</label>
                <div className='check-div'>
                <input type='checkbox' name="agreed" checked={value.agreed} onChange={handleCheck}/>
                <p>By checking your agreed with our Terms &amp; Conditions.</p>
                </div>
            </div>
            
        </div>
    )
}

export default memo(StepThree)
