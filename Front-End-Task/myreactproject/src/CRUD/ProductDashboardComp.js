
import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductDashboardComp = () => {

    const [itemData, setItemData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios.get(`http://localhost:8888/products`).then((res) => {
            console.log(res.data);
            setItemData(res.data)
        }).catch((error) => { })
    }

    const deleteRecord = (id) => {
        if (window.confirm(`Are You sure To Delete the Record with Id : ${id}`)) {
            axios.delete(`http://localhost:8888/products/${id}`).then(() => {
                window.alert("Record Delete Sucessfully");
                fetchData();
            }).catch((error) => { })
        }
    }

 

    return (
        <div>
            <table className='table table-hover table-striped'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Company</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemData.map((val, index) => {
                            return <tr>
                                <td>{index+1}</td>
                                <td>{val.pname}</td>
                                <td>{val.price}</td>
                                <td>{val.company}</td>
                                <td><Button variant='outlined'  className='btn-sm' onClick={() => deleteRecord(val.id)}>Delete</Button>{" | "}
                                <Link to={`/mydashboard/productUpdate/${val.id}`}  className='btn btn-primary btn-sm' >Edit</Link>{" "} </td>
                            </tr>
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default ProductDashboardComp
