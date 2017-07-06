import React from 'react';
import HeaderSong from './header/HeaderSong';
import DisplayLanguageSong from './display-language/DisplayLanguageSong';
import ChooseFlag from './choose-flag/ChooseFlag';

const SongPage = () => {
    return (
        <div>
            <HeaderSong />
            <DisplayLanguageSong />
            <ChooseFlag />
        </div>
    )
};

export default SongPage;