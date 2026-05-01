"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  className?: string;
  colorClass?: string;
  speed?: number;
};

export default function TypingText({ words, className = "", colorClass = "text-yellow-400", speed = 120 }: Props) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const current = words[index];
    let delay = speed;

    if (deleting) {
      if (subIndex === 0) {
        delay = 300;
      } else {
        delay = speed / 2;
      }
    } else if (subIndex === current.length) {
      delay = 700;
    }

    const timeout = window.setTimeout(() => {
      if (deleting) {
        if (subIndex === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        } else {
          setSubIndex((s) => s - 1);
        }
      } else {
        if (subIndex === current.length) {
          setDeleting(true);
        } else {
          setSubIndex((s) => s + 1);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed]);

  return (
    <span className={className}>
      <span className={colorClass}>{words[index].slice(0, subIndex)}</span>
      <span className="typing-cursor ml-1 inline-block" aria-hidden="true" style={{ opacity: blink ? 1 : 0 }} />
    </span>
  );
}
