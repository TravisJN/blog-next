import Image from 'next/image';

import githubMark from '@/assets/github-mark-white.png';
import githubLogo from '@/assets/github-logo-white.png';
import boomboom1 from '@/assets/boomboom1.png';

function Boomboom() {
    return (
        <div className="flex flex-col gap-4 mb-24">
            <div className="flex">
                <p className="font-bold">Boom Boom</p>
            </div>
            <div className="flex items-center gap-2">
                <p>Built with Godot 4.2 w/ GDScript</p>
                <a href="https://github.com/platopixel/boomboom" className="flex items-center gap-1 border rounded p-1">
                    <Image src={githubMark} width={20} height={20} alt="github" />
                    <Image src={githubLogo} height={20} alt="github" />
                </a>
            </div>
            <div className="linkEffect linkEffect--insideOut mr-auto">
                <a href="https://platopixel.itch.io/boomboom" target="_blank" rel="noopener noreferrer">Play it in your browser!</a>
            </div>
            <p className="text-justify">Boom Boom is a physics-based brick breaker game I made in Godot. All of the art and programming was done by yours truly.</p>
            <div>
                <Image src={boomboom1} width={400} alt="Boom Boom" className="rounded" />
            </div>
        </div>
    );
}

export default Boomboom;