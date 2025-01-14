import NavLink from '@/components/navLink';

function PortfolioLayout({ apps }: Readonly<{
    apps: React.ReactNode;
}>) {
    return (
        <div className="px-8 flex w-2/3">
            <div>
                <ul className="flex flex-col gap-3">
                    <li>
                        <NavLink name="Dlivr" linkPath="/portfolio/dlivr" />
                    </li>
                    <li>
                        <NavLink name="Outofinsight" linkPath="/portfolio/outofinsight" />
                    </li>
                    <li>
                        <NavLink name="Boom Boom" linkPath="/portfolio/boomboom" />
                    </li>
                    <li>
                        <NavLink name="Craps Battle" linkPath="/portfolio/crapsbattle" />
                    </li>
                    <li>
                        <NavLink name="Bomblobber" linkPath="/portfolio/bomblobber" />
                    </li>
                    <li>
                        <NavLink name="Brewingandbeer" linkPath="/portfolio/brewingandbeer" />
                    </li>
                    <li>
                        <NavLink name="Macro Recipes" linkPath="/portfolio/macrorecipes" />
                    </li>
                    <li>
                        <NavLink name="Ins & Outs" linkPath="/portfolio/insandouts" />
                    </li>
                </ul>
            </div>
            <div className="ml-8">{apps}</div>
        </div>
    );
}

export default PortfolioLayout;