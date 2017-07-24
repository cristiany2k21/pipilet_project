import React from 'react';

const TableNumber = ({
  language
}) => {
  return (
    <div id="table-number">
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

      <div className="wrapper-third-table">
        <table className="third-table">
          <tbody>
          {
            language.operator.map((item, index) => (
                <tr key={index}>
                  <td>
                    <span className="letter-dot">{item.letter}</span>
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

    </div>
  )
};

export default TableNumber;