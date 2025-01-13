import Image from 'next/image';

import brewingandbeerImage from '@/assets/brewingandbeer.jpg';

function Brewingandbeer() {
    return (
        <div className="flex flex-col gap-4 mb-24">
            <p className="font-bold">Brewing and Beer</p>
            <div className="flex items-center gap-2">
                <p>Built with Wordpress</p>
            </div>
            <div className="linkEffect linkEffect--insideOut mr-auto">
                <a href="https://brewingandbeer.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">https://brewingandbeer.com</a>
            </div>
            <p>Brewing and Beer is a blog that I made in 2011 to showcase interesting news and info in the beer and homebrewing industry.</p>
            <Image src={brewingandbeerImage} alt="brewingandbeer" className="rounded" />
        </div>
    );
}

export default Brewingandbeer;