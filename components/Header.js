import Image from 'next/image';
import React from 'react';
import HeaderItem from './HeaderItem';
import { 
    HomeIcon, 
    BadgeCheckIcon, 
    CollectionIcon, 
    LightningBoltIcon, 
    SearchIcon, 
    UserIcon } 
from '@heroicons/react/outline'

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title='HOME' Icon={HomeIcon} />
            <HeaderItem title='TRENDING' Icon={BadgeCheckIcon} />
            <HeaderItem title='VERIFIED' Icon={CollectionIcon} />
            <HeaderItem title='COLLECTIONS' Icon={LightningBoltIcon} />
            <HeaderItem title='SEARCH' Icon={SearchIcon} />
            <HeaderItem title='ACCOUNT' Icon={UserIcon} />
        </div>
        <Image 
            className='object-contain'
            src={"https://www.pinclipart.com/picdir/big/4-48708_film-background-cliparts-movie-logo-without-background-png.png"} 
            width={70}
            height={70}
            alt='logo'
            />
    </header>
  );
}

export default Header;
