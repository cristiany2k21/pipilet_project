import React from 'react';
import { connect } from 'react-redux';

const HeaderLyrics = ({
  title,
  image,
  country
}) => {
  return (
      <div className="wrapper-header-song">
        <div className="wrapper-title-song">
          <div className="title-song">{title}</div>
          <div className="flag-song">
            <img src={require(`../../../../images/flag/lyrics/${country}`)} alt={`${title}-image`} width="300" />
          </div>
        </div>

        <div className="wrapper-image-song">
          <img src={`${image}`} alt={`${title}-image`} width="500" />
        </div>
      </div>
  )
};

const mapStateToProps = state => {
  return {
    country: state.SelectFlagSong.language.songPageContent.flag.selected
  }
}

export default connect(mapStateToProps)(HeaderLyrics);