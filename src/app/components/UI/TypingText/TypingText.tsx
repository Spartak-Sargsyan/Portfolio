/** @format */

'use client';
import { PROFFESION } from '@/app/constants/techStack';
import { useState, useEffect } from 'react';

import styles from './typingtext.module.scss';

const TypingText = () => {
    const [displayedText, setDisplayedText] = useState(PROFFESION[0]); // Начинаем с первого слова
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(PROFFESION[0].length); // Начинаем с конца первого слова

    useEffect(() => {
        const currentWord = PROFFESION[wordIndex];

        const typingSpeed = isDeleting ? 100 : 150;

        const handleTyping = () => {
            // Если текст удаляется
            if (isDeleting && charIndex > 0) {
                setDisplayedText(currentWord.slice(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            }
            // Если слово полностью удалено
            else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % PROFFESION.length); // Переход на следующее слово
            }
            // Если текст набирается
            else if (!isDeleting && charIndex < currentWord.length) {
                setDisplayedText(currentWord.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            }
            // Если слово полностью набрано
            else if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => setIsDeleting(true), 2000); // Пауза перед удалением
            }
        };

        const typingInterval = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingInterval);
    }, [displayedText, isDeleting, charIndex, wordIndex]);

    return (
        <>
            <p className={styles['typing']}>
                {displayedText}
                <span className={styles['cursor']}></span>
            </p>
        </>
    );
};

export default TypingText;
