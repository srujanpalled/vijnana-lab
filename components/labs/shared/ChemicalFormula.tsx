import React from 'react';

interface ChemicalFormulaProps {
  formula: string;
  className?: string;
}

/**
 * ChemicalFormula — Automatically formats chemical strings like "FeSO4.(NH4)2SO4.6H2O"
 * with proper subscripts and superscripts.
 */
export const ChemicalFormula: React.FC<ChemicalFormulaProps> = ({ formula, className }) => {
  // Simple parser for common chemical notations
  // Matches digits (subscripts) or + / - / number+ (superscripts)
  const parts = formula.split(/(\d+|[+\-]|(?:\^\d+[+\-]?))/);

  return (
    <span className={className} style={{ fontFamily: 'serif', letterSpacing: '0.02em' }}>
      {parts.map((part, i) => {
        const key = `${part}-${i}`;
        if (/^\d+$/.test(part)) {
          // If it's a leading number (coefficient), don't subscript it
          if (i === 0 || parts[i-1] === ' ' || parts[i-1] === '(' || parts[i-1] === '+') {
            return <span key={key}>{part}</span>;
          }
          return (
            <sub key={key} style={{ fontSize: '0.75em', verticalAlign: 'sub', bottom: '-0.1em', position: 'relative' }}>
              {part}
            </sub>
          );
        }
        if (/^[+\-]$/.test(part)) {
          return (
            <sup key={key} style={{ fontSize: '0.75em', verticalAlign: 'super', top: '-0.2em', position: 'relative' }}>
              {part}
            </sup>
          );
        }
        if (part.startsWith('^')) {
          return (
            <sup key={key} style={{ fontSize: '0.75em', verticalAlign: 'super', top: '-0.2em', position: 'relative' }}>
              {part.slice(1)}
            </sup>
          );
        }
        return <span key={key}>{part}</span>;
      })}
    </span>
  );
};

export default ChemicalFormula;
