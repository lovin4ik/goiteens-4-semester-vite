export function useLocalStorage(key, initialValue) {
	let subscribers = []

	let stored = localStorage.getItem(key)
	let value
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

	function useLocalStorageSet(newValue) {
		value = newValue
		localStorage.setItem(key, JSON.stringify(newValue))
		notify()
	}

	function useLocalStorageSubscribe(callback) {
		subscribers.push(callback)
		callback(value)
		return () => {
			subscribers = subscribers.filter(fn => fn !== callback)
		}
	}

	return { useLocalStorageGet, useLocalStorageSet, useLocalStorageSubscribe }
}
