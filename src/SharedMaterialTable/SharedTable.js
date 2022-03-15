
import React from "react";
import { useTable, usePagination } from 'react-table'
//import 'bootstrap/dist/css/bootstrap.min.css';

function Table({ columns, data }) {
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 2, pageSize: 5 },
        },
        usePagination
    )
    return (
        <div className="mt-48">
            {/* <pre>
                <code>
                    {JSON.stringify(
                        {
                            pageIndex,
                            pageSize,
                            pageCount,
                            canNextPage,
                            canPreviousPage,
                        },
                        null,
                        2
                    )}
                </code>
            </pre> */}
            <div className="pl-20 pr-20 mb-48 w-full ">
                <table className="table border-2 w-full" {...getTableProps()}>
                    <thead className="bg-neutral-500 text-white h-12">
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()} className="px-3">
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className="">
                        {page.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} className="h-20 px-3">
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            
            {/* Pagination */}
            <ul className="pagination">
                <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <a className="page-link">First</a>
                </li>
                <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <a className="page-link">{'<'}</a>
                </li>
                <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                    <a className="page-link">{'>'}</a>
                </li>
                <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    <a className="page-link">Last</a>
                </li>
                <li>
                    <a className="page-link">
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </a>
                </li>
                <li>
                    <a className="page-link">
                        <input
                            className="form-control"
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                            style={{ width: '100px', height: '20px' }}
                        />
                    </a>
                </li>{' '}
                <select
                    className="form-control"
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                    style={{ width: '120px', height: '38px' }}
                >
                    {[5, 10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </ul>
        </div>
    )
}

function SharedTable() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Column Name',
                accessor: 'columnName',
            },
            {
                Header: 'Data type',
                accessor: 'datatype',
            },
            {
                Header: 'Is Nullable',
                accessor: 'isNullable',
            },
            {
                Header: 'Default Value',
                accessor: 'defaultVal',
            },
            {
                Header: 'Relationships',
                accessor: 'relationships',
            },
            {
                Header: 'Min Value',
                accessor: 'minVal',
            },
            {
                Header: 'Max Value',
                accessor: 'maxVal',
            },
            {
                Header: '% of Null Value',
                accessor: 'percentageNull',
            },
            {
                Header: '% of Duplicate Value',
                accessor: 'percentageDuplicate',
            }
                
            
        ],
        []
    )

    const data = [
        {
            'columnName': "Col_Name_1",
            "datatype": "VaChar",
            'isNullable': 'Yes',
            'defaultVal': 'Yes',
            'relationships': 'NA',
            'minVal': "NA",
            'maxVal': 'NA',
            'percentageNull': '78',
            'percentageDuplicate': 'NA'

        },
        {
            'columnName': "Col_Name_2",
            "datatype": "VarChar",
            'isNullable': 'Yes',
            'defaultVal': 'Yes',
            'relationships': 'NA',
            'minVal': "NA",
            'maxVal': 'NA',
            'percentageNull': '78',
            'percentageDuplicate': 'NA'

        },
        {
            'columnName': "Col_Name_3",
            "datatype": "VarChar",
            'isNullable': 'Yes',
            'defaultVal': 'Yes',
            'relationships': 'NA',
            'minVal': "NA",
            'maxVal': 'NA',
            'percentageNull': '78',
            'percentageDuplicate': 'NA'

        },
        {
            'columnName': "Col_Name_4",
            "datatype": "VarChar",
            'isNullable': 'Yes',
            'defaultVal': 'Yes',
            'relationships': 'NA',
            'minVal': "NA",
            'maxVal': 'NA',
            'percentageNull': '78',
            'percentageDuplicate': 'NA'

        },
        {
            'columnName': "Col_Name_5",
            "datatype": "VarChar",
            'isNullable': 'Yes',
            'defaultVal': 'Yes',
            'relationships': 'NA',
            'minVal': "NA",
            'maxVal': 'NA',
            'percentageNull': '78',
            'percentageDuplicate': 'NA'

        },
        {
            'columnName': "Col_Name_6",
            "datatype": "VarChar",
            'isNullable': 'Yes',
            'defaultVal': 'Yes',
            'relationships': 'NA',
            'minVal': "NA",
            'maxVal': 'NA',
            'percentageNull': '78',
            'percentageDuplicate': 'NA'

        },
        {
            'columnName': "Col_Name_7",
            "datatype": "VarChar",
            'isNullable': 'Yes',
            'defaultVal': 'Yes',
            'relationships': 'NA',
            'minVal': "NA",
            'maxVal': 'NA',
            'percentageNull': '78',
            'percentageDuplicate': 'NA'

        },
        {
            'columnName': "Col_Name_8",
            "datatype": "VarChar",
            'isNullable': 'Yes',
            'defaultVal': 'Yes',
            'relationships': 'NA',
            'minVal': "NA",
            'maxVal': 'NA',
            'percentageNull': '78',
            'percentageDuplicate': 'NA'

        },
        {
            'columnName': "Col_Name_9",
            "datatype": "VarChar",
            'isNullable': 'Yes',
            'defaultVal': 'Yes',
            'relationships': 'NA',
            'minVal': "NA",
            'maxVal': 'NA',
            'percentageNull': '78',
            'percentageDuplicate': 'NA'

        },
        {
            'columnName': "Col_Name_10",
            "datatype": "VarChar",
            'isNullable': 'Yes',
            'defaultVal': 'Yes',
            'relationships': 'NA',
            'minVal': "NA",
            'maxVal': 'NA',
            'percentageNull': '78',
            'percentageDuplicate': 'NA'

        },
        {
            'columnName': "Col_Name_11",
            "datatype": "VarChar",
            'isNullable': 'Yes',
            'defaultVal': 'Yes',
            'relationships': 'NA',
            'minVal': "NA",
            'maxVal': 'NA',
            'percentageNull': '78',
            'percentageDuplicate': 'NA'

        },
        {
            'columnName': "Col_Name_12",
            "datatype": "VarChar",
            'isNullable': 'Yes',
            'defaultVal': 'Yes',
            'relationships': 'NA',
            'minVal': "NA",
            'maxVal': 'NA',
            'percentageNull': '78',
            'percentageDuplicate': 'NA'

        },
        {
            'columnName': "Col_Name_13",
            "datatype": "VarChar",
            'isNullable': 'Yes',
            'defaultVal': 'Yes',
            'relationships': 'NA',
            'minVal': "NA",
            'maxVal': 'NA',
            'percentageNull': '78',
            'percentageDuplicate': 'NA'

        },
        
        ]
    // console.log(JSON.stringify(data));


    return (
        <Table columns={columns} data={data} />
    )
}

export default SharedTable;