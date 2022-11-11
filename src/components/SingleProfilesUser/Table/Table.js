import React, { useEffect, useState } from 'react';
import "../../../assets/css/table.css";
import Title from '../Title/Title';

const Table = () => {
  const [tables, setTables] = useState([])
  useEffect(() => {
    fetch('json/tableData.json')
      .then(res => res.json())
      .then(data => {
        setTables(data)
      })
  }, [])
  return (
    <div>
      <div className='pt-5'>
        <div className='notification-bar'>
          <div class="flex justify-center items-center gap-4">
            <button class="mt-4 font-medium leading-tight text-gray-800">
              Active
            </button>
            <button class="mt-4 font-medium leading-tight text-gray-800">
              Notify
            </button>
            <button class="mt-4 font-medium leading-tight text-gray-800">
              Example
              <span class="inline-block px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-pink-600 text-white rounded">1</span>
            </button>
            <button class="mt-4 font-medium leading-tight text-gray-800">
              heading
              <span class="inline-block px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-pink-600 text-white rounded">1</span>
            </button>
            <button class="mt-4 font-medium leading-tight text-gray-800">
              Message
              <span class="inline-block px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-pink-600 text-white rounded">1</span>
            </button>
          </div>
        </div>
      </div>
      {/* table 1 */}
      <div className='my-6 py-6 table-bar px-8'>
        <div>
          <Title titleText="This is first Table"></Title>
        </div>
        {
          tables.map(t => {
            return (
              <div className=''>
                <div className='flex justify-between custom-design'>
                  <h1>{t.name}</h1>
                  <h1>{t.title}</h1>
                </div>
              </div>
            )
          })
        }
      </div>
      <div class="w-full mt-10 bg-white px-4 py-6 rounded-lg shadow ">
        <Title titleText="Myself Summary"></Title>
        <div class="">
          <div class="text-left">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate blanditiis cum amet corrupti! Repellendus veritatis
              dicta reiciendis eligendi, vero ea nemo. Adipisci tenetur quis
              neque assumenda a libero maiores eaque?
            </p>
          </div>
        </div>
      </div>
      <div className='my-6 py-6 table-bar px-8'>
        <div>
          <Title titleText="This is third Table"></Title>
        </div>
        {
          tables.map(t => {
            return (
              <div className=''>
                <div className='flex justify-between custom-design'>
                  <h1>{t.name}</h1>
                  <h1>{t.title}</h1>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='my-6 py-6 table-bar px-8'>
        <div>
          <Title titleText="This is second Table"></Title>
        </div>
        {
          tables.map(t => {
            return (
              <div className=''>
                <div className='flex justify-between custom-design'>
                  <h1>{t.name}</h1>
                  <h1>{t.title}</h1>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Table;