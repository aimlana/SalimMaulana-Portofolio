import topRightArrow from '../assets/images/topRightArrow.svg'
import myLogo from '../assets/images/sLogo.png'

function Header() {
  return (
    <>
      <header className='py-3 px-3 md:px-5 border-b-2 border-black w-full'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-3'>
            <button>
              <div className='flex flex-col gap-1.5'>
                <span className='h-0.5 w-6 bg-black'></span>
                <span className='h-0.5 w-6 bg-black'></span>
                <span className='h-0.5 w-6 bg-black'></span>
              </div>
            </button>
            <p className='font-alumni text-3xl font-medium hidden md:block'>Menu</p>
          </div>
          <a href='/home' className='flex items-center gap-4 cursor-pointer'>
            <img src={myLogo} className='w-4 md:w-5' />
            <h1
              className='font-alumni text-4xl text-black font-semibold hidden md:block'
              tabIndex={0}
            >
              Salim Maulana
            </h1>
          </a>
          <a className='flex gap-2 items-center'>
            <h1 className='font-alumni text-3xl text-black font-medium hidden md:block'>
              Contact me
            </h1>
            <img src={topRightArrow} className='h-4 md:h-full' />
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
