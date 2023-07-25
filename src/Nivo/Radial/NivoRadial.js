import React from 'react';
import { ResponsiveRadialBar } from '@nivo/radial-bar';
import data from './data';

const colors = [
  '#003f5c',
  '#2f4b7c',
  '#665191',
  '#a05195',
  '#d45087',

  
];

const MyResponsiveRadialBar = () => (
  <ResponsiveRadialBar
    data={data} // Use the 'data' prop here to pass the imported data to the chart
    colors={colors} // Use the 'colors' prop to pass the provided colors to the chart
    valueFormat=">-.2f"
    padding={0.4}
    cornerRadius={2}
    margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
    radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
    circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
    legends={[
      {
        anchor: 'right',
        direction: 'column',
        justify: false,
        translateX: 80,
        translateY: 0,
        itemsSpacing: 6,
        itemDirection: 'left-to-right',
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#999',
        symbolSize: 18,
        symbolShape: 'square',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000'
            }
          }
        ]
      }
    ]}
  />
);

export default MyResponsiveRadialBar;
