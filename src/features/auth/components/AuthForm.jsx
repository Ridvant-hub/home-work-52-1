import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../model/authSlice'
import { validateEmail, validatePassword } from '../lib/helpers'
import Button from '../../../components/Button'
import '../../../shared/styles/AuthForm.css'

export default function AuthForm({ onSuccess }) {
  const dispatch = useDispatch()
  const [mode, setMode] = useState('login') // 'login' | 'register'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!validateEmail(email)) {
      setError('Введіть коректний email')
      return
    }
    if (!validatePassword(password)) {
      setError('Пароль має бути не менше 6 символів')
      return
    }
    const user = { id: String(Date.now()), email, name: name || email.split('@')[0] }
    dispatch(setUser(user))
    onSuccess?.()
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h3>{mode === 'login' ? 'Вхід' : 'Реєстрація'}</h3>
      {mode === 'register' && (
        <div className="form-group">
          <label>Ім'я</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше ім'я"
          />
        </div>
      )}
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
          required
        />
      </div>
      <div className="form-group">
        <label>Пароль</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••"
          required
        />
      </div>
      {error && <p className="auth-form-error">{error}</p>}
      <Button type="submit" variant="primary">
        {mode === 'login' ? 'Увійти' : 'Зареєструватися'}
      </Button>
      <button
        type="button"
        className="auth-form-toggle"
        onClick={() => setMode((m) => (m === 'login' ? 'register' : 'login'))}
      >
        {mode === 'login' ? 'Немає акаунту? Зареєструватися' : 'Вже є акаунт? Увійти'}
      </button>
    </form>
  )
}
