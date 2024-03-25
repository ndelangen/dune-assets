import { FC } from 'react';
import { z } from 'zod';

import { Troop } from '../data/objects';

export const TroopToken: FC<z.infer<typeof Troop>> = ({ background, id, modifiers, back }) => (
  <pre style={{ color: 'orange' }}>
    {JSON.stringify(
      {
        background,
        id,
        modifiers,
        back,
      },
      null,
      2,
    )}
  </pre>
);
