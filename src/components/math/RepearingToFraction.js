import React, { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
  } from 'mathjs';
  

export default function RepearingToFraction() {

  const [ number, setNumber ] = useState('1.576');
  const [ repeatingPartLength, setRepeatingPartLength ] = useState('2');

  const [recurringNumberObj, setRecurringNumberObj] = useState({
    'nonRepeatingPart': '',
    'repeatingPart': '',
    'firstMultiple': '',
    'secondMultiple': '',
    'thirdMultiple': '',
    'intPart': '',
    'fracPart': '',
    'calculatedValue': '',
    'integerPart': '',
    'numerator': ''
  })

      const mathExpression = '\\frac{ \\sqrt{4} }{b}'; // Your LaTeX math expression
      const exp2 = `\\begin{align*}
      ${recurringNumberObj.intPart}.${recurringNumberObj.nonRepeatingPart}\\overline{ ${recurringNumberObj.repeatingPart} } &= & ${recurringNumberObj.intPart}.${recurringNumberObj.nonRepeatingPart}${recurringNumberObj.repeatingPart}${recurringNumberObj.repeatingPart}${recurringNumberObj.repeatingPart}\\dots \\\\
      ${recurringNumberObj.intPart}.${recurringNumberObj.nonRepeatingPart}\\overline{ ${recurringNumberObj.repeatingPart} } \\times ${recurringNumberObj.firstMultiple} &= &${recurringNumberObj.intPart}${recurringNumberObj.nonRepeatingPart}${recurringNumberObj.repeatingPart}.${recurringNumberObj.repeatingPart}${recurringNumberObj.repeatingPart}\\dots \\\\
      ${recurringNumberObj.intPart}.${recurringNumberObj.nonRepeatingPart}\\overline{ ${recurringNumberObj.repeatingPart} } \\times ${recurringNumberObj.secondMultiple} &= &${recurringNumberObj.intPart}${recurringNumberObj.nonRepeatingPart}.${recurringNumberObj.repeatingPart}${recurringNumberObj.repeatingPart}\\dots \\\\
      \\hline \\\\
      বিয়োগ  করে \\space ${recurringNumberObj.intPart}.${recurringNumberObj.nonRepeatingPart}\\overline{${recurringNumberObj.repeatingPart}} \\times ${recurringNumberObj.thirdMultiple} &= &${recurringNumberObj.calculatedValue} \\\\
      \\therefore ${recurringNumberObj.intPart}.${recurringNumberObj.nonRepeatingPart}\\overline{${recurringNumberObj.repeatingPart}} &= \\frac{${recurringNumberObj.calculatedValue}}{${recurringNumberObj.thirdMultiple}} 
      = ${recurringNumberObj.integerPart}\\frac{${recurringNumberObj.numerator}}{${recurringNumberObj.thirdMultiple}}
      \\end{align*} `;
  
      const exp3 = `\\begin{align*}
      5.23\\overline{ 457 } &= &5.23457457457\\dots \\\\
      5.23\\overline{ 457 } \\times 100000 &= &523457.457457\\dots \\\\
      5.23\\overline{ 457 } \\times 100 &= &523.457457\\dots \\\\
      \\hline \\\\
      বিয়োগ করে \\space 5.23\\overline{457} \\times 99900 &= &522934 \\\\
      \\therefore 5.23\\overline{457} &= \\frac{522934}{99900} 
      \\end{align*} `;
  
  const handleDecimalInputChange = (event) => {
    const value = event.target.value;
    setNumber(value);
  };

  const handleRecurringLengthInputChange = (event) => {
    const value = event.target.value;
    setRepeatingPartLength(value);
  };
      
  const splitNumber = () => {

    const [intPart, fracPart] = number.split('.');
    const repeatingPart = fracPart.slice(-repeatingPartLength) || '';
    const nonRepeatingPart = fracPart.slice(0, fracPart.length - repeatingPart.length) || '';
    
    const firstMultiple =  '1' + '0'.repeat(fracPart.length);
    const secondMultiple = '1' + '0'.repeat(nonRepeatingPart.length);
    const thirdMultiple = '9'.repeat(repeatingPart.length) + '0'.repeat(nonRepeatingPart.length);
    const val1 = intPart + nonRepeatingPart + repeatingPart;
    const val2 = intPart + nonRepeatingPart;

    const calculatedValue = +val1 - +val2;
    
    const integerPart = Math.trunc(calculatedValue / thirdMultiple);
    const numerator = calculatedValue % thirdMultiple;

    console.log(number, repeatingPartLength);
    setRecurringNumberObj({
      'nonRepeatingPart': nonRepeatingPart,
      'repeatingPart': repeatingPart,
      'firstMultiple': firstMultiple,
      'secondMultiple': secondMultiple,
      'thirdMultiple': thirdMultiple,
      'intPart': intPart,
      'fracPart': fracPart,
      'calculatedValue': calculatedValue,
      'integerPart': integerPart,
      'numerator': numerator
    });


    console.log(recurringNumberObj);
  }

      // Use KaTeX to render the math expression
    //   const html = katex.renderToString(mathExpression, {
    //     throwOnError: false, // Set to true to display an error message for invalid expressions
    //   });
      
      return (
        <div>
          <p>Here's a math expression:</p>
          <BlockMath>{mathExpression}</BlockMath>
          <BlockMath
                math={'\\int_0^\\infty x^2 dx \\inta'}
                errorColor={'#cc0000'}
        />  
          <p> this is inline math expression <InlineMath math={'c = \\pm\\sqrt{a^2 + b^2}'} /> </p>
          <p>{round(e, 3) }</p>

          <input type='text' className="input" name='myInput' value={number} onChange={handleDecimalInputChange} />
          <input type='text' className="input" name='myInput2' value={repeatingPartLength} onChange={handleRecurringLengthInputChange} />
          &nbsp;<button onClick={splitNumber}>Calculate</button>
            <hr />
          <p> sample text  <InlineMath math={`c = \\frac{\\pm\\sqrt{a^2 + b^2}}{ ${number} }`} /> </p>
          {number}   {repeatingPartLength}

            <BlockMath math={exp2} /> 

        </div>
      );
    }
