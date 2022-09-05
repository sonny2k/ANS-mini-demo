import * as React from 'react';
// declare global {
//   interface Window {
//     martian: any;
//   }
// }

export default function Header() {
  // const [btn, setBtn] = useState('Connect');
  // const getProvider = () => {
  //   if ('martian' in window) {
  //     window.martian.connect();
  //   } else {
  //     window.open('https://www.martianwallet.xyz/', '_blank');
  //   }
  // };

  // useEffect(() => {
  //   check().then((data) => {
  //     data === true ? setBtn('hehe') : setBtn('Connect');
  //   });
  // }, []);

  // async function check() {
  //   let result = await window.martian.isConnected();
  //   return result;
  // }

  // const disconnect = async () => {
  //   await window.martian.disconnect();
  // };

  return (
    <header className='fixed top-0 z-50 w-full bg-none font-normal text-sm normal-case text-white md:text-2xl'>
      <div className='mx-auto flex max-w-screen-xl items-center justify-between py-8 px-8'>
        <div>
          <a
            className='flex flex-row items-center gap-6 rounded-xl text-white'
            href='#'
          >
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
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0px',
                  margin: '0px',
                  padding: '0px',
                  maxWidth: '100%',
                }}
              >
                <picture>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2748%27%20height=%2748%27/%3e'
                    style={{
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                      maxWidth: '100%',
                    }}
                  />
                </picture>
              </span>
              <picture>
                <source srcSet='/svg/logo.svg 1x, /svg/logo.svg 2x' />
                <img
                  alt=''
                  srcSet='/svg/logo.svg 1x, /svg/logo.svg 2x'
                  src='/svg/logo.svg'
                  decoding='async'
                  data-nimg='intrinsic'
                  className='text-white'
                  style={{
                    position: 'absolute',
                    inset: '0px',
                    boxSizing: 'border-box',
                    display: 'block',
                    width: '0px',
                    height: '0px',
                    minWidth: '100%',
                    minHeight: '100%',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    background: 'none',
                    border: 'none',
                    margin: 'auto',
                    padding: '0px',
                  }}
                />
              </picture>
            </span>
            <div className='-ml-2'>Aptos Name Service</div>
          </a>
        </div>
        <div className='flex w-0 flex-1 justify-end lg:hidden'></div>
        <nav className='mr-8 hidden items-center justify-end space-x-8 lg:flex lg:w-0 lg:flex-1'>
          <a href='#'>Manage</a>
        </nav>
        <div className=' hidden items-center space-x-4 outline outline-4 outline-offset-8 md:block lg:flex'>
          <button className=''>Connect</button>
        </div>
      </div>
    </header>
  );
}
