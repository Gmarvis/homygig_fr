'use client';
import * as QUERIES from '@/utils/queries';
import useUserStore from '@/store/userStore';
import { useEffect, useState } from 'react';
import { dateFormatter } from '@/utils/date';
import ProfileAvatar from '@/components/molucles/Avatar';

const Table = () => {
    const tableItems = [
        {
            avatar: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
            name: 'Liam James',
            email: 'liamjames@example.com',
            phone_nimber: '+1 (555) 000-000',
            position: 'Software engineer',
            salary: '$100K'
        },
        {
            avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
            name: 'Olivia Emma',
            email: 'oliviaemma@example.com',
            phone_nimber: '+1 (555) 000-000',
            position: 'Product designer',
            salary: '$90K'
        },
        {
            avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
            name: 'William Benjamin',
            email: 'william.benjamin@example.com',
            phone_nimber: '+1 (555) 000-000',
            position: 'Front-end developer',
            salary: '$80K'
        },
        {
            avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
            name: 'Henry Theodore',
            email: 'henrytheodore@example.com',
            phone_nimber: '+1 (555) 000-000',
            position: 'Laravel engineer',
            salary: '$120K'
        },
        {
            avatar: 'https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
            name: 'Amelia Elijah',
            email: 'amelia.elijah@example.com',
            phone_nimber: '+1 (555) 000-000',
            position: 'Open source manager',
            salary: '$75K'
        }
    ];

    const [appointments, setApointments] = useState<Appointment[]>();

    const { user } = useUserStore();

    useEffect(() => {
        QUERIES.getProvidersApointments(user.id).then((res) => setApointments(res));
    }, []);

    console.log(appointments);

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Appointments </h3>
                    <p className="text-gray-600 mt-2">
                        Approve, decline and reshedule appointents here!
                    </p>
                </div>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Name</th>
                            <th className="py-3 px-6">number</th>
                            <th className="py-3 px-6">Location</th>
                            <th className="py-3 px-6">date</th>
                            <th className="py-3 px-6"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {appointments?.map((appointment, idx) => (
                            <tr
                                onClick={() => alert('open appointment')}
                                key={idx}
                                className="hover:bg-slate-300"
                            >
                                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap ">
                                    <ProfileAvatar size={4} image={appointment.user.image} />
                                    <div>
                                        <span className="block text-gray-700 text-sm font-medium">
                                            {appointment.user.name}
                                        </span>
                                        <span className="block text-gray-700 text-xs">
                                            {appointment.user.email}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {appointment.phone_number}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.city}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {dateFormatter.format(new Date(appointment.date))}
                                </td>
                                <td className="text-center px-6 whitespace-nowrap z-50">
                                    <p
                                        onClick={() => alert('pendding')}
                                        className="py-2 px-3 font-medium text-amber-500 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                                    >
                                        {appointment.status}
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
