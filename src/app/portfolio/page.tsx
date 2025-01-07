import Link from 'next/link';

function Portfolio() {
    return (
        <div className="px-8">
            <ul>
                <li>Dlivr</li>
                <li>Outofinsight</li>
                <li>Boomboom</li>
                <li>Craps Battle</li>
                <li><Link href="/portfolio/bomblobber">Bomblobber</Link></li>
                <li>BrewingAndBeer</li>
                <li>Macro Recipes</li>
                <li>Ins & Outs</li>
            </ul>
        </div>
    );
}

export default Portfolio;