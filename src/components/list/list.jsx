import React, { useState, useEffect } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import TablePagination from "@material-ui/core/TablePagination";
// import axios from "axios";
import dat from '../../data/data'
import './list.css'

export default function Dashboard() {
    const [data, setData] = useState(dat);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => { setPage(newPage);};
    const handleChangeRowsPerPage = (event) => {setRowsPerPage(parseInt(event.target.value, 10));setPage(0);};
    return (
        <div className = 'list'>
            <h3>This is the list of Customers</h3>
            <div className="page">
                <TablePagination
                component="div"
                count={data.dashBoardData.length}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            </div>
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
                {data.dashBoardData.map((el, ind) => {
                    console.log(el)
                    if (ind >= page * rowsPerPage && ind < rowsPerPage * page + rowsPerPage) {
                        return(
                        <tr>
                        <td>{ind + 1 }</td>
                        <td>{el.invoice }</td>
                        <td>{el.first_name} , {el.last_name }</td>
                        <td>{el.email }</td>
                        <td>{el.purchaseOn }</td>
                        <td>{el.amount}</td>
                        <td className = {el.status}>{el.status }</td>
                        <td>{el.tracking }</td>
                    </tr>)
                    }                       
                })}
            </table>
            
        </div>
    )
}