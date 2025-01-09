import Link from 'next/link';

function PortfolioLayout({ apps }: Readonly<{
    apps: React.ReactNode;
}>) {
    return (
        <div className="px-8 flex w-2/3">
            <div>
                <ul className="flex flex-col gap-3">
                    <li>
                        <Link href="/portfolio/dlivr">Dlivr</Link>
                    </li>
                    <li>
                        <Link href="/portfolio/outofinsight">Outofinsight</Link>
                    </li>
                    <li>
                        <Link href="/portfolio/boomboom">Boom Boom</Link>
                    </li>
                    <li>
                        <Link href="/portfolio/crapsbattle">Craps Battle</Link>
                    </li>
                    <li>
                        <Link href="/portfolio/bomblobber">Bomblobber</Link>
                    </li>
                    <li>
                        <Link href="/portfolio/brewingandbeer">Brewingandbeer</Link>
                    </li>
                    <li>
                        <Link href="/portfolio/macrorecipes">Macro Recipes</Link>
                    </li>
                    <li>
                        <Link href="/portfolio/insandouts">Ins & Outs</Link>
                    </li>
                </ul>
            </div>
            <div className="w-auto ml-8">{apps}</div>
        </div>
    );
}

export default PortfolioLayout;