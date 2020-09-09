import React, { ComponentProps } from 'react';

export interface TableData {
    head: string[];
    body: {
        headings: string[];
        data: string[][];
    }
}

interface Props extends ComponentProps<'table'> {
    tableData: TableData;
    classes: string[];
    tableClasses: string[];
}

const Table: React.FC<Props> = ({ tableData, classes = [], tableClasses = [] }) => {
    const cls = ['a-table', ...classes];
    const tblCls = ['a-table__table', ...tableClasses];
    return (
        <div className={cls.join(' ')}>
            <table className={tblCls.join(' ')}>
                {tableData.head
          && (
              <thead className="a-table__thead">
                  <tr>
                      {tableData.head.map(th => (<th key={encodeURIComponent(th)} className="a-table__th" scope="col">{th}</th>))}
                  </tr>
              </thead>
          )}
                {tableData.body
          && (
              <tbody className="a-table__tbody">
                  {tableData.body.data.map((row, index) => (
                      <tr key={`row-${index.toString()}`} className="a-table__tr">
                          {tableData.body.headings[index] && <th className="a-table__td" scope="row">{tableData.body.headings[index]}</th>}
                          {row.map(col => (<td key={encodeURIComponent(col)} className="a-table__td">{col}</td>))}
                      </tr>
                  ))}
              </tbody>
          )}
            </table>
        </div>
    );
};

export default Table;
