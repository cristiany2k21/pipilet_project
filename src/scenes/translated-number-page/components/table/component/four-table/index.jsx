import React from 'react';

const FourTable = ({
  language
}) =>
  <div className="wrapper-fourth-table">
    <table className="fourth-table">
      <tbody>
      {
        language.exercice.map((item, index) => (
            <tr key={index}>
              <td className="exercice-number">
                <span >{item.letter}</span>
              </td>
              <td>
                <span>{item.value}</span>
              </td>
            </tr>
          )
        )
      }
      </tbody>
    </table>
  </div>

export default FourTable;