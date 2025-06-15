export const GAME_STATUS = {
	IN_GAME: 'in-game',
	WIN: 'win',
	NEW_GAME: 'new-game'
}

export type GameStatus = (typeof GAME_STATUS)[keyof typeof GAME_STATUS]
