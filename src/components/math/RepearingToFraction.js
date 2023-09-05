import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
  } from 'mathjs';
  

export default function RepearingToFraction() {

    const [fraction, setFraction] = useState('1.5');

      const mathExpression = '\\frac{ \\sqrt{4} }{b}'; // Your LaTeX math expression
      const exp2 = `\\begin{align*}
      5.23\\overline{ 457 } &= &5.23457457457\\dots \\\\
      5.23\\overline{ 457 } \\times 100000 &= &523457.457457\\dots \\\\
      5.23\\overline{ 457 } \\times 100 &= &523.457457\\dots \\\\
      \\hline \\\\
      বিয়োগ করে \\space 5.23\\overline{457} \\times 99900 &= &522934 \\\\
      \\therefore 5.23\\overline{457} &= \\frac{522934}{99900} 
      \\end{align*} `;
      
      
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

            <input type='text' className="input" name='myInput' value={fraction} onChange={e => setFraction(e.target.value)} />
            <hr />
            <p> sample text  <InlineMath math={`c = \\frac{\\pm\\sqrt{a^2 + b^2}}{ ${fraction} }`} /> </p>

            <BlockMath math={exp2} /> 

        </div>
      );
    }
