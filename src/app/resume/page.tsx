function Resume() {
    return (
        <div className="flex flex-col gap-8 mb-24 px-8 w-2/3">
            <div className="flex">
                <div className="min-w-32">
                    <p>2022-2024</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Action Network</p>
                    <p className="text-sm">Senior Software Engineer</p>
                    <p className="text-justify">
                        {`As a Senior Software Engineer for the Action Network, I focused on building and maintaining the Action app,
                        a sports betting tracking and analysis app for Android and iOS built with React Native. I helped architect multiple
                        high-impact features in the Action app including third-party affiliate integrations, data-intensive user-facing features,
                        and under-the-hood performance and control flow improvements. I also operated as Scrum Master for multiple cross-functional
                        teams, leading sprint planning, standups, and retrospectives.`}
                    </p>
                </div>
            </div>
            <div className="flex">
                <div className="min-w-32">
                    <p>2020-2022</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Dlivr</p>
                    <p className="text-sm">Technical Co-Founder</p>
                    <p className="text-justify">
                        {`Dlivr was founded in 2020 as a full-stack SaaS application for restaurants to manage their delivery orders and dispatch drivers
                         to fulfill those orders. As the technical co-founder, I architected and built the entire Dlivr platform, including a native tablet
                         app for restaurants and a native mobile app for drivers. The apps were written in React Native and integrated with Firebase using
                         Firestore and Cloud Functions written in Node.js.`}
                    </p>
                </div>
            </div>
            <div className="flex">
                <div className="min-w-32">
                    <p>2015-2020</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Sony Interactive Entertainment</p>
                    <p className="text-sm">Software Engineer</p>
                    <p className="text-justify">
                        {`During my 5 years at Sony Interactive Entertainment, I had the opportunity to work on multiple high-impact projects. Most of
                        my time was focused on PlayStation Vue, a live TV streaming service. I worked on the Vue app for PS3 and PS4, which was written
                        in TypeScript and a custom in-house framework. I was also part of the team tasked with rebuilding the Vue app in React Native to
                        coincide with the release of the PS5. After Vue was shut down, I was moved to a team working on various platform apps for the PS5,
                        including the Explore app, Media viewer, Game Base, and adding accessibility features such as text-to-speech throughout the system.`}
                    </p>
                </div>
            </div>
            <div className="flex">
                <div className="min-w-32">
                    <p>2015</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-bold">MakerSquare</p>
                    <p className="text-sm">Fellow</p>
                    <p className="text-justify">
                        {`As a fellow at MakerSquare coding bootcamp, I was responsible for assisting students with their coding assignments, leading lectures,
                        interviewing prospective students, and helping to maintain the curriculum by developing part of the new (at the time) React curriculum.
                        I also led a free weekly meetup for the community that taught JavaScript fundamentals and taught a paid 2-day workshop to prepare
                        prospective students for the bootcamp.`}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Resume;