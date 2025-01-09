import Image from 'next/image';

import dlivrGif from '@/assets/dlivrgif1.gif';

function Dlivr() {
    return (
        <Image src={dlivrGif} className="rounded" alt="Dlivr app" width={200} height={200} />
    );
}

export default Dlivr;