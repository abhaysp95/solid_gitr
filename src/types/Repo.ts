type Repo = {
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

export default Repo;
