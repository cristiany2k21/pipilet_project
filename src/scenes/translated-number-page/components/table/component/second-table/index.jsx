import React from 'react';

const SecondTable = ({
  language,
  draw
}) => {
  return (
    <div className="wrapper-second-table">
      <div className="wrapper-little-draw hidden">
        <img src={draw} className="little-draw"/>
      </div>
      <table className="second-table">
        <tbody>
        {
          language["ten-numbers"].map((item, index) => (
            <tr key={index}>
              <td>
                <span className="letter-dot">{item.letter}.</span> {item.value}
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
      <div className="wrapper-little-draw">
        <img src={draw} className="little-draw"/>
      </div>
    </div>
  )
};

export default SecondTable;