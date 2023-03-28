import { Component, createEffect } from "solid-js";
import { repos, setUsername, username } from "../App";

const Home: Component = () => {
	const refetchWithUsername = (event: Event) => {
		event.preventDefault();
		const usernameInput = document.querySelector("#username-input") as HTMLInputElement;
		setUsername(usernameInput.value)

		console.log(repos())
	}

	createEffect(() => {
		console.log(repos())
	})

	return (
		<div class="ml-20 mt-5 pl-4">
			<label for="username-input" class="block text-sm font-medium leading-6 text-gray-900">Enter username: </label>
			<div class="relative mt-2 rounded-md shadow-sm">
				<form onsubmit={(event) => refetchWithUsername(event)}>
					<input class="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 inline-block" id="username-input" placeholder="username" />
					<button class="bg-green-400 px-4 py-2 rounded-md ml-2 inline-block">Fetch</button>
				</form>
			</div>
			<h3 class="font-semibold mt-2">Github repos for {username()}</h3>
		</div>
	)
}

export default Home
