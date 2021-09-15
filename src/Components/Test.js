import React from 'react'
import { Table, Tag, Space } from 'antd';

const Test = () => {

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    name: { firstName: 'John', lastName: 'Brown'},
    //lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

    return (
        <div>
            <Table dataSource={data}>
   
      <Column title="First Name" dataIndex={data?.name} key="firstName" />
      {/* <Column title="Last Name" dataIndex="lastName" key="lastName" />
   
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
   */}
  </Table>
        </div>
    )
}

export default Test;
