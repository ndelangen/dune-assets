/** biome-ignore-all lint/suspicious/noArrayIndexKey: I don't care */
import './Book.module.css';

import { type FC, Fragment, type ReactNode } from 'react';

import { Page } from './Page';

const defaultRatio = Math.sqrt(2);

export const Book: FC<{
  pages: ReactNode[];
  cover?: ReactNode;
  background?: boolean;
  ratio?: number;
}> = ({ cover, pages, background = true, ratio = defaultRatio }) => {
  const startingIndex = cover ? 1 : 0;

  return (
    <Fragment>
      <style
        media='print'
        // biome-ignore lint/security/noDangerouslySetInnerHtml: it's okay here
        dangerouslySetInnerHTML={{
          __html: `
            @page {
              margin: 0;
              size: 400mm ${ratio * 400}mm;
            }

          `,
        }}
      />

      {cover && (
        <Page pageNumber={0} background={false} ratio={ratio}>
          {cover}
        </Page>
      )}

      {pages.map((c, index) => (
        <Page key={index} pageNumber={index + startingIndex} background={background} ratio={ratio}>
          {c}
        </Page>
      ))}
    </Fragment>
  );
};
