import Link from 'next/link';
import Image from 'next/image';

import dlivrGif from '@/assets/dlivrgif1.gif';

function Portfolio() {
    return (
        <div className="px-8 flex">
            <div>
                <ul>
                    <li>
                        <p className="font-bold">Dlivr</p>
                        <Image src={dlivrGif} className="rounded" alt="Dlivr app" width={100} height={100} />
                    </li>
                    <li>Outofinsight</li>
                    <li>Boomboom</li>
                    <li>Craps Battle</li>
                    <li><Link href="/portfolio/bomblobber">Bomblobber</Link></li>
                    <li>BrewingAndBeer</li>
                    <li>Macro Recipes</li>
                    <li>Ins & Outs</li>
                </ul>
            </div>
            <div>selected app contents</div>
        </div>
    );
}

export default Portfolio;