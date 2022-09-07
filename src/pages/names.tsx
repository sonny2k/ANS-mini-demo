import * as React from 'react';

export default function Names() {
  const exampleNames = [
    { name: 'vedaa_aptos' },
    { name: 'dog_aptos' },
    { name: 'suppdog_aptos' },
    { name: 'weirdboi_aptos' },
    { name: 'topaz' },
    { name: 'aptos' },
    { name: 'ans' },
    { name: '_' },
    { name: '-' },
    { name: 'aptosnameservice' },
    { name: '_-_' },
    { name: '-_-' },
    { name: 'hello_world' },
    { name: 'sonny2k' },
    { name: 'sonny' },
    { name: 'vietnam' },
    { name: 'tester' },
    { name: 'devnet' },
    { name: '8888' },
    { name: '01' },
  ];

  return (
    <main>
      <div
        style={{
          filter:
            'drop-shadow(0px 0px 0.8px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white)',
          WebkitFilter:
            'drop-shadow(0px 0px 0.8px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white)',
          msFilter:
            'drop-shadow(0px 0px 0.8px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white)',
          transition: 'filter 0.1s ease-in',
          WebkitTransition: 'filter 0.1s ease-in',
        }}
        className='mx-auto grid max-w-screen-xl justify-center gap-20 md:grid-cols-1 md:justify-items-center lg:grid-cols-1 lg:justify-items-center xl:grid-cols-2 xl:justify-items-start'
      >
        {exampleNames.map(({ name }) => (
          <a
            key={name}
            className='flex h-48 min-w-[128px] flex-col justify-center text-gray-400 md:w-[540px]'
            href='#'
          >
            <div
              className='w-56 bg-black'
              style={{
                clipPath: 'polygon(0px 30%, 85% 30%, 98% 100%, 0% 100%)',
                bottom: '-10px',
                borderBottom: 'none',
                position: 'relative',
              }}
            >
              <div className='h-7'></div>
              <div className='flex items-center justify-items-start gap-2 text-white'>
                <div className='pl-3'>
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'inline-block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                      position: 'relative',
                      maxWidth: '100%',
                    }}
                  >
                    <span>
                      <picture>
                        <img
                          alt=''
                          aria-hidden='true'
                          src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2748%27%20height=%2748%27/%3e'
                        />
                      </picture>
                    </span>
                    <picture>
                      <source srcSet='/svg/folder-svgrepo-com.svg 1x, /svg/folder-svgrepo-com.svg 1x' />
                      <img
                        alt=''
                        srcSet='/svg/folder-svgrepo-com.svg 1x, /svg/folder-svgrepo-com.svg 1x'
                        src='/svg/folder-svgrepo-com.svg'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={{
                          position: 'absolute',
                          inset: '0px',
                          width: '40px',
                          height: '50px',
                        }}
                      />
                    </picture>
                  </span>
                </div>
                <div
                  style={{ fontSize: '11px' }}
                  className='box-border flex h-6 w-28 items-center justify-center bg-yellow-500 px-0.5 font-thin tracking-widest'
                >
                  OWNED BY YOU
                </div>
              </div>
            </div>
            <div
              className=' bg-black'
              style={{
                filter:
                  'drop-shadow(0px 0px 0.8px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white)',
                WebkitFilter:
                  'drop-shadow(0px 0px 0.8px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white)',
                msFilter:
                  'drop-shadow(0px 0px 0.8px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white) drop-shadow(0px 0px 0px white)',
                transition: 'filter 0.1s ease-in',
                WebkitTransition: 'filter 0.1s ease-in',
              }}
            >
              <div className='flex flex-col px-5 pt-3 text-white'>
                <div className='md:text-1xl self-end font-bold lg:text-2xl'>
                  EDIT
                </div>
              </div>
              <div className='h-20'></div>
              <div className='flex flex-row px-5 pb-6 text-white'>
                <div className='font-extrabold text-2xl capitalize md:text-5xl'>
                  {name}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
