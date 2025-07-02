export function useLocalStorage<T>(key: string, initialValue: T | any) {
	let stored = localStorage.getItem(key)
	let value: T

	try {
		value = stored ? JSON.parse(stored) : initialValue
	} catch {
		value = initialValue
		localStorage.setItem(key, JSON.stringify(initialValue))
	}

	function useLocalStorageGet() {
		return value
	}

	function useLocalStorageSet(newValue: any) {
		value = newValue
		localStorage.setItem(key, JSON.stringify(newValue))
	}

	return { useLocalStorageGet, useLocalStorageSet }
}
