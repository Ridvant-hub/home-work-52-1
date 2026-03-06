const get = (key) => {
  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : null
  } catch {
    return null
  }
}

const set = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

const remove = (key) => {
  try {
    localStorage.removeItem(key)
    return true
  } catch {
    return false
  }
}

export const storage = { get, set, remove }
