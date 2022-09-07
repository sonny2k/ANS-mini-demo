import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Names from '@/pages/names';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [connected, setConnected] = React.useState<true | false>(false);
  const [btnName, setBtnName] = React.useState<'Connect' | '0XA24..2C'>(
    'Connect'
  );
  function displayNames() {
    if (connected === true) {
      setConnected(false);
      setBtnName('Connect');
    } else if (connected === false) {
      setConnected(true);
      setBtnName('0XA24..2C');
    }
  }

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section>
          <div>
            <div>
              <div
                style={{
                  position: 'fixed',
                  top: '16px',
                  left: '16px',
                  right: '16px',
                  bottom: '16px',
                  pointerEvents: 'none',
                }}
              ></div>
            </div>
            <div>
              <Header
                connected={connected}
                setConnected={setConnected}
                btnName={btnName}
                setBtnName={setBtnName}
              />
              <div className='bg-black text-lg text-white'>
                <section className='min-h-screen pt-32 pb-32'>
                  <div className='mx-auto flex max-w-screen-xl flex-col gap-8 px-4 pt-16 pb-12 text-center'>
                    <div className='font-extrabold text-2xl md:text-5xl'>
                      Manage
                    </div>
                    <div className='font-normal text-sm normal-case md:text-2xl'>
                      Update records and addresses <br className='md:hidden' />{' '}
                      for your names.{' '}
                    </div>
                    <div className='pt-16'>
                      {connected === true ? (
                        <Names />
                      ) : (
                        <button
                          onClick={displayNames}
                          className='bg-white px-8 py-4 text-lg text-black md:h-24 md:text-4xl'
                        >
                          Connect
                        </button>
                      )}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
