import { Route, Routes } from '@solidjs/router';
import { Component, createEffect, createSignal } from 'solid-js';
import Nav from './components/nav';
import FavRepos from './pages/favrepos';
import Home from './pages/home';

const [username, setUsername] = createSignal('coolabhays')
const [repos, setRepos] = createSignal([])

const App: Component = () => {

	createEffect(async () => {
		const res = await fetch(`https://api.github.com/users/${username()}/repos?sort=updated`)
		setRepos(await res.json())
		console.log(repos());
	})

  return (
	<div>
		<Nav />
		<Routes>
			<Route path="/" element={ <Home /> }/>
			<Route path="/fav" element={ <FavRepos /> }/>
		</Routes>
	</div>
  );
};

export { username, setUsername, repos }
export default App;
