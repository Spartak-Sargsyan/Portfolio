/** @format */
'use client';
import styles from './main.module.scss';

import TechStack from '@/UI/TechStack/TechStack';
import CTAButton from '@/UI/CTAButton/CTAButton';
import Social from '@/UI/Social/Social';
import TypingText from '@/UI/TypingText/TypingText';
import { LuSparkles } from 'react-icons/lu';
import { techStack, CTA, SOCIAL } from '@/app/constants/techStack';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Main = () => {
    const lottiefiles = {
        src: 'https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie',
        loop: true,
        autoplay: true,
        style: { width: '100%', height: '100%' },
    };

    return (
        <div className={styles['main-wrapper']}>
            <div>
                <div className={styles['badge-group']}>
                    <div className={styles['background-shadow']}></div>
                    <div className={styles['badge-content']}>
                        <span className={styles['badge-text']}>
                            <LuSparkles className={styles.icon} />
                            Ready to Innovate
                        </span>
                    </div>
                </div>

                <h1 className={styles.heading}>
                    {['SOFTWARE', 'Engineer'].map((word, index) => (
                        <span key={index} className={styles.headingLine}>
                            <span className={styles.headingBg}></span>
                            <span
                                className={`${styles.headingWord} ${
                                    index === 0
                                        ? styles.whiteText
                                        : styles.gradientText
                                }`}
                            >
                                {word}
                            </span>
                        </span>
                    ))}
                </h1>

                <TypingText />

                <p className={styles.description}>
                    Menciptakan Website Yang Inovatif, Fungsional, dan
                    User-Friendly untuk Solusi Digital.
                </p>

                <div
                    className={(styles['tech-stack-container'], styles['flex'])}
                >
                    {techStack.map((tech, index) => {
                        return <TechStack key={index} tech={tech} />;
                    })}
                </div>

                <div className={(styles['cta-container'], styles['flex'])}>
                    {CTA.map(({ id, href, text, icon }) => (
                        <CTAButton
                            key={id}
                            href={href}
                            text={text}
                            icon={icon}
                        />
                    ))}
                </div>

                <div className={(styles['social-container'], styles['flex'])}>
                    {SOCIAL.map(({ id, link, icon }) => (
                        <Social key={id} link={link} icon={icon} />
                    ))}
                </div>
            </div>
            <div className={styles['lottie-animation']}>
                <DotLottieReact {...lottiefiles} />
            </div>
        </div>
    );
};

export default Main;
