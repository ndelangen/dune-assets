import { FC, PropsWithChildren } from 'react';

import styles from './Text.module.css';

export const Text: FC<PropsWithChildren<{ columns?: number; size?: number }>> = ({
  columns = 1,
  size = 2,
  children,
}) => (
  <div
    className={styles.main}
    style={{
      ...(columns ? { columns, gap: '4vw' } : {}),
      fontSize: `${size}vw`,
      lineHeight: `${size * 1.6}vw`,
    }}
  >
    {children}
  </div>
);

// import styled from '@emotion/styled';
// import * as colors from '../presets/colors';

// export const Text = styled.div<{ columns?: number; size?: number }>(
//   ({ columns = 1 }) =>
//     columns > 1
//       ? {
//           columns: columns,
//           gap: '4vw',
//         }
//       : {},
//   ({ size = 2 }) => ({
//     fontSize: `${size}vw`,
//     lineHeight: `${size * 1.6}vw`,
//   }),
//   {
//     fontFamily: 'C_Caladea',
//     color: '#0b0503',

//     '& > *': {
//       breakInside: 'avoid-column',
//       boxSizing: 'border-box',
//     },
//     '&&& > * + *': {
//       marginTop: '2vw',
//     },
//     '&& * + p': {
//       marginTop: '1vw',
//     },
//     '& ul, & ol, & p': {
//       margin: 0,
//     },
//     '& * + ul': {
//       marginTop: '1vw',
//       marginLeft: '0.4vw',
//       paddingLeft: '1.5vw',
//     },
//     '& * + ol': {
//       marginTop: '1vw',
//       marginLeft: '0.4vw',
//       paddingLeft: '1.5vw',
//     },

//     '& img': {
//       display: 'inline-flex',
//       width: 'fill-available',
//     },
//     '& svg': {
//       display: 'inline-flex',
//       width: 'fill-available',
//     },

//     '& hr': {
//       borderTop: '0 none',
//       borderLeft: '0 none',
//       borderRight: '0 none',
//       height: 0,
//       margin: 0,
//       borderBottom: '1px solid silver',
//     },

//     '& h2, & h3, & h4, & h5, & h6': {
//       margin: 0,
//       padding: 0,
//       fontFamily: 'C_Trebuchet',
//     },

//     '& h1': {
//       margin: 0,
//       padding: 0,
//       fontFamily: 'C_Copperplate_Gothic',
//       fontSize: '3vw',
//     },
//     '& h2': {
//       fontSize: '2vw',
//       fontFamily: 'inherit',
//     },
//     '& h3': {
//       fontFamily: 'inherit',
//       textDecoration: 'underline',
//     },

//     '& blockquote': {
//       fontFamily: 'inherit',
//       borderLeft: `1vw solid ${colors.tint1}`,
//       background: colors.tint0,
//       fontStyle: 'italic',
//       padding: '1vw 4vw',
//       margin: 0,
//       display: 'block',
//     },

//     '& table': {
//       border: '1px solid black',
//       display: 'table',
//       width: 'fill-available',
//       borderCollapse: 'collapse',

//       td: {
//         border: '1px solid black',
//         padding: '1vw',
//       },
//       th: {
//         border: '1px solid black',
//         padding: '1vw',
//         textAlign: 'left',
//       },
//     },
//   },
// );

// export const NonBreaking = styled.div({
//   breakInside: 'avoid-column',
// });
