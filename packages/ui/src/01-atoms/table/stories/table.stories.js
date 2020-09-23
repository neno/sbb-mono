/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Table from '../index';
import { tableData, sideHeaderTableData, twoHeadersTableData } from './table.data';

export default {
    title: '01-Atoms/Table',
};

export const HeadersTop = () => renderToStaticMarkup(
    <Table tableData={tableData} />,
);

export const AlignCenter = () => renderToStaticMarkup(
    <Table tableData={tableData} classes={['a-table--align-center']} />,
);

export const AlignLeft = () => renderToStaticMarkup(
    <Table tableData={tableData} classes={['a-table--align-left']} />,
);

export const AlignRight = () => renderToStaticMarkup(
    <Table tableData={tableData} classes={['a-table--align-right']} />,
);

export const HeadersSide = () => renderToStaticMarkup(
    <Table tableData={sideHeaderTableData} classes={['a-table--align-left']} />,
);

export const TwoHeaders = () => renderToStaticMarkup(
    <Table tableData={twoHeadersTableData} classes={['a-table--align-center']} />,
);
