import React from "react"
import classNames from "classnames";

import css from "<style>";
import styles from "./style.css";

const Row = ({ rowData, TableCell, children, className, onClick, columnOrder, ...props }) => {
  return (
    <tr className={classNames(styles.row, className)} {...props} onClick={() => onClick(rowData) }>
      {columnOrder.map(field => (
        <TableCell key={field}>{rowData[field]}</TableCell>
      ))}
    </tr>
  )
}

const Cell = ({ children, ...props }) => {
  return (
    <td className={css`pt1 pb1 pl3 pr3`} {...props}>
      {children}
    </td>
  )
}

const Header = ({ headers, ...props }) => {
  return (
    <thead className={css`bgOffwhite300`}>
      <tr>
        {headers.map(header => (
          <th className={css`textLeft pt1 pb1 pl3 pr3`} key={header}>{header}</th>
        ))}
      </tr>
    </thead>
  )
}

const Table = ({ TableRow = Row, TableCell = Cell, TableHeader = Header, headers, data, className, onRowClick, ...props }) => {
  return (
    <table className={classNames(styles.table, className)} {...props}>
      <TableHeader headers={headers.map(header => header.label)} />

      <tbody>
        {data.map((row, i) => (
          <TableRow
            columnOrder={headers.map(header => header.column)}
            rowData={row}
            key={i}
            TableCell={TableCell}
            className={classNames({
              [css`bgWhite`]: i % 2 === 0,
              [css`bgOffwhite300`]: i % 2 === 1
            })}
            onClick={onRowClick}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Table
