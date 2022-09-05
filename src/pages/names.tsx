import * as React from 'react';

export default function Names() {
  return (
    <div
      style={{
        filter:
          'drop-shadow(1px 0px 0px white) drop-shadow(-1px 0px 0px white) drop-shadow(0px 1px 0px white) drop-shadow(0px -1px 0px white) drop-shadow(1px 1px 0px white) drop-shadow(-1px -1px 0px white) drop-shadow(-1px 1px 0px white) drop-shadow(1px -1px 0px white)',
      }}
      className='mx-auto grid max-w-screen-xl grid-cols-3 items-center justify-items-center gap-4 self-center px-8'
    >
      <a
        className='flex h-48 min-w-[480px] flex-col justify-center text-gray-400 md:w-96'
        href='#'
      >
        <div
          className='w-48 border-2 border-white bg-black '
          style={{
            clipPath: 'polygon(0px 30%, 85% 30%, 98% 100%, 0% 100%)',
            bottom: '-1px',
            borderBottom: 'none',
            position: 'relative',
          }}
        >
          <div className='h-14'></div>
        </div>
        <div
          className='border-2 border-white bg-black px-5 py-4'
          style={{ display: 'inline-block' }}
        >
          <div className='h-28'></div>
          <div className='flex flex-row text-white'>
            <div className='font-extrabold text-2xl capitalize md:text-5xl'>
              Vedaa_Aptos
            </div>
            <div className='grow'></div>
            <div className='self-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-pencil-fill hidden md:block'
                viewBox='0 0 16 16'
              >
                <path d='M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z'></path>
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
