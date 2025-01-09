'use client';

import './navLink.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
    name: string;
    linkPath: string;
};

function NavLink({ name, linkPath }: Props) {
    const pathname = usePathname();

    const isActive = pathname.includes(linkPath);

    return (
        <Link href={linkPath}>
            <div className={isActive ? 'linkEffect selectedLink' : 'linkEffect linkEffect--insideOut'}>
                {name}
            </div>
        </Link>
    );
}

export default NavLink;