import React from 'react';
import {useQuery,gql} from '@apollo/client';

const GET_EMPLOYEES = gql`
  query GetEmployees {
    employee {
      name
      salary
      experience
    }
  }
`;

function Employee() {
    const { loading, error, data } = useQuery(GET_EMPLOYEES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const {employee}=data;
    return(
        <div>
            <table>
                {
                    employee.map(emp=>{
                        return(<tr>
                            <td>{emp.name}</td>
                            <td>{emp.salary}</td>
                            <td>{emp.experience}</td>
                        </tr>)
                    })
                }
            </table>
        </div>
    )
    console.log(data)
  return (
    <div>
        <div>
            <h2>My first Apollo app 🚀</h2>
            <p>Employee Name:{data.name}</p>
        </div>
      </div>
    
  
  );
}

export default Employee;
