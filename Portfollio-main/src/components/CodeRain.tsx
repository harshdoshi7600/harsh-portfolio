
import { useEffect, useRef } from 'react';

const CodeRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Character sets for the code rain
    const japaneseChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'.split('');
    const codeKeywords = ['const', 'let', 'var', 'function', 'if', 'else', 'for', 'while', 'return', 'class', 'import', 'export', '<div>', '</div>', '<span>', 'React', '{', '}', '()', '=>', '===', '&&', '||'];
    const numbers = '0123456789'.split('');
    const symbols = '+-*/=<>!&|[]{}();:,.'.split('');
    
    // Combine all character sets
    const allChars = [...japaneseChars, ...codeKeywords, ...numbers, ...symbols];
    
    // Columns and their properties
    const columns: number[] = [];
    const columnCount = Math.floor(canvas.width / 20);
    const columnSpeed: number[] = [];
    const columnCharType: number[] = []; // 0: Japanese, 1: Code, 2: Number/Symbol
    
    // Initialize columns
    for (let i = 0; i < columnCount; i++) {
      columns[i] = Math.random() * canvas.height;
      columnSpeed[i] = 1 + Math.random() * 3;
      // Determine character type for this column (weighted to have more Japanese characters)
      columnCharType[i] = Math.random() > 0.3 ? 0 : (Math.random() > 0.5 ? 1 : 2);
    }
    
    // Animation function
    const draw = () => {
      // Semi-transparent overlay to create trail effect
      ctx.fillStyle = 'rgba(16, 16, 16, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw characters
      for (let i = 0; i < columnCount; i++) {
        // Choose character type based on column type
        let char;
        if (columnCharType[i] === 0) {
          // Japanese characters
          char = japaneseChars[Math.floor(Math.random() * japaneseChars.length)];
        } else if (columnCharType[i] === 1 && Math.random() > 0.8) {
          // Code keywords (less frequent)
          char = codeKeywords[Math.floor(Math.random() * codeKeywords.length)];
        } else {
          // Numbers and symbols
          const set = Math.random() > 0.5 ? numbers : symbols;
          char = set[Math.floor(Math.random() * set.length)];
        }
        
        // Draw the character
        const x = i * 20;
        const y = columns[i];
        
        // Create a gradient effect (brighter at the head, fading out)
        if (y < 50) {
          ctx.fillStyle = `rgba(100, 255, 218, ${y / 50})`;
        } else {
          ctx.fillStyle = 'rgba(100, 255, 218, 0.8)';
        }
        
        // Adjust font size based on character type
        if (columnCharType[i] === 1 && char.length > 1) {
          // For code keywords, use smaller font
          ctx.font = '10px monospace';
        } else {
          ctx.font = '15px monospace';
        }
        
        ctx.fillText(char, x, y);
        
        // Move down the column
        columns[i] += columnSpeed[i];
        
        // Reset column when it reaches the bottom
        if (columns[i] > canvas.height && Math.random() > 0.98) {
          columns[i] = 0;
          // Sometimes change the column type when it resets
          if (Math.random() > 0.9) {
            columnCharType[i] = Math.random() > 0.3 ? 0 : (Math.random() > 0.5 ? 1 : 2);
          }
        }
      }
      
      // Request next frame
      requestAnimationFrame(draw);
    };
    
    // Start animation
    const animationId = requestAnimationFrame(draw);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ opacity: 0.15 }}
    />
  );
};

export default CodeRain;
