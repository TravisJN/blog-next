import Image from 'next/image';

import githubMark from '@/assets/github-mark-white.png';
import githubLogo from '@/assets/github-logo-white.png';
import crapsBattleImage from '@/assets/crapsbattle.png';

function Crapsbattle() {
    return (
        <div className="flex flex-col gap-4 mb-24">
            <div className="flex">
                <p className="font-bold">Craps Battle</p>
            </div>
            <div className="flex items-center gap-2">
                <p>Built with React</p>
                <a href="https://github.com/TravisJN/crapsbattle" className="flex items-center gap-1 border rounded p-1">
                    <Image src={githubMark} width={20} height={20} alt="github" />
                    <Image src={githubLogo} height={20} alt="github" />
                </a>
            </div>
            <p>{`Craps Battle is a dice game made with React. The goal is to defeat your opponent by rolling 6 dice three times and developing a "hand" of both attack and defense to be used each round.`}</p>
            <Image src={crapsBattleImage} alt="macro recipes" className="rounded" />
        </div>
    );
}

export default Crapsbattle;