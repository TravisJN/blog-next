import Image from 'next/image';

import dlivrStore1 from '@/assets/dlivrstore1.png';
import dlivrStore2 from '@/assets/dlivrstore2.png';
import dlivrStore3 from '@/assets/dlivrstore3.png';
import dlivrDrive1 from '@/assets/dlivrdrive1.png';
import dlivrDrive2 from '@/assets/dlivrdrive2.png';
import dlivrDrive3 from '@/assets/dlivrdrive3.png';

function Dlivr() {
    return (
        <div className="flex flex-col gap-4 mb-24">
            <div className="flex">
                <p className="font-bold">Dlivr</p>
            </div>
            <div className="flex items-center gap-2">
                <p>Built with React Native and Firebase</p>
            </div>
            <p>
                {`Dlivr is a full-stack SaaS application built as the product offering for the startup I co-founded, Dlivr. It's a fully integrated tool for restaurants to manage their delivery orders and dispatch drivers to fulfill those orders.`}
            </p>
            <p>
                {`Dlivr includes two applications: 1) A native tablet app used in the restaurant to receive and manage orders, dispatch drivers, and communicate with the driver and customer during the delivery window. 2) A native mobile app used by drivers to claim orders, view delivery details, and communicate with the restaurant or customer.`}
            </p>
            <div className="flex flex-wrap">
                <Image src={dlivrStore1} width={300} style={{ objectFit: 'contain' }} alt="dlivr app 1" className="rounded mr-12" />
                <Image src={dlivrStore2} width={300} style={{ objectFit: 'contain' }} alt="dlivr app 2" className="rounded mr-12" />
                <Image src={dlivrStore3} width={300} style={{ objectFit: 'contain' }} alt="dlivr app 3" className="rounded mr-12" />
                <Image src={dlivrDrive1} width={300} style={{ objectFit: 'contain' }} alt="dlivr app 1" className="rounded mr-12" />
                <Image src={dlivrDrive2} width={300} style={{ objectFit: 'contain' }} alt="dlivr app 2" className="rounded mr-12" />
                <Image src={dlivrDrive3} width={300} style={{ objectFit: 'contain' }} alt="dlivr app 3" className="rounded mr-12" />
            </div>
        </div>
    );
}

export default Dlivr;