import { Component, createSignal, For } from "solid-js";
import RepoCard, { Repo } from "../components/repocard";

const [favRepos, setFavRepos] = createSignal([])

const FavRepos: Component = () => {
	return (
		<div class="ml-20 mt-5 pl-4">
			<h2 class="font-semibold mt-2">Your saved repos</h2>
			<For each={favRepos()}>
				{(repo: Repo) => <RepoCard repo={repo}/>}
			</For>
		</div>
	)
}

export { favRepos, setFavRepos }
export default FavRepos
