/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */

import { memo, useState } from 'react';
import {
  WrapperStyled,
  TableWrapperStyled,
  TableStyled,
  TableRowStyled,
  TableHeadStyled,
  TableCellStyled,
  FooterStyled,
} from './style';

/* eslint-disable no-unused-vars */
const BaseTable = memo(({ data, footer }) => {
  const mockTableData = {
    head: [
      { key: 'height', value: 'Height' },
      { key: 'type', value: 'Type' },
      { key: 'mined on', value: 'Mined on' },
      { key: 'miner', value: 'Miner' },
      { key: 'reward', value: 'Reward' },
      { key: 'round time', value: 'Round Time' },
    ],
    body: [
      [
        { key: 'height', value: '10619917' },
        { key: 'type', value: 'Block' },
        { key: 'mined on', value: '8 Aug 2020, 17:08' },
        {
          key: 'miner',
          href:
            'https://flexpool.io/0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          value: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
        },
        {
          key: 'reward',
          value: '2.89 XCB',
        },
        {
          key: 'round time',
          value: '41.38 Seconds',
        },
      ],
      [
        { key: 'height', value: '10619917' },
        { key: 'type', value: 'Block' },
        { key: 'mined on', value: '8 Aug 2020, 17:08' },
        {
          key: 'miner',
          href:
            'https://flexpool.io/0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          value: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
        },
        {
          key: 'reward',
          value: '2.89 XCB',
        },
        {
          key: 'round time',
          value: '41.38 Seconds',
        },
      ],
      [
        { key: 'height', value: '10619917' },
        { key: 'type', value: 'Block' },
        { key: 'mined on', value: '8 Aug 2020, 17:08' },
        {
          key: 'miner',
          href:
            'https://flexpool.io/0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          value: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
        },
        {
          key: 'reward',
          value: '2.89 XCB',
        },
        {
          key: 'round time',
          value: '41.38 Seconds',
        },
      ],
      [
        { key: 'height', value: '10619917' },
        { key: 'type', value: 'Block' },
        { key: 'mined on', value: '8 Aug 2020, 17:08' },
        {
          key: 'miner',
          href:
            'https://flexpool.io/0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          value: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
        },
        {
          key: 'reward',
          value: '2.89 XCB',
        },
        {
          key: 'round time',
          value: '41.38 Seconds',
        },
      ],
      [
        { key: 'height', value: '10619917' },
        { key: 'type', value: 'Block' },
        { key: 'mined on', value: '8 Aug 2020, 17:08' },
        {
          key: 'miner',
          href:
            'https://flexpool.io/0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          value: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
        },
        {
          key: 'reward',
          value: '2.89 XCB',
        },
        {
          key: 'round time',
          value: '41.38 Seconds',
        },
      ],
      [
        { key: 'height', value: '10619917' },
        { key: 'type', value: 'Block' },
        { key: 'mined on', value: '8 Aug 2020, 17:08' },
        {
          key: 'miner',
          href:
            'https://flexpool.io/0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          value: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
        },
        {
          key: 'reward',
          value: '2.89 XCB',
        },
        {
          key: 'round time',
          value: '41.38 Seconds',
        },
      ],
      [
        { key: 'height', value: '10619917' },
        { key: 'type', value: 'Block' },
        { key: 'mined on', value: '8 Aug 2020, 17:08' },
        {
          key: 'miner',
          href:
            'https://flexpool.io/0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          value: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
        },
        {
          key: 'reward',
          value: '2.89 XCB',
        },
        {
          key: 'round time',
          value: '41.38 Seconds',
        },
      ],
      [
        { key: 'height', value: '10619917' },
        { key: 'type', value: 'Block' },
        { key: 'mined on', value: '8 Aug 2020, 17:08' },
        {
          key: 'miner',
          href:
            'https://flexpool.io/0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          value: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
        },
        {
          key: 'reward',
          value: '2.89 XCB',
        },
        {
          key: 'round time',
          value: '41.38 Seconds',
        },
      ],
      [
        { key: 'height', value: '10619917' },
        { key: 'type', value: 'Block' },
        { key: 'mined on', value: '8 Aug 2020, 17:08' },
        {
          key: 'miner',
          href:
            'https://flexpool.io/0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          value: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
        },
        {
          key: 'reward',
          value: '2.89 XCB',
        },
        {
          key: 'round time',
          value: '41.38 Seconds',
        },
      ],
    ],
    footer: null,
  };
  const [tableData, setTableData] = useState(data || mockTableData);

  const cutValue = (value) => `${value.slice(0, 10)}...${value.slice(-6)}`;

  return (
    <WrapperStyled>
      <TableWrapperStyled>
        <TableStyled>
          <thead>
            <TableRowStyled>
              {tableData.head.map(({ key, value }) => (
                <TableHeadStyled key={key}>{value}</TableHeadStyled>
              ))}
            </TableRowStyled>
          </thead>
          <tbody>
            {tableData.body.map((tableRow, index) => (
              <TableRowStyled key={index}>
                {tableRow.map(({ key, value, href }) => (
                  <TableCellStyled key={key}>
                    {href ? <a href={href}>{cutValue(value)}</a> : value}
                  </TableCellStyled>
                ))}
              </TableRowStyled>
            ))}
          </tbody>
        </TableStyled>
      </TableWrapperStyled>
      {footer && <FooterStyled>{footer}</FooterStyled>}
    </WrapperStyled>
  );
});

export default BaseTable;
