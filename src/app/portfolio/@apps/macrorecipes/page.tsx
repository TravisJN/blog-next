import Image from 'next/image';

import githubMark from '@/assets/github-mark-white.png';
import githubLogo from '@/assets/github-logo-white.png';
import macroRecipesImage1 from '@/assets/macrorecipes1.png';
import macroRecipesImage2 from '@/assets/macrorecipes2.png';
import macroRecipesImage3 from '@/assets/macrorecipes3.png';

function Macrorecipes() {
    return (
        <div className="flex flex-col gap-4 mb-24">
            <div className="flex">
                <p className="font-bold">Macro Recipes</p>
            </div>
            <div className="flex items-center gap-2">
                <p>Built with React Native with Expo and the Spoonacular API</p>
                <a href="https://github.com/TravisJN/macro-recipes" className="flex items-center gap-1 border rounded p-1">
                    <Image src={githubMark} width={20} height={20} alt="github" />
                    <Image src={githubLogo} height={20} alt="github" />
                </a>
            </div>
            <p className="text-justify">Macro Recipes is an iOS app built with React Native that allows users to enter their desired macronutrient amount and retrieve recipes that fit the selected criteria.</p>
            <div className="flex flex-wrap">
                <Image src={macroRecipesImage1} width={300} style={{ objectFit: 'contain' }} alt="macro recipes app 1" className="rounded" />
                <Image src={macroRecipesImage2} width={300} style={{ objectFit: 'contain' }} alt="macro recipes app 2" className="rounded" />
                <Image src={macroRecipesImage3} width={300} style={{ objectFit: 'contain' }} alt="macro recipes app 3" className="rounded" />
            </div>
        </div>
    );
}

export default Macrorecipes;