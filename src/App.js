import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './Video';
import db from './firebase';

function App() {
	const [videos, setVideos] = useState([]);

	useEffect(
		() =>
			// fires once when component load
			db
				.collection('videos')
				.onSnapshot((snapshot) =>
					setVideos([snapshot.docs.map((doc) => doc.data())])
				),
		[]
	);

	console.log('Video: ', videos[0]);

	return (
		<div className='App'>
			<div className='app__videos'>
				{videos.length > 0 &&
					videos[0].map((video, i) => (
						<Video
							key={i}
							url={video.url}
							channel={video.channel}
							song={video.song}
							likes={video.likes}
							messages={video.messages}
							description={video.description}
							shares={video.shares}
						/>
					))}
			</div>
		</div>
	);
}

export default App;
