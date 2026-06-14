import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import NotificationStack from '../Components/NotificationStack';
import ChatWidget from '../Components/ChatWidget';
import HeroSection from '../Components/sections/HeroSection';
import AboutSection from '../Components/sections/AboutSection';
import TechStackSection from '../Components/sections/TechStackSection';
import ProjectsSection from '../Components/sections/ProjectsSection';
import ExperienceSection from '../Components/sections/ExperienceSection';
import CertificationsSection from '../Components/sections/CertificationsSection';
import ContactSection from '../Components/sections/ContactSection';
import FooterSection from '../Components/sections/FooterSection';

export default function Portfolio(props) {
    const { meta, hero, socials, about, skills, projects, experience, certifications, contact, chat } = props;
    const [theme, setTheme] = useState('dark');
    const [navVisible, setNavVisible] = useState(true);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const storedTheme = window.localStorage.getItem('theme');
        const preferredTheme = storedTheme === 'light' ? 'light' : 'dark';
        setTheme(preferredTheme);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.style.colorScheme = theme;
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        let previousScrollY = window.scrollY;

        const onScroll = () => {
            const currentScrollY = window.scrollY;

            setNavVisible(currentScrollY <= 64 || currentScrollY < previousScrollY);
            previousScrollY = currentScrollY;
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const notify = ({ type, title, message }) => {
        const id = crypto.randomUUID();

        setNotifications((current) => [...current, { id, type, title, message }]);

        window.setTimeout(() => {
            setNotifications((current) => current.filter((notification) => notification.id !== id));
        }, 4500);
    };

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' },
    ].map((item, index) => ({ ...item, index }));

    return (
        <>
            <Head title={meta.title}>
                <meta name="description" content={meta.description} />
            </Head>

            <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
                <div className="pointer-events-none absolute inset-0 animated-gradient opacity-90" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%),radial-gradient(circle_at_bottom,rgba(99,102,241,0.18),transparent_28%)]" />

                <Navbar
                    name={meta.name}
                    navItems={navItems}
                    visible={navVisible}
                    theme={theme}
                    onThemeToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
                />

                <main className="relative z-10">
                    <HeroSection
                        hero={hero}
                        socials={socials}
                        roles={['Full Stack Developer', 'Laravel Developer', 'React Developer']}
                        onNavigate={scrollToSection}
                    />
                    <AboutSection about={about} />
                    <TechStackSection skills={skills} />
                    <ProjectsSection projects={projects} />
                    <ExperienceSection experience={experience} />
                    <CertificationsSection certifications={certifications} />
                    <ContactSection contact={contact} socials={socials} onNotify={notify} />
                </main>

                <FooterSection socials={socials} name={meta.name} />
                <NotificationStack notifications={notifications} />
                <ChatWidget welcomeMessage={chat.welcome} suggestions={chat.suggestions} />
            </div>
        </>
    );
}