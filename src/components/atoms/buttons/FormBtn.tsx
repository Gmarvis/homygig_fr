import React from 'react';
import Spinner from '../Spinner';

type BtnType = {
    isLoading: boolean;
    title: string;
    onClick?: () => void;
};

const FormBtn = ({ isLoading, title, onClick }: BtnType) => {
    return (
        <button
            className={`hover:bg-gray-800 disabled:cursor-wait bg-primarytheme  text-white p-2 justify-center items-center w-full`}
        >
            <span className="flex self-center justify-center">
                {isLoading ? <Spinner /> : <>{title}</>}
            </span>
        </button>
    );
};

export default FormBtn;
