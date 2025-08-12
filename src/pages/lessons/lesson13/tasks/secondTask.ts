interface IUser {
	name: string
	active: boolean
}

export function secondTask() {
	const users: IUser[] = [
		{ name: 'Mango', active: true },
		{ name: 'Poly', active: false },
		{ name: 'Ajax', active: true },
		{ name: 'Lux', active: false }
	]

	const toggleUserState = (
		allUsers: IUser[],
		userName: string
	): Promise<IUser[]> => {
		const updatedUsers = allUsers.map((user: IUser) =>
			user.name === userName ? { ...user, active: !user.active } : user
		)

		return Promise.resolve(updatedUsers)
	}

	const logger = (updatedUsers: IUser[]) => console.table(updatedUsers)

	/*
	 * Зараз працює так
	 */
	// toggleUserState(users, 'Mango', logger)
	// toggleUserState(users, 'Lux', logger)

	/*
	 * Повинно працювати так
	 */
	toggleUserState(users, 'Mango').then(logger)
	toggleUserState(users, 'Lux').then(logger)
}
