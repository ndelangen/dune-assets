import styled from '@emotion/styled';
import logo from '../../asset/cover/dune_logo.svg';

const ratio = Math.sqrt(2);

export const Cover = styled.div<{ background: string; offset?: number }>(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // width: '100vw',
    // height: `calc(100vw * ${ratio})`,
    zIndex: 1,

    '::after': {
      zIndex: 2,
      content: '""',
      position: 'absolute',
      top: '10vw',
      left: '10vw',
      right: '10vw',
      height: '40vw',
      backgroundImage: `url("${logo}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: `contain`,
    },
  },
  ({ background, offset }) => ({
    backgroundImage: `url("${background}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `cover`,
    backgroundPosition: offset ? `${offset}%` : 'center',
  }),
);
