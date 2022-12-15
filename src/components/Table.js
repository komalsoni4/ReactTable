import React,{useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {setProducts} from "../redux/actions/ProductAction";
const Table = () => {
  

   const products=useSelector((state)=>state.allProcucts.products);
   const renderList= products.map((product)=>{
    const {date,app_id,clicks,impression,requests,revenue,responses}=products;
    return (
        <tr>
        <td>
        {date}
        </td>
        <td>{app_id}</td>
        <td>{requests}</td>
        <td>{responses}</td>
        <td>{revenue}</td>
        <td>{impression}</td>
        <td>{clicks}</td>
        <td></td>
        <td></td>
        </tr>
    );
   });
 
  return (
   
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>App Id</th>
                        <th>Ad Requests</th>
                        <th>Ad Responses</th>
                        <th>Revenue</th>
                        <th>Impression</th>
                        <th>Clicks</th>
                        <th>Fill Rate</th>
                        <th>CTR</th>
                        
                    </tr>
                </thead>
                <tbody>

                </tbody>
              
               {renderList}
                
            </table>
        </div>
   
  );
};

export default Table;
