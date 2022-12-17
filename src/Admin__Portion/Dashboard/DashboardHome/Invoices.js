//configuration
import React, { useState } from 'react';
//third party components
import { Table } from 'antd';


//table data
const columns = [
    {
        title: 'Invoice Number',
        dataIndex: 'invoiceNum',
    },
    {
        title: 'Customer Name',
        dataIndex: 'customer',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: data => <button>{data}</button>
    },
    {
        title: 'Date',
        dataIndex: 'date',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        render: (item) => <button>View</button>
    },
];
const data = [];
for (let i = 0; i < 10; i++) {
    data.push({
        key: i,
        invoiceNum: `icto${i}`,
        customer: `john ${i}`,
        status: `pending`,
        date: `${i}/12/2023`,
        action: 'view'

    });
}
const Invoices = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
        <div>
            <div
                style={{
                    marginBottom: 16,
                }}
            >

                <span
                    style={{
                        marginLeft: 8,
                    }}
                >
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
    );
};
export default Invoices;