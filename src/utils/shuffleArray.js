/**
 * @param {number[] | string[]} array
 * @returns {number[] | string[]}
 */
export function shuffleArray(array) {
	return array.sort(() => Math.random() - 0.5)
}
