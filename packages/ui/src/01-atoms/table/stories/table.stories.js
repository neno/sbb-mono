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
    <Table tableData={tableData} classes={['u-text-center']} />,
);

export const AlignLeft = () => renderToStaticMarkup(
    <Table tableData={tableData} classes={['u-text-left']} />,
);

export const AlignRight = () => renderToStaticMarkup(
    <Table tableData={tableData} classes={['u-text-right']} />,
);

export const HeadersSide = () => renderToStaticMarkup(
    <Table tableData={sideHeaderTableData} classes={['u-text-left']} />,
);

export const TwoHeaders = () => renderToStaticMarkup(
    <Table tableData={twoHeadersTableData} classes={['u-text-center']} />,
);
