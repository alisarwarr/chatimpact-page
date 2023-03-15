'use client';
//REACTJS
import { useState } from 'react';
//NEXTJS
import Link from 'next/link';
import Image from 'next/image';
//MATERIAL-UI
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//IMAGES
import { logo } from '../images';


function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);


    return (
        <div className="w-[95%] screen450:w-[90%] flex items-center p-3">

            <div className="flex-1 flex items-center cursor-pointer">
                <div className="w-10 h-10 screen450:w-11 screen450:h-11 sm:w-12 sm:h-12 screen950:w-14 screen950:h-14 xl:w-16 xl:h-16 bg-[#110F36] rounded-full pulse-animation">
                    <Image src={logo} alt="logo"/>
                </div>

                <p className="font-lexend text-xs font-bold tracking-wider ml-2.5 sm:ml-3.5 lg:ml-3 screen450:text-base sm:text-lg screen950:text-xl 2xl:text-2xl thunder-animation" style={{ wordSpacing: "2px" }}>
                    Chat Impact
                </p>
            </div>

            <IconButton onClick={handleClick} className="lg:!hidden">
                <MenuIcon />
            </IconButton>

            <Menu
                className="lg:!hidden"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <MenuItem onClick={handleClose}>
                    <Link href="/platform" className="font-lexend text-sm !text-black tracking-wide sm:text-base pulse-animation-white"> Platform </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href="/industries" className="font-lexend text-sm !text-black tracking-wide sm:text-base"> Industries </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href="/resources" className="font-lexend text-sm !text-black tracking-wide sm:text-base pulse-animation-white"> Resources </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href="/company" className="font-lexend text-sm !text-black tracking-wide sm:text-base"> Company </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href="/contact" className="font-lexend text-sm !text-black tracking-wide sm:text-base pulse-animation-white"> Contact </Link>
                </MenuItem>
            </Menu>

            <div className="hidden lg:block">
                <Link href="/platform" className="font-lexend text-lg text-black tracking-wide ml-6 xl:text-xl 2xl:text-2xl thunder-animation"> Platform </Link>
                <Link href="/industries" className="font-lexend text-lg text-black tracking-wide ml-6 xl:text-xl 2xl:text-2xl thunder-animation"> Industries </Link>
                <Link href="/resources" className="font-lexend text-lg text-black tracking-wide ml-6 xl:text-xl 2xl:text-2xl thunder-animation"> Resources </Link>
                <Link href="/company" className="font-lexend text-lg text-black tracking-wide ml-6 xl:text-xl 2xl:text-2xl thunder-animation"> Company </Link>
                <Link href="/contact" className="font-lexend text-lg text-black tracking-wide ml-6 xl:text-xl 2xl:text-2xl thunder-animation"> Contact </Link>
            </div>

        </div>
    )
}

export default Header;