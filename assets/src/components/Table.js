import React from "react"
import classNames from "classnames";

const Row = ({ rowData, TableCell, children, className, onClick, columnOrder, ...props }) => {
  return (
    <tr className={classNames("cursor-pointer hover:bg-red-200", className)} onClick={() => onClick(rowData) } {...props}>
      {columnOrder.map(field => (
        <TableCell key={field}>{rowData[field]}</TableCell>
      ))}
    </tr>
  )
}

const Cell = ({ children, ...props }) => {
  return (
    <td className="pt-1 pb-1 pr-3 pl-3" {...props}>
      {children}
    </td>
  )
}

const Header = ({ headers, ...props }) => {
  return (
    <thead className="border-b border-gray-900 bg-gray-400" {...props}>
      <tr>
        {headers.map(header => (
          <th className="text-left pt-1 pb-1 pl-3 pr-3" key={header}>{header}</th>
        ))}
      </tr>
    </thead>
  )
}

const Table = ({ TableRow = Row, TableCell = Cell, TableHeader = Header, headers, data, className, onRowClick, ...props }) => {
  return (
    <table className={classNames("text-gray-900 shadow-sm border border-gray-900", className)} {...props}>
      <TableHeader headers={headers.map(header => header.label)} />

      <tbody>
        {data.map((row, i) => (
          <TableRow
            columnOrder={headers.map(header => header.column)}
            rowData={row}
            key={i}
            TableCell={TableCell}
            className={classNames({
              "bg-gray-100": i % 2 === 0,
              "bg-gray-200": i % 2 === 1
            })}
            onClick={onRowClick}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Table
