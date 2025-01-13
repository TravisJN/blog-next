import Image from 'next/image';

import githubMark from '@/assets/github-mark-white.png';
import githubLogo from '@/assets/github-logo-white.png';
// import macroRecipesImage from '@/assets/macrorecipes.png';

function Macrorecipes() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex">
                <p className="font-bold">Macro Recipes</p>
            </div>
            <div className="flex items-center gap-2">
                <p>Built with React</p>
                <a href="https://github.com/TravisJN/crapsbattle" className="flex items-center gap-1 border rounded p-1">
                    <Image src={githubMark} width={20} height={20} alt="github" />
                    <Image src={githubLogo} height={20} alt="github" />
                </a>
            </div>
            <div className="linkEffect linkEffect--insideOut mr-auto">
                <a href="https://outofinsight.com" target="_blank" rel="noopener noreferrer">https://outofinsight.com</a>
            </div>
            <p>Outofinsight is a website where I can write down and save any ideas I have. I wanted a singular place to save my ideas that was accessible from anywhere.</p>
            {/* <Image src={macroRecipesImage} alt="macro recipes" className="rounded" /> */}
        </div>
    );
}

export default Macrorecipes;