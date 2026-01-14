"use client";
import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";

interface Props {
  children: string;
  className?: string;
  trigger?: boolean;
}

export const TextScramble = ({ children, className, trigger = true }: Props) => {
  const [text, setText] = useState(children);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!trigger) {
      // Если триггер выключился (скроллим обратно), сбрасываем текст сразу
      if (intervalRef.current) clearInterval(intervalRef.current);
      setText(children);
      return;
    }

    let iteration = 0;
    
    // Очищаем предыдущий интервал перед запуском нового
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return children[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= children.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 2; // Скорость расшифровки (можно увеличить до 1/1 для ускорения)
    }, 20); // Уменьшили задержку с 30 до 20мс для плавности

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [children, trigger]);

  return <span className={className}>{text}</span>;
};