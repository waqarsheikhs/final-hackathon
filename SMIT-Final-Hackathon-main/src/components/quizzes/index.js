import { Table } from 'antd';
import './Scss/index.scss';
import { Card, Col } from 'antd';
function Quizzes(){
    const columns = [
        {
            title:'Identifier',
            dataIndex:'identifier',
            key:'identifier'
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <p>{text}</p>,
        },
        {
          title: 'Questions',
          dataIndex: 'questions',
          key: 'questions',
        },
        {
          title: 'Answers',
          dataIndex: 'answers',
          key: 'answers',
        },
        {
          title: 'Points',
          key: 'points',
          dataIndex: 'points',
        }
      ];
    
    const data = [
        {
        key: '1',
        identifier: 'Quiz 1',
        name: 'Shaikh Muhammad Khizar',
        questions: 32,
        age: 18,
        address:'London No. 1 Lake Park',
        },
        {
        key: '2',
        identifier: 'Quiz 3',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
        },
        {
        key: '3',
        identifier: 'Quiz 6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
        },
        {
        key: '4',
        identifier: 'Quiz 1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
        },
        {
        key: '5',
        identifier: 'Quiz 3',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
        },
        {
        key: '6',
        identifier: 'Quiz 6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
        },
        {
        key: '7',
        identifier: 'Quiz 1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
        },
        {
        key: '8',
        identifier: 'Quiz 3',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
        },
        {
        key: '9',
        identifier: 'Quiz 6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
        },
        {
        key: '10',
        identifier: 'Quiz 1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
        },
        {
        key: '11',
        identifier: 'Quiz 3',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
        },
        {
        key: '12',
        identifier: 'Quiz 6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
        },
        {
        key: '13',
        identifier: 'Quiz 6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
        },
    ];
    return (
        <div className='Quizzes-Div' >
            <h3 className='Quizzes-heading'>
                Quizzes
            </h3>
            <Table 
            columns={columns} 
            dataSource={data} 
            pagination={{pageSize:4}}
            className='Content-Table'/>
            <div className="site-card-wrapper">
                {
                    data.map((v,i)=>
                    <Col key={v.key} className='Card-col'>
                        <Card title={
                        <>
                            <p className='p-row'>
                                <span className=''>Name:</span>
                                <span className='span'>{v.name}</span>
                            </p>
                            <p className='p-row'>
                                <span className=''>Student Id:</span>
                                <span className='span'>{v.identifier}</span>
                            </p>
                        </>
                        } bordered={false}
                        className='Card'>
                            
                            <p className='p-row'>
                                <span className=''>Age:</span>
                                <span className='span'>{v.age}</span>
                            </p>
                            <p className='p-row'>
                                <span className=''>Address:</span>
                                <span className='span'>{v.address}</span>
                            </p>
                        </Card>
                    </Col>)
                }
            </div>
        </div>
    );
}
export default Quizzes;