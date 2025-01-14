import { redirect } from 'next/navigation';

function AppsDefault() {
    redirect('/portfolio/dlivr');
    return null;
}

export default AppsDefault;