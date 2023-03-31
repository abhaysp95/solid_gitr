import { Component } from "solid-js";
import { favRepos, setFavRepos } from "../pages/favrepos";

export type Repo = {
	id: string,
	html_url: string,
	name: string,
	description: string,
	stargazers_count: string,
	owner: {
		login: string
	},
	state: string,
}

interface Props {
	repo: Repo
}

let repoState: String = "Save"

const makeFavRepo = (repo: Repo) => {
	setFavRepos([repo, ...favRepos()])
}

const removeFavRepo = (repoId: string) => {
	setFavRepos(favRepos().filter(repo => repo.id !== repoId));
}

const isRepoSaved = (repoId: string): boolean => {
	const repo = favRepos().filter(repo => repo.id === repoId);
	return (1 === repo?.length) ? true : false;
}

const RepoCard: Component<Props> = ({ repo }) => {
	return (
		<div class="max-w-lg mt-4 rounded shadow-lg drop-shadow-lg hover:shadow-2xl hover:shadow-slate-900 overflow-hidden">
			<div class="bg-gray-300">&#11088; stars: {repo.stargazers_count}</div>
			<div class="p-2">
				<a href={repo.html_url} target="_blank" rel="noreferrer">
					<strong class="text-blue-900 text-lg mb-2">{repo.owner?.login}/{repo.name}</strong>
				</a>
				<p class="text-sm pb-1">{repo.description}</p>
				{isRepoSaved(repo.id)
					? <button class="bg-orange-400 rounded py-1 px-2" onclick={() => removeFavRepo(repo.id)}>Unsave</button>
					: <button class="bg-orange-400 rounded py-1 px-2" onclick={() => makeFavRepo(repo)}>Save</button>}
			</div>
		</div>
	)
}

export default RepoCard;
