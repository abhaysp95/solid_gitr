import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import Nav from './components/nav';
import FavRepos from './pages/favrepos';
import Home from './pages/home';

const App: Component = () => {
  return (
	<div>
		<Nav />
		<Routes>
			<Route path="/" element={ <Home /> }/>
			<Route path="/fav" element={ <FavRepos /> }/>
		</Routes>
		<h1>App Component</h1>
	</div>
  );
};

export default App;
