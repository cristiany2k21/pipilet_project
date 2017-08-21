import React from 'react';

const FirstTable = ({
  language
}) => {
  return (
    <table className="first-table">
      <tbody>
      {
        language.numbers.map((number, index) => (
            <tr key={index}>
              {
                number.map((item, index) => (
                    <td key={index}>
                      <span className="letter-dot">{item.letter}.</span> {item.value}
                    </td>
                  )
                )
              }
            </tr>
          )
        )
      }
      </tbody>
    </table>
  )
};

export default FirstTable;