<template>
  <div class="login-page">
    <div class="login-card">
      <div class="login-logo">
        <img :src="logoUrl" alt="LinkUp" class="logo-img" />
        <span class="logo-text">LinkUp <em>Admin</em></span>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="field-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="example@example.com"
            autocomplete="username"
            required
          />
        </div>

        <div class="field-group">
          <label for="password">Contraseña</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="••••••••"
            autocomplete="current-password"
            required
          />
        </div>

        <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>

        <button type="submit" class="btn-login" :disabled="loading">
          <span v-if="loading" class="spinner"></span>
          <span v-else>Entrar al panel</span>
        </button>
      </form>

      <div class="landing-links">
        <span class="landing-links-label">Ver landing</span>
        <div class="landing-links-row">
          <a href="/index.html" target="_blank" rel="noopener" class="landing-link">Afiliados →</a>
          <a href="/comercios.html" target="_blank" rel="noopener" class="landing-link">Comercios →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import logoUrl from '../../../img/logo-linkup.png'

const email    = ref('')
const password = ref('')
const loading  = ref(false)
const errorMsg = ref('')
const router   = useRouter()

async function handleLogin() {
  errorMsg.value = ''
  loading.value = true
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/')
  } catch (err) {
    errorMsg.value = friendlyError(err.code)
  } finally {
    loading.value = false
  }
}

function friendlyError(code) {
  if (code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found') {
    return 'Email o contraseña incorrectos.'
  }
  if (code === 'auth/too-many-requests') {
    return 'Demasiados intentos. Espera unos minutos.'
  }
  return 'Error al iniciar sesión. Intenta de nuevo.'
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #984654 0%, #f0a8de 100%);
  padding: 24px;
}

.login-card {
  background: rgba(15, 15, 18, 0.55);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 36px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255,255,255,0.07);
}

.login-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 32px;
}

.logo-img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: var(--text);
}

.logo-text em {
  font-style: normal;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.login-form { display: flex; flex-direction: column; gap: 18px; }

.field-group { display: flex; flex-direction: column; gap: 6px; }

.field-group label {
  font-size: 13px;
  font-weight: 500;
  color: var(--muted);
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.field-group input {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 11px 14px;
  font-size: 15px;
  color: var(--text);
  outline: none;
  transition: border-color 0.2s, background 0.2s;
}

.field-group input:focus {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--accent);
}
.field-group input::placeholder { color: var(--muted); opacity: 0.6; }

.error-msg {
  font-size: 13px;
  color: var(--red);
  background: rgba(248, 113, 113, 0.08);
  border: 1px solid rgba(248, 113, 113, 0.2);
  border-radius: 6px;
  padding: 8px 12px;
}

.btn-login {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #0f0f12;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  padding: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: opacity 0.2s, transform 0.15s;
  margin-top: 4px;
}

.btn-login:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
.btn-login:disabled { opacity: 0.55; cursor: not-allowed; }

.spinner {
  width: 18px;
  height: 18px;
  border: 2.5px solid rgba(0, 0, 0, 0.25);
  border-top-color: #0f0f12;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

.landing-links {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
}

.landing-links-label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--muted);
  margin-bottom: 10px;
}

.landing-links-row {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.landing-link {
  font-size: 13px;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}

.landing-link:hover {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.07);
}

@keyframes spin { to { transform: rotate(360deg); } }
</style>
