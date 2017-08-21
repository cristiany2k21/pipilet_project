import React from 'react';

const DisplayLyrics = ({
  cssExtraClassName,
  music,
  width
}) => {
    return (
        <div style={{ width: width }}
             className={cssExtraClassName}>
            <div className="lyrics-text">
              <h1>{music.title}</h1>
              {music["second-title"] && <h1>{music["second-title"]}</h1> }
              <h2>{music.language}</h2>
              {
                music.couplet.map((items, index) => {
                  return (
                    <p key={index}>
                      {
                        items.map((item, index) => {
                          return (
                            <span key={index} style={{ display: 'block' }}>
                          {item}
                        </span>
                          )
                        })
                      }
                    </p>
                  )
                })
              }
            </div>
        </div>
    )
};

export default DisplayLyrics;