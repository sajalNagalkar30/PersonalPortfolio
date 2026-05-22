import { useState, useEffect } from 'react';

export const useTypingEffect = (
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000
) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex <= currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex));
        setCharIndex((c) => c + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex > currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};