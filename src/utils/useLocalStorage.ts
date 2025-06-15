export function useLocalStorage(key: string, initialValue: any) {
	let subscribers: Array<(value: any) => void> = []

	let stored = localStorage.getItem(key)
	let value: any

	try {
		value = stored ? JSON.parse(stored) : initialValue
	} catch {
		value = initialValue
		localStorage.setItem(key, JSON.stringify(initialValue))
	}

	function notify() {
		subscribers.forEach(fn => fn(value))
	}

	function useLocalStorageGet() {
		return value
	}

	function useLocalStorageSet(newValue: any) {
		value = newValue
		localStorage.setItem(key, JSON.stringify(newValue))
		notify()
	}

	function useLocalStorageSubscribe(callback: (value: any) => void) {
		subscribers.push(callback)
		callback(value)
		return () => {
			subscribers = subscribers.filter(fn => fn !== callback)
		}
	}

	return { useLocalStorageGet, useLocalStorageSet, useLocalStorageSubscribe }
}
