'use client';

import './navLink.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
    name: string;
};

function NavLink({ name }: Props) {
    const pathname = usePathname();

    const link = `/${name.toLowerCase()}`;
    const isActive = pathname === link;

    return (
        <Link href={link}>
            <div className={isActive ? 'linkEffect selectedLink' : 'linkEffect linkEffect--insideOut'}>
                {name}
            </div>
        </Link>
    );
}

export default NavLink;