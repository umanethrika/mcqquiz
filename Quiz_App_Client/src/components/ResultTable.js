import React, { useEffect, useState } from 'react'
import { getServerData } from '../helper/helper'

export default function ResultTable() {

    const [data, setData] = useState([])

    // useEffect(() => {
    //     getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
    //         setData(res)
    //     })
    // })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`;
                console.log("Fetching data from URL:", url); // Log the URL for debugging
                await getServerData(url, setData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                { !data ?? <div>No Data Found </div>}
                {
                    data.map((v, i) => (
                        <tr className='table-body' key={i}>
                            <td>{v?.username || ''}</td>
                            <td>{v?.attempts || 0}</td>
                            <td>{v?.points || 0}</td>
                            <td>{v?.achived || ""}</td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
  )
}
