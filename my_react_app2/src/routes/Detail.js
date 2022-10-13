import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect} from "react";

function Detail() {
	// 리액트 라우터가 제공하는 파라미터 전달 컴포넌트
	// 동적 URL의 변수값을 파라미터로 받아온다. (:id)
	const {id} = useParams();

	async function getMovie() {
		const json = await( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
		console.log(json);
	}

	useEffect(() => {
		getMovie();
	}, [])
	return <h1>Detail</h1>;
}

export default Detail;
