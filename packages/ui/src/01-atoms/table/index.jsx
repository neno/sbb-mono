import React from 'react';

const Table = ({ tableData = {}, classes = [], tableClasses = [] }) => {
    const cls = ['a-table', ...classes];
    const tblCls = ['a-table__table', ...tableClasses];
    return (
        <div className={cls.join(' ')}>
            <table className={tblCls.join(' ')}>
                {tableData.columns
          && (
              <thead className="a-table__thead">
                  <tr>
                      {tableData.columns.map(th => (<th key={encodeURIComponent(th)} className="a-table__th" scope="col">{th}</th>))}
                  </tr>
              </thead>
          )}
                {tableData.data
          && (
              <tbody className="a-table__tbody">
                  {tableData.data.map((tr, index) => (
                      <tr key={tableData.rows[index]} className="a-table__tr">
                          {tableData.rows && <th className="a-table__td" scope="row">{tableData.rows[index]}</th>}
                          {tr.map(td => (<td key={encodeURIComponent(td)} className="a-table__td">{td}</td>))}
                      </tr>
                  ))}
              </tbody>
          )}
            </table>
        </div>
    );
};

export default Table;
