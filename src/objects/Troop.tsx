import { FC } from 'react';
import { z } from 'zod';

import { Troop } from '../data/objects';

export const TroopToken: FC<z.infer<typeof Troop>> = ({ background, image, star, striped, back }) => (
  <div>
    <h2 style={{ fontFamily: 'C_Copperplate_Gothic' }}>Hello</h2>
    <pre style={{ color: 'orange' }}>
      {JSON.stringify(
        {
          background,
          image,
          striped,
          star,
          back,
        },
        null,
        2,
      )}
    </pre>
  </div>
);
