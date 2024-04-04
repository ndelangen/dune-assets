import { z } from 'zod';

import { Sheet } from '../data/objects';
import { isLight } from '../utils/contrast';
import { MarkdownContent } from '../utils/MarkdownContent';
import styles from './Sheet.module.css';

export const FactionSheet = ({
  logo,
  name,
  rules,
  start,
  revival,
  fate,
  alliance,
  troops,
  leaders,
  color,
  extras,
}: z.infer<typeof Sheet>) => {
  const rulesWithKarama = rules.filter((r) => !!r.karama);
  const hasKarama = rulesWithKarama.length > 0 || !!alliance.karama;
  const hasTroops = troops.length > 0;
  const hasLeaders = leaders.length > 0;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @property --header-bg-color {
              syntax: "<color>";
              inherits: false;
              initial-value: ${color};
            }
            @property --header-text-color {
              syntax: "<color>";
              inherits: false;
              initial-value: ${isLight(color) ? 'black' : 'white'};
            }
          `,
        }}
      />
      <div className={styles.container}>
        <div className={styles.page}>
          <div className={`${styles.page_title} ${styles.title}`}>{name}</div>
          <div className={styles.logo}>
            <img src={logo} />
          </div>
          <div className={styles.start}>
            <strong className={styles.head}>At start:</strong> <MarkdownContent>{start}</MarkdownContent>
          </div>
          <div className={styles.revival}>
            <strong className={styles.head}>Revival:</strong> <MarkdownContent>{revival}</MarkdownContent>
          </div>
          <div className={styles.rules}>
            <div className={styles.subtitle}>Advantages</div>
            {rules.map((rule) => (
              <div className={styles.rule}>
                {rule.title && (
                  <div className={styles.head}>
                    {rule.title}
                    {rule.karama && '*'}:&nbsp;
                  </div>
                )}
                <div className={styles.text}>
                  <MarkdownContent>{rule.text}</MarkdownContent>
                </div>
              </div>
            ))}
            <div className={styles.subtitle}>Alliance</div>
            <div className={styles.rule}>
              {alliance.title && (
                <div className={styles.head}>
                  {alliance.title}
                  {alliance.karama && '*'}:&nbsp;
                </div>
              )}
              <div className={styles.text}>
                <MarkdownContent>{alliance.text}</MarkdownContent>
              </div>
            </div>
            <div className={styles.subtitle}>Fate</div>
            <div className={styles.rule}>
              {fate.title && (
                <div className={styles.head}>
                  {fate.title}
                  {fate.karama && '*'}:&nbsp;
                </div>
              )}
              <div className={styles.text}>
                <MarkdownContent>{fate.text}</MarkdownContent>
              </div>
            </div>
          </div>
        </div>
        {hasKarama || hasTroops || hasLeaders ? (
          <>
            <div className={styles.page}>
              <div className={`${styles.page_subtitle} ${styles.subtitle}`}>Karama effects</div>
              <div className={styles.details}>
                <div className={styles.karama}>
                  {rulesWithKarama.map((rule) => (
                    <div className={styles.rule}>
                      <div className={styles.head}>{rule.title}:&nbsp;</div>
                      <div className={styles.text}>
                        <MarkdownContent>{rule.karama}</MarkdownContent>
                      </div>
                    </div>
                  ))}
                  {alliance.karama && (
                    <div className={styles.rule}>
                      <div className={styles.head}>{alliance.title || 'Alliance'}:&nbsp;</div>
                      <div className={styles.text}>
                        <MarkdownContent>{alliance.karama}</MarkdownContent>
                      </div>
                    </div>
                  )}
                </div>
                {troops.length > 0 && (
                  <>
                    <div className={styles.subtitle}>Troops</div>
                    <div className={styles.troops}>
                      {troops.map((t) => (
                        <>
                          <div className={styles.troop}>
                            <img src={t.image} />
                            <section>
                              <div className={styles.head}>{t.name}</div>
                              <div className={styles.text}>
                                <MarkdownContent>{t.description}</MarkdownContent>
                              </div>
                            </section>

                            {t.back && (
                              <>
                                <img className={styles.icon} src="vector/icon/flip.svg" />
                                <div>to:</div>
                                <img src={t.back.image} />
                                <section>
                                  <div className={styles.head}>{t.back.name}</div>
                                  <div className={styles.text}>
                                    <MarkdownContent>{t.back.description}</MarkdownContent>
                                  </div>
                                </section>
                              </>
                            )}
                          </div>
                        </>
                      ))}
                    </div>
                  </>
                )}
                {leaders.length > 0 && (
                  <>
                    <div className={styles.subtitle}>Leaders</div>
                    <div className={styles.leaders}>
                      {leaders.map((l) => (
                        <div>
                          <img src={l} />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        ) : null}
        {extras && extras.length > 0 && (
          <div className={styles.page_dynamic}>
            {extras.map((extra) => (
              <>
                <div className={styles.subtitle}>{extra.name}</div>
                <div className={styles.text}>
                  <MarkdownContent>{extra.description}</MarkdownContent>
                </div>
                <div className={styles.extra}>
                  {extra.items.map((item) => (
                    <div>
                      <img src={item.url} />
                      {item?.description && (
                        <div className={styles.text}>
                          <MarkdownContent>{item.description}</MarkdownContent>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
