import Image from 'next/image';

import githubMark from '@/assets/github-mark-white.png';
import githubLogo from '@/assets/github-logo-white.png';

function Bomblobber() {
    return (
        <div className="flex flex-col gap-4 mb-24">
            <p className="font-bold">Bomblobber</p>
            <div className="flex items-center gap-2">
                <p>Built with vanilla JS with Canvas</p>
                <a href="https://github.com/TravisJN/bomblobber" className="flex items-center gap-1 border rounded p-1">
                    <Image src={githubMark} width={20} height={20} alt="github" />
                    <Image src={githubLogo} height={20} alt="github" />
                </a>
            </div>
            <p>Bomblobber is a physics simulation game I made while taking some computer science courses at Santa Rosa Junior College. This was a precursor to my more complete game, Boom Boom. Check it out by clicking to launch a missile.</p>
            <iframe
                title="bomblobber"
                style={{ border: 'none' }}
                height="600px"
                width="600px"
                id="bomblobber-game"
                src="../bomblobber/bomblobber.html"
            />
        </div>
    );
}

export default Bomblobber;