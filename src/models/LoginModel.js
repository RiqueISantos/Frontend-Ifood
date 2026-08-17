/**
 * LoginModel
 *
 * Responsável por:
 *  - Validar os campos do formulário de login
 *  - Submeter as credenciais para a API (ou mock)
 */

// ── Validadores ────────────────────────────────────────────────────────────

export const loginValidators = {
  email(value) {
    if (!value || !value.trim()) return 'Informe seu e-mail'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'E-mail inválido'
    return null
  },

  password(value) {
    if (!value || !value.trim()) return 'Informe sua senha'
    if (value.length < 8) return 'Senha deve ter ao menos 8 caracteres'
    return null
  },
}

/**
 * Valida todos os campos de login.
 * @param {{ email: string, password: string }} data
 * @returns {{ errors: Object, isValid: boolean }}
 */
export function validateLoginForm(data) {
  const errors = {}

  const emailErr    = loginValidators.email(data.email)
  const passwordErr = loginValidators.password(data.password)

  if (emailErr)    errors.email    = emailErr
  if (passwordErr) errors.password = passwordErr

  return { errors, isValid: Object.keys(errors).length === 0 }
}

/**
 * Envia as credenciais para a API.
 * Substitua o mock pelo fetch real quando o back-end estiver pronto.
 *
 * @param {{ email: string, password: string }} data
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function submitLogin(data) {
  // ── Mock ──────────────────────────────────────────────────────────────
  await new Promise((resolve) => setTimeout(resolve, 1200))

  // ── Integração real (descomente quando o back estiver pronto) ──────────
  // const response = await fetch('/api/auth/login', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email: data.email, password: data.password }),
  // })
  // if (!response.ok) {
  //   const err = await response.json()
  //   throw new Error(err.message || 'E-mail ou senha incorretos')
  // }
  // return response.json()

  return { success: true, message: 'Login realizado com sucesso!' }
}

/**
 * Inicia o fluxo OAuth social para login.
 * @param {'google'|'facebook'} provider
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function submitSocialLogin(provider) {
  await new Promise((resolve) => setTimeout(resolve, 1200))

  // ── Google (descomente quando pronto) ─────────────────────────────────
  // google.accounts.id.initialize({ client_id: 'SEU_CLIENT_ID', callback: ... })
  // google.accounts.id.prompt()

  // ── Facebook (descomente quando pronto) ───────────────────────────────
  // FB.login((res) => { ... }, { scope: 'public_profile,email' })

  const name = provider === 'google' ? 'Google' : 'Facebook'
  return { success: true, message: `Login com ${name} realizado com sucesso!` }
}
