import Image from 'next/image';
import './about.css';

import profileImage from '@/assets/profile.jpg';

function About() {
    return (
        <div className="px-8 max-w-4xl text-center flex flex-col gap-4">
            <Image src={profileImage} alt="Travis Neufeld" width={200} height={200} className="rounded-full self-center mb-4 headshot" />
            <p>My name is Travis Neufeld and I am a software engineer with about a decade of experience building apps for web, mobile, TV, and gaming consoles.</p>
            <p>I have extensive experience working with JavaScript, TypeScript, React, React Native, and Node.</p>
            <p>I also am an experienced Scrum master who enjoys seeking continuous improvement.</p>
            <p>I can be reached via email at <a href="mailto:travis.neufeld@gmail.com">travis.neufeld@gmail.com</a></p>
        </div>
    );
}

export default About;