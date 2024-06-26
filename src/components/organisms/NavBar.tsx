'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SearchForm from '../molucles/SearchForm';
import BellBtn from '../atoms/buttons/BellBtn';
import { HiMenuAlt3 } from 'react-icons/hi';

import { motion } from 'framer-motion';
import DropDown from '../molucles/DropDown';
// import { useTheme } from "next-themes";
// import ToggleThemeBtn from "../atoms/ToggleThemeBtn";
import { usePathname } from 'next/navigation';

import ProfileAvatar from '../molucles/Avatar';
import ProfileCard from '../molucles/ProfileCard';
import Overlay from '../atoms/Overlay';
import { getAllCategories, getAllServices } from '@/utils/queries';

// STORE IMPORTS
import useUserStore from '@/store/userStore';
import useCategoryStore from '@/store/categoryStore';
import useServiceStore from '@/store/serviceStore';
import { LinkBtn, LinkBtnTheme } from '../atoms/buttons/LinkBtn';
import { RightModal } from './modals/RightModal';

import { MdDashboard } from 'react-icons/md';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdAddToPhotos } from 'react-icons/md';
import { navLinks } from './SideBar';

type NavTypes = {
    onDashBoard?: Boolean;
    hideSearchBar?: Boolean;
};

const NavBar = ({ onDashBoard = false, hideSearchBar = false }: NavTypes) => {
    const pathName = usePathname();
    console.log('pathName', pathName);
    const { user } = useUserStore();
    const { setServices } = useServiceStore();
    const { setCategories } = useCategoryStore();
    const [showNotifiaction, setShowNotification] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const update = async () => {
        //Fetch all Categories from DB
        const allCategories = await getAllCategories();
        setCategories(allCategories);
        //Fetch all Services from DB
        const allServices = await getAllServices();
        setServices(allServices);
    };

    useEffect(() => {
        update();
    }, []);

    return (
        <div
            className={`flex bigScreen:w-full bigScreen:py-5 fixed justify-between z-50 shadow-md ${
                onDashBoard ? ' px-5 relative mobile:max-sm:fixed ' : 'px-24 fixed '
            }  py-2 items-center mobile:max-sm:px-5  w-full bg-white`}
        >
            <div>
                <Link
                    href={'/'}
                    className={`self-center w-full ${
                        onDashBoard ? 'sm:hidden mobile:max-sm:visible' : ''
                    }  flex items-center justify-center`}
                >
                    <Image src={'/logohomygig.png'} alt="homygig logo" width={115} height={65} />
                </Link>
            </div>

            <div className={`sear mobile:max-sm:hidden  ${onDashBoard ? 'hidden' : 'visible'}`}>
                {!hideSearchBar && <SearchForm />}
            </div>

            {user?.id ? (
                <div className="flex justify-center items-center gap-3">
                    <Link
                        className={`text-sm font-semibold ${onDashBoard ? 'hidden' : ''} `}
                        href={`${user.role === 'admin' ? 'dashboard' : 'dashboard/appointments'}`}
                    >
                        {`${user.role === 'admin' ? 'Dashboard' : 'Appointments'} `}
                    </Link>
                    <BellBtn onClick={() => setShowNotification((prev) => !prev)} />
                    <div className={` ${onDashBoard ? "hidden": ""}  mobile:max-sm:hidden`}>
                        <ProfileAvatar
                            onClick={() => setShowProfile((prev) => !prev)}
                            image={user.image}
                            size={3}
                        />
                    </div>
                    {showProfile && (
                        <Overlay onClick={() => setShowProfile((prev) => !prev)} transparent />
                    )}
                    {showProfile && (
                        <motion.div
                            className={`absolute top-[57px] right-4 w-[300px] mobile:max-sm:w-[80vw]  mobile:max-sm:right-10 z-40`}
                            initial={{ opacity: 0, translateY: -20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <DropDown
                                title="Profile"
                                onBlur={() => setShowProfile((prev) => !prev)}
                                className={''}
                            >
                                <ProfileCard />
                            </DropDown>
                        </motion.div>
                    )}

                    {showNotifiaction && (
                        <Overlay onClick={() => setShowNotification((prev) => !prev)} transparent />
                    )}

                    {showNotifiaction && (
                        // <SheetSide />

                        <motion.div
                            initial={{ opacity: 0, translateY: -20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-[57px] right-2 z-40"
                        >
                            <DropDown
                                title={'Notifications'}
                                onBlur={() => setShowNotification((prev) => !prev)}
                                className="w-[20vw]"
                            >
                                <h3>fist notification</h3>
                            </DropDown>
                        </motion.div>
                    )}
                    <RightModal
                        title="Menu"
                        className="bg-primarytheme"
                        trigger={
                            <button className="text-gray-700 sm:hidden absolute top-[13px] right-3">
                                <HiMenuAlt3 size={30} />
                            </button>
                        }
                    >
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                className={`text-sm font-semibold  ${link.role.includes(user.role) ? 'visible' : 'hidden'} text-white flex items-center gap-2`}
                                href={link.path}
                            >
                                {link.icon}
                                {link.name}
                            </Link>
                        ))}
                    </RightModal>
                </div>
            ) : (
                <div className="flex items-center gap-3">
                    <LinkBtn title="Get Started" path="/auth" theme={LinkBtnTheme.themeColor} />
                </div>
            )}
        </div>
    );
};

export default NavBar;
