/** @format */
'use client';

import Heading from '@/Utils/Heading/Heading';
import Paragraph from '@/Utils/Paragraph/Paragraph';
import styles from './about.module.scss';
import Link from 'next/link';
import { LuFileText, LuCode } from 'react-icons/lu';

const About = () => {
    const handleDownloadCV = () => {
        window.location.href =
            'https://drive.google.com/uc?export=download&id=1urTptDfjgA3yOg5W0-atWwIh59T5Ymdg';
    };

    return (
        <>
            <div className={styles['head']}>
                <Heading title='About Me' />
                <Paragraph title='Transforming ideas into digital experiences' />
            </div>
            <div>
                <h1 className={styles.heading}>
                    {["Hello, I'm", 'Spartak Sargsyan'].map((word, index) => (
                        <span key={index} className={styles.headingLine}>
                            <span
                                className={`${styles.headingWord} ${
                                    index === 1
                                        ? styles.whiteText
                                        : styles.gradientText
                                }`}
                            >
                                {word}
                            </span>
                        </span>
                    ))}
                </h1>
                <p className={styles['description']}>
                    As a graduate specializing in computer networks and
                    Full-Stack development, I focus on creating engaging digital
                    experiences and consistently strive to deliver optimal
                    solutions in every project.
                </p>
                <div className={styles['btn-box']}>
                    <button
                        onClick={handleDownloadCV}
                        className={`${styles['btn-cv']} ${styles['btn']}`}
                    >
                        <LuFileText />
                        Download CV
                    </button>
                    <Link
                        href='#project'
                        className={`${styles['btn-project']} ${styles['btn']}`}
                    >
                        <LuCode />
                        View Projects
                    </Link>
                </div>
            </div>
        </>
    );
};

export default About;
