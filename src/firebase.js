import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCdSfyK6UyNh0XG1qw1RixxLsVHl1-C7zY',
	authDomain: 'tiktok-clone-4f7a2.firebaseapp.com',
	databaseURL: 'https://tiktok-clone-4f7a2.firebaseio.com',
	projectId: 'tiktok-clone-4f7a2',
	storageBucket: 'tiktok-clone-4f7a2.appspot.com',
	messagingSenderId: '831863850534',
	appId: '1:831863850534:web:17227c4cc9ab2dfb6fc8e7',
	measurementId: 'G-D23RBDNFD7',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
