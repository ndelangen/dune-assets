import { type FC, type SVGProps } from 'react';

export const StrokedUse: FC<SVGProps<SVGUseElement>> = ({ stroke, strokeWidth, ...rest }) => (
  <>
    <use {...{ stroke, strokeWidth }} {...rest} />
    <use {...rest} />
  </>
);
