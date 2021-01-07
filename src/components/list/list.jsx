import React, { useState, useEffect } from 'react'
import data from '../../data/data'
import './list.css'

export default function Dashboard() {
    return (
        <div className = 'list'>
            <h3>This is the list of Customers</h3>
            <table>
                <tr>
                    <th>#Number</th>
                    <th>Invoice Number</th>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Purchase Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Tracking</th>
                </tr>
                {data.dashBoardData.map((el,ind) => {
                return (
                    <tr>
                        <td>{ind + 1 }</td>
                        <td>{el.invoice }</td>
                        <td>{el.first_name} , {el.last_name }</td>
                        <td>{el.email }</td>
                        <td>{el.purchaseOn }</td>
                        <td>{el.amount}</td>
                        <td className = {el.status}>{el.status }</td>
                        <td>{el.tracking }</td>
                    </tr>                    
                  )
                })}
            </table>
            
        </div>
    )
}