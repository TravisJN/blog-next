import Image from 'next/image';

import githubMark from '@/assets/github-mark-white.png';
import githubLogo from '@/assets/github-logo-white.png';
import insandoutsImage1 from '@/assets/insandouts1.png';
import insandoutsImage2 from '@/assets/insandouts2.png';


function Insandouts() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex">
                <p className="font-bold">Ins & Outs</p>
            </div>
            <div className="flex items-center gap-2">
                <p>Built with React Native</p>
                <a href="https://github.com/TravisJN/logr" className="flex items-center gap-1 border rounded p-1">
                    <Image src={githubMark} width={20} height={20} alt="github" />
                    <Image src={githubLogo} height={20} alt="github" />
                </a>
            </div>
            <p>
                Ins & Outs is my first iOS app to be published to the app store. Built with React Native and Expo, the app allows users to track the foods
                they eat and record whether they feel good or bad after eating them. Users can then look at their history to help determine which foods they are sensitive to.
            </p>
            <div className="flex">
                <Image src={insandoutsImage1} width={300} style={{ objectFit: 'contain' }} alt="ins and outs app 1" className="rounded mr-12" />
                <Image src={insandoutsImage2} width={300} style={{ objectFit: 'contain' }} alt="ins and outs app 2" className="rounded" />
            </div>
        </div>
    );
}

export default Insandouts;