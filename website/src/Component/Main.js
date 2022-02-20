import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'


const Main = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false) 

    const headers = {
        'Authorization': 'Bearer my-auth-token',
        'X-CoinAPI-Key': '788749A6-71D1-4484-8E9A-82DD1C45F439',
        'Retry-After': 3600
      };
      
      useEffect(()=>{
        axios.get("https://rest.coinapi.io/v1/exchanges", { headers })
        .then(response => {
          console.log("Status: ", response.status);
          console.log("Data: ", response.data);
          setPosts(response.data)
          setLoading(true)
        }).catch(error => {
          console.error('Something went wrong!', error);
        });
      }, [])

    return (
        <>
        
        {loading && posts.map((value)=>(
          <>
          <Table striped bordered hover className='my-auto table'>
          <tr>
          <th></th>
          <th>Name</th>
          <th>Last Price</th>
          <th>24h change</th>
          </tr>
          <tbody>
            <tr>
            <td>{value.posts}</td>
            <td>{value.exchange_id}</td>
            <td>{value.volume_1hrs_usd}</td>
            <td>{value.volume_1day_usd}</td>
            <td>{value.data_start}</td>
            </tr>
            </tbody>
          </Table>
          </>
          
        ))}
        

        </>
    )
}

export default Main
