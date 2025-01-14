import Image from 'next/image';
import './about.css';

import profileImage from '@/assets/profile.jpg';
import githubMark from '@/assets/github-mark-white.png';
import githubLogo from '@/assets/github-logo-white.png';

function About() {
    return (
        <div>
            <div className="px-8 max-w-4xl text-center flex gap-4">
                <Image src={profileImage} alt="Travis Neufeld" width={200} height={200} className="rounded-full self-center mb-4 headshot" />
                <div className="flex flex-col gap-4">
                    <p>My name is Travis Neufeld and I am a software engineer with about a decade of experience building apps for web, mobile, TV, and gaming consoles.</p>
                    <p>I have extensive experience working with JavaScript, TypeScript, React, React Native, and Node.</p>
                    <p>I also am an experienced Scrum master who enjoys seeking continuous improvement.</p>
                </div>
            </div>
            <div className="flex flex-row gap-2 justify-around mt-16">
                <a href="mailto:travis.neufeld@gmail.com" className="linkEffect linkEffect--insideOut">
                    <p>travis.neufeld@gmail.com</p>
                </a>
                <a href="https://github.com/TravisJN" className="flex items-center gap-1 border rounded p-1">
                    <Image src={githubMark} width={20} height={20} alt="github" />
                    <Image src={githubLogo} height={20} alt="github" />
                </a>
                <a href="mailto:travis.neufeld@gmail.com" className="linkEffect linkEffect--insideOut">
                    <p>LinkedIn Profile</p>
                </a>
            </div>
        </div>
    );
}

export default About;