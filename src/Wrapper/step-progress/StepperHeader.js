import React from 'react'
import { Link } from 'react-router-dom';

export const StepperHeader = () => {
  return (
    <div className='ml-96 mt-4'>
    <Link
    to='/personaldetailsform'
  component="button"
  className='mr-12'
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
 Step 1
</Link>
    <Link
  component="button"
  className='mr-12'
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
  Step 2
</Link>
    <Link
  component="button"
  className='mr-12'
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
  Step 3
</Link>
    <Link
  component="button"
  className='mr-12'
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
  Step 4
</Link>
    <Link
  component="button"
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
  Step 5
</Link>
    </div>
  )
}
