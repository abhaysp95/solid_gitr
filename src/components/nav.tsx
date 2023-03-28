import { A } from "@solidjs/router";
import { Component } from "solid-js";
import { favRepos } from "../pages/favrepos";

const Nav: Component = () => {
	// TODO: dynamically make nav route css active
	return (
		<nav>
			<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div class="relative flex h-16 items-center justify-between">
					<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div class="hidden sm:ml-6 sm:block">
							<div class="flex space-x-4">
								<A href="/" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</A>
								<A href="/fav" class="text-blue-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Favorites ~ {favRepos().length}</A>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav
