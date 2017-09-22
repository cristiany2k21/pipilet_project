import React from 'react';
import universe from '../../images/universe.jpg';

import './style/index.sass';

export const presentation =
<div id="wrapper-text-image">
	<div className="wrapper-text">
		<p>
			<span className="red">Hello</span> <span className="blue">Kids!</span>
		</p>
		<p>
			My name is <span className="red">Pipilet Mandala</span> and I have just
			landed on Earth.
			I am an <span className="purple">alien snail</span>,
			I come from <span className="green">Planet Galappar</span>, the planet of
			<span className="red">music</span>, <span className="blue">colours</span>
			and <span className="red">love</span>.
		</p>
		<p>
			I can’t speak as I only communicate through
			music and <span className="blue">colour</span> . Instead of writing, I
			<span className="orange">sing</span> and <span
		className="purple">peint</span>. I am a magic snail!!!
		</p>
		<p>
			I would really like to know you and for you <span className="green">to be my friend</span>.
			I love having friends all over the
			universe: <span className="red">I am happy, kind and funny like you</span>,
			and I believe we’ll get along great. I am sure of it!
		</p>
		<p>
      <span className="blue">I would like to go to school to learn your language, your culture, your customs, your history,
      your food, your crafts, etc. but also to understand all the children from the 5 continents and
      make a lot of friends.</span> I am also a gourmet and I love to cook.
		</p>
		<p>
			<span className="green">I always travel with my guitar and my shell which is a mandala and a backpack</span>.
			In
			it, I put<span className="orange"> music</span>, <span className="blue">colours</span>
			and lots of <span className="red">love</span>.
			This is great, isn’t it. Well, I’m going to tell you a secret. Wait no!!
			Come with me to discover it.
		</p>
		<p>
      <span className="red">Would you like to play and take part in this amazing adventure? It will be marvellous! We
      will learn new things together and you will learn lots to things about my planet and myself.</span>
		</p>
		<p className="center">
			<span className="red">OK, Let’s go! I’m waiting for you! Come and join me!!!!</span>
		</p>
		<div className="wrapper-image">
			<img src={universe} alt="logo" />
		</div>
		<p className="center">This is my <span
		className="green">Planet Galappar</span> . The planet of <span
		className="yellow">music</span>, <span className="blue">colours</span> and
			<span className="red">love</span>.</p>
		<p className="center">It is beautiful, isn’t it?</p>
	</div>
</div>;
