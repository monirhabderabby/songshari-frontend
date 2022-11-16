import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    marginTop:'50px',
    color:'white',
   
  },
}));

function getSteps() {
  return [
    "Personal information",
    "Professional information",
    "Educational information",
    "Physical information",
    "Others information",
    
  ];
}

function getStepContent(step) {

  switch (step) {
   
    case 0:
  
      return (
        <>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
           
              <label className="text-lg ml-4">Upload Profile Photo</label>
           
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
            <input  id="profile" type="file" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Email"  name="profile" />
           </div>
        
          
       
          </div>

          <div>
         <label className="text-lg ml-4">Upload Cover Photo</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="file" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Email"  name="profile" />
     </div>
          </div>
        </div>
        <br></br>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
          <label className="text-lg ml-4">First Name</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Email"  name="profile" />
     </div>
          </div>

          <div>
          <label className="text-lg ml-4">Last Name</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Email"  name="profile" />
     </div>
          </div>
        </div>

        <br></br>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
          <label className="text-lg ml-4">Phone</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Email"  name="profile" />
     </div>
          </div>

          <div>
          <label className="text-lg ml-4">Email</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Email"  name="profile" />
     </div>
          </div>
        </div>

        <br></br>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
          <label className="text-lg ml-4">NID/Passport No</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Email"  name="profile" />
     </div>
          </div>
          <div>
          <label className="text-lg ml-4">NID/Passport Image</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="file" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Email"  name="profile" />
     </div>
          </div>
        </div>

        <br></br>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
          <label className="text-lg ml-4">Birth Day</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="date" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Email"  name="profile" />
     </div>
          </div>
          <div>
          <label className="text-lg ml-4">NID/Passport Image</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="file" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Email"  name="profile" />
     </div>
          </div>
        </div>
        <br></br>
        <div className='grid lg:grid-cols-1 sm:grid-cols-1'>
          <div>
          <label className="text-lg ml-12">Marital Status</label>
        <div className="ml-12">  
      <input type='radio' name='single'></input> Single
     </div>
     <br></br>
        <div className="ml-10">  
      <input type='radio' name='single'></input> Married
     </div>
        <div className="ml-8">  
      <input type='text' name='single' placeholder="No of hus/wife"></input> 
      <input type='text' name='single' placeholder="Reason for again marry"></input> 
      <select name="cars" id="cars">
  <option value="volvo" >Is Your Current Partner Aware Of Your Decision About Another Marriage?</option>
  <option value="saab">Yes</option>
  <option value="mercedes">No</option>
</select>
     </div>
     <br></br>
     <div className="ml-10">  
      <input type='radio' name='single'></input> Widowed
     </div>
     <div className="ml-8">  
      <input type='text' name='single' placeholder="Marriage Date"></input> 
      <input type='text' name='single' placeholder="Partners Death Date"></input> 
      <select name="cars" id="cars">
  <option value="volvo" >Do you have children</option>
  <option value="saab">Yes</option>
  <option value="mercedes">No</option>
</select>
     </div>
     <br></br>

        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
          <label className="text-lg ml-4">Citizenship</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="citizenship" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Add Citizenship"  name="citizenship" />
     </div>
          </div>
          <div>
          <label className="text-lg ml-4">Zodiac Sign</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="zodiac" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Zodiac Sign"  name="zodiac" />
     </div>
          </div>
        </div>


     <br></br>

        <div className='grid lg:grid-cols-5 sm:grid-cols-1'>
          <div>
          <label className="text-lg ml-4">Current Profession</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="citizenship" type="text" className="flex-1 outline-none h-full  bg-transparent text-sm text-gray-400" placeholder="Position"  name="citizenship" />
     </div>
          </div>
          <div>
          <label className="text-lg ml-4"></label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="citizenship" type="text" className="flex-1 outline-none h-full  bg-transparent text-sm text-gray-400" placeholder="Institute"  name="citizenship" />
     </div>
          </div>
          <div>
          <label className="text-sm ml-4">Work Period Starts</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="citizenship" type="date" className="flex-1 outline-none h-full  bg-transparent text-sm text-gray-400" placeholder=""  name="citizenship" />
     </div>
          </div>
          <div>
          <label className="text-sm ml-4">Work Period Ends</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="citizenship" type="date" className="flex-1 outline-none h-full  bg-transparent text-sm text-gray-400" placeholder=""  name="citizenship" />
     </div>
          </div>
          <div>
          <label className="text-sm ml-4"></label>
          <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="citizenship" type="text" className="flex-1 outline-none h-full  bg-transparent text-sm text-gray-400" placeholder="Special Achievements"  name="citizenship" />
     </div>
          </div>  
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
          <div>
          <label className="text-lg ml-4">Educational Qualification</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="citizenship" type="text" className="flex-1 outline-none h-full  bg-transparent text-sm text-gray-400" placeholder="Degree Name"  name="citizenship" />
     </div>
          </div>
          <div>
          <label className="text-lg ml-4"></label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="citizenship" type="text" className="flex-1 outline-none h-full  bg-transparent text-sm text-gray-400" placeholder="Institute"  name="citizenship" />
     </div>
          </div>
          <div>
          <label className="text-sm ml-4"></label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="citizenship" type="text" className="flex-1 outline-none h-full  bg-transparent text-sm text-gray-400" placeholder="Department"  name="citizenship" />
     </div>
          </div>
 
        </div>

        <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
          <div>
          <label className="text-lg ml-4"></label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="citizenship" type="text" className="flex-1 outline-none h-full  bg-transparent text-sm text-gray-400" placeholder="Field of study"  name="citizenship" />
     </div>
          </div>
          <div>
          <label className="text-lg ml-4"></label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="citizenship" type="text" className="flex-1 outline-none h-full  bg-transparent text-sm text-gray-400" placeholder="GPA/CGPA"  name="citizenship" />
     </div>
          </div>
          <div>
          <label className="text-sm ml-4"></label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="citizenship" type="DATE" className="flex-1 outline-none h-full  bg-transparent text-sm text-gray-400" placeholder="Year of passing"  name="citizenship" />
     </div>
          </div> 
        </div>

        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
           
              <label className="text-lg ml-4">Height</label>
           
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
            <input  id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Height"  name="profile" />
           </div>
        
          
       
          </div>

          <div>
         <label className="text-lg ml-4">Weight</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="file" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Weight"  name="profile" />
     </div>
          </div>
        </div>
        <br></br>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
           
              <label className="text-lg ml-4">Ancestry</label>
           
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
            <input  id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Ancestry"  name="profile" />
           </div>
        
          
       
          </div>

          <div>
         <label className="text-lg ml-4">Skin Tone</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="file" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Skin Tone"  name="profile" />
     </div>
          </div>
        </div>

        <br></br>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
              <label className="text-lg ml-4">Hair Color</label> 
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
            <input  id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Hair Color"  name="profile" />
           </div>
          </div>

          <div>
         <label className="text-lg ml-4">Hair Type</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="file" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Hair Type"  name="profile" />
     </div>
          </div>
        </div>

        <br></br>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
              <label className="text-lg ml-4">Eye Color</label> 
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
            <input  id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Hair Color"  name="profile" />
           </div>
          </div>

          <div>
         <label className="text-lg ml-4">No of teeth</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="file" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Hair Type"  name="profile" />
     </div>
          </div>
        </div>
        <br></br>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
              <label className="text-lg ml-4">Monthly Income</label> 
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
            {/* <input  id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Hair Color"  name="profile" /> */}
            <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
              <option>Below 15000 Bdt</option>
              <option>15000 - 20000 Bdt</option>
              <option>25000 - 30000 Bdt</option>
              <option>30000 - 35000 Bdt</option>
              <option>35000 - 40000 Bdt</option>
              <option>40000 - 45000 Bdt</option>
              <option>45000 - 50000 Bdt</option>
              <option>50000 - 60000 Bdt</option>
              <option>60000 - 70000 Bdt</option>
              <option>70000 - 80000 Bdt</option>
              <option>80000 - 90000 Bdt</option>
              <option>90000 - 100000 Bdt</option>
              <option>100000 - 150000 Bdt</option>
              <option>150000 - 200000 Bdt</option>
              <option>300000 + Bdt</option>
              
            </select>
           </div>
          </div>
          <div>
         <label className="text-lg ml-4">Home Town</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Home Town"  name="profile" />
     </div>
          </div>
        </div>

        <br></br>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
          <div>
              <label className="text-lg ml-4">Current   City</label> 
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
           <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Home Town"  name="profile" />
           </div>
          </div>
          
          <div>
         <label className="text-lg ml-4">Permanent Address</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Home Town"  name="profile" />
     </div>
          </div>

          <div>
         <label className="text-lg ml-4">Are your parents alive</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
              <option>Yes</option>
              <option>No</option>
              <option>My mother is alive</option>
              <option>My father is alive</option> 
            </select>
     </div>
          </div>

        </div>
        <br></br>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
              <label className="text-lg ml-4">Linkedin ID</label> 
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
           <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Linkedin"  name="profile" />
           </div>
          </div>
          
          <div>
         <label className="text-lg ml-4">Facebook ID</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Facebook ID"  name="profile" />
     </div>
          </div>

        </div>

        <br></br>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
              <label className="text-lg ml-4">Instagram ID</label> 
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
           <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Instagram Id"  name="profile" />
           </div>
          </div>
          
          <div>
         <label className="text-lg ml-4">Hobbies</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Hobbies"  name="profile" />
     </div>
          </div>
        </div>

        <br></br>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
              <label className="text-lg ml-4">What are you looking for</label> 
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
           <textarea id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="what are you looking for"  name="profile" />
           </div>
          </div>
          
          <div>
         <label className="text-lg ml-4">About You</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <textarea id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="about you"  name="profile" />
     </div>
          </div>

        </div>

        {/* family details  */}
        <h1 className="text-center font-bold text-4xl mt-5 mb-5">Family Details :</h1>

        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
              <label className="text-lg ml-4">Father's Name</label> 
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
           <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Father's Name"  name="profile" />
           </div>
          </div>
          
          <div>
         <label className="text-lg ml-4">Father's Profession</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Father's Profession"  name="profile" />
     </div>
          </div>
        </div>

        <br></br>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
        <div>
         <label className="text-lg ml-4">Father's Income</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
        <option>Below 15000 Bdt</option>
              <option>15000 - 20000 Bdt</option>
              <option>25000 - 30000 Bdt</option>
              <option>30000 - 35000 Bdt</option>
              <option>35000 - 40000 Bdt</option>
              <option>40000 - 45000 Bdt</option>
              <option>45000 - 50000 Bdt</option>
              <option>50000 - 60000 Bdt</option>
              <option>60000 - 70000 Bdt</option>
              <option>70000 - 80000 Bdt</option>
              <option>80000 - 90000 Bdt</option>
              <option>90000 - 100000 Bdt</option>
              <option>100000 - 150000 Bdt</option>
              <option>150000 - 200000 Bdt</option>
              <option>300000 + Bdt</option>
            </select>
     </div>
          </div>    
          <div>
         <label className="text-lg ml-4">Father's Education</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Father's Education"  name="profile" />
     </div>
          </div>

        </div>
        <br></br>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
              <label className="text-lg ml-4">Date of Birth</label> 
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
           <input id="profile" type="date" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder=""  name="profile" />
           </div>
          </div>
          
          <div>
         <label className="text-lg ml-4">If father alive</label>
         <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
              <option>Yes</option>
              <option>No</option>
            </select>
     </div>
          </div>

        </div>
<br></br>
        {/* mother details  */}
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
              <label className="text-lg ml-4">Mother's Name</label> 
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
           <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Father's Name"  name="profile" />
           </div>
          </div>
          
          <div>
         <label className="text-lg ml-4">Mother's Profession</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Father's Profession"  name="profile" />
     </div>
          </div>
        </div>

        <br></br>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
        <div>
         <label className="text-lg ml-4">Mother's Income</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
        <option>Below 15000 Bdt</option>
              <option>15000 - 20000 Bdt</option>
              <option>25000 - 30000 Bdt</option>
              <option>30000 - 35000 Bdt</option>
              <option>35000 - 40000 Bdt</option>
              <option>40000 - 45000 Bdt</option>
              <option>45000 - 50000 Bdt</option>
              <option>50000 - 60000 Bdt</option>
              <option>60000 - 70000 Bdt</option>
              <option>70000 - 80000 Bdt</option>
              <option>80000 - 90000 Bdt</option>
              <option>90000 - 100000 Bdt</option>
              <option>100000 - 150000 Bdt</option>
              <option>150000 - 200000 Bdt</option>
              <option>300000 + Bdt</option>
            </select>
     </div>
          </div>    
          <div>
         <label className="text-lg ml-4">Mother's Education</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Father's Education"  name="profile" />
     </div>
          </div>

        </div>
        <br></br>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
              <label className="text-lg ml-4">Date of Birth</label> 
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
           <input id="profile" type="date" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder=""  name="profile" />
           </div>
          </div>
          
          <div>
         <label className="text-lg ml-4">If mother alive</label>
         <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
              <option>Yes</option>
              <option>No</option>
            </select>
     </div>
          </div>

        </div>
        <br></br>
        {/* sibling's details  */}
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
              <label className="text-lg ml-4">Sibling's Name</label> 
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
           <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Father's Name"  name="profile" />
           </div>
          </div>
          
          <div>
         <label className="text-lg ml-4">Elder/Younger</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
        <option>Elder</option>
        <option>Younger</option>
            </select>
     </div>
          </div> 
        </div>

        <br></br>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
        <div>
         <label className="text-lg ml-4">Age Gap</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Age gap"  name="profile" />
     </div>
          </div>    
          <div>
         <label className="text-lg ml-4">Sibling's Profession</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Sibling's Profession"  name="profile" />
     </div>
          </div>

        </div>
        <br></br>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
              <label className="text-lg ml-4">Sibling's Education</label> 
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
           <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Sibling's Education"  name="profile" />
           </div>
          </div>
          
          <div>
         <label className="text-lg ml-4">Sibling's Income</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
        <option>Below 15000 Bdt</option>
              <option>15000 - 20000 Bdt</option>
              <option>25000 - 30000 Bdt</option>
              <option>30000 - 35000 Bdt</option>
              <option>35000 - 40000 Bdt</option>
              <option>40000 - 45000 Bdt</option>
              <option>45000 - 50000 Bdt</option>
              <option>50000 - 60000 Bdt</option>
              <option>60000 - 70000 Bdt</option>
              <option>70000 - 80000 Bdt</option>
              <option>80000 - 90000 Bdt</option>
              <option>90000 - 100000 Bdt</option>
              <option>100000 - 150000 Bdt</option>
              <option>150000 - 200000 Bdt</option>
              <option>300000 + Bdt</option>
            </select>
     </div>
          </div>  

        </div>
        <br></br>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
          <div>
              <label className="text-lg ml-4">Sibling's Family</label> 
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
           <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Sibling's Family"  name="profile" />
           </div>
          </div>
          
          <div>
         <label className="text-lg ml-4">Marital Status</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
        <option>Married</option>
              <option>Unmarried</option>
              <option>Divorced</option>
              <option>Widowed</option>
            </select>
     </div>
          </div> 

          <div>
         <label className="text-lg ml-4">Is sibling alive</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
        <option>Yes</option>
              <option>No</option>
            </select>
     </div>
          </div>  

        </div>
          </div>
        </div>
        </>
      );

    case 1: 
   

     return (
        <>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 ml-12'>
          <div>
           
              <label className="text-lg ml-4">Add Profession</label>
           
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
            <input  id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Position"  name="profile" />
           </div>
          </div>

          <div>
         <label className="text-lg ml-4"></label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Duty"  name="profile" />
     </div>
          </div>
        </div>
        <br></br>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 ml-12'>
          <div>
          <label className="text-lg ml-4"></label>
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
            <input  id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Institute"  name="profile" />
           </div>
          </div>

          <div>
         <label className="text-lg ml-4"></label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Working Hours"  name="profile" />
     </div>
          </div>
        </div>
        <br></br>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 ml-12'>
          <div>
           
              <label className="text-lg ml-4"></label>
           
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
            <input  id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Special Achievements"  name="profile" />
           </div>
          </div>

          <div>
         <label className="text-lg ml-4">Profession Prove certificate</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="file" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400"  name="profile" />
     </div>
          </div>
        </div>
         
        </>
      );
    case 2:
      return (
        <>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 ml-12'>
          <div>
           
              <label className="text-lg ml-4">Add Educational Details</label>
           
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
            <input  id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Degree Name"  name="profile" />
           </div>
          </div>

          <div>
         <label className="text-lg ml-4"></label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Institute"  name="profile" />
     </div>
          </div>
        </div>
        <br></br>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 ml-12'>
          <div>
          <label className="text-lg ml-4"></label>
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
            <input  id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Department"  name="profile" />
           </div>
          </div>

          <div>
         <label className="text-lg ml-4"></label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Field of Study"  name="profile" />
     </div>
          </div>
        </div>
        <br></br>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 ml-12'>
          <div>
           
              <label className="text-sm ml-4">Year of Study Starts</label>
           
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
            <input  id="profile" type="date" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder=""  name="profile" />
           </div>
          </div>

          <div>
         <label className="text-sm ml-4">Year of Study Ends</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="date" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400"  name="profile" />
     </div>
          </div>
        </div>
        <br></br>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 ml-12'>
          <div>
           
              <label className="text-sm ml-4"></label>
           
           <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
            <input  id="profile" type="text" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400" placeholder="Special Achievements"  name="profile" />
           </div>
          </div>

          <div>
         <label className="text-sm ml-4">Photo of certificate</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
      <input id="profile" type="file" className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400"  name="profile" />
     </div>
          </div>
        </div>
         
        </>
      );
    case 3:
      return (
        <>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 ml-12'>
        <div>
         <label className="text-lg ml-4">Add Other Details</label>
         <br></br>
         <br></br>
         <label className="text-sm ml-4">Do you smoke?</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
        <option>Yes</option>
              <option>No</option>
              <option>Left Smoking</option>
              <option>Occasional</option>
            </select>
     </div>
          </div>  

      <div>
     <label className="text-lg ml-4"></label>
     <br></br>
         <br></br>
         <label className="text-sm ml-4">Do you drink?</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
        <option>Yes</option>
              <option>No</option>
              <option>Never Drinking</option>
              <option>Occasional</option>
            </select>
     </div>
      </div>
      <div>
     <label className="text-lg ml-4"></label>
     <br></br>
         <br></br>
         <label className="text-sm ml-4">Do you have tatoos?</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
        <option>Yes</option>
              <option>No</option>
              <option>Would like to have someday</option>
              <option>Occasional</option>
            </select>
     </div>
      </div>
    </div>
    <br></br>
    <div className='grid lg:grid-cols-3 sm:grid-cols-1 ml-12'>
        <div>
         <label className="text-sm ml-4">Do you have pets?</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
        <option>Yes</option>
              <option>No</option>
              <option>Would like to have someday</option>
              <option>Hate it</option>
            </select>
     </div>
          </div>  

      <div>
     <label className="text-lg ml-4"></label>
         <label className="text-sm ml-4">Do you have voluntary experience?</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
        <option>Yes</option>
              <option>No</option>
              <option>Would love to have someday</option>
              <option>Not interested in voluntering</option>
            </select>
     </div>
      </div>
      <div>
     <label className="text-lg ml-4"></label>
         <label className="text-sm ml-4">Have you travelled outside dhaka?</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
        <option>Yes</option>
              <option>No</option>
              <option>Would love to have someday</option>
              <option>Not interested in it</option>
            </select>
     </div>
      </div>
    </div>
    <br></br>
    <div className='grid lg:grid-cols-3 sm:grid-cols-1 ml-12'>
        <div>
         <label className="text-sm ml-4">Do you like join family?</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
        <option>Yes</option>
              <option>No</option>
              <option>I wouldn't mind</option>
            </select>
     </div>
          </div>  

      <div>
     <label className="text-lg ml-4"></label>
         <label className="text-sm ml-4">How many children are you planning to have after marriage?</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
        <option>1</option>
              <option>2</option>
              <option>More than 2</option>
              <option>I don't like children</option>
            </select>
     </div>
      </div>
      <div>
     <label className="text-lg ml-4"></label>
         <label className="text-sm ml-4">Do you believe in God?</label>
        <div className="flex items-center bg-gray-100 p-2 w-3/4  rounded-xl">  
        <select className="flex-1 outline-none h-full mr-20 bg-transparent text-sm text-gray-400">
        <option>Yes</option>
              <option>No</option>
              <option>I don't care</option>
            </select>
     </div>
      </div>
    </div>
     
    </>
      );
    default:
      return "All steps Finished !!!";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };


  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>
           
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSkip}
            >
              skip
            </Button>
          
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
