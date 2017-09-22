import React from 'react';
import YoutubeVideo from 'react-youtube';
import pipiletSong from '../../../../images/pipilet-song.jpg';

import './style/video-youtube.sass';

const VideoYoutube = ({
	                      music,
	                      sameLyrics
                      }) => {
	return (
	<div style={{width: sameLyrics ? '50%' : '100%'}} id="wrapper-video-image">
		<div style={{width: sameLyrics ? '100%' : '50%'}}
		     className="wrapper-youtube-video">
			<YoutubeVideo className="youtube-video" videoId={music.youtubeId}/>
		</div>
		<div style={{
			width: sameLyrics ? '100%' : '50%',
			marginTop: sameLyrics ? '60px' : ''
		}}
		     className="image-pipilet-song">
			<img src={pipiletSong} width="250" alt="logo"/>
		</div>
	</div>
	);
};

export default VideoYoutube;
