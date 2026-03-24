<template>
  <div class="dash-layout">
    <!-- TOP BAR -->
    <header class="topbar">
      <div class="topbar-left">
        <img :src="'/img/logo-linkup.png'" alt="LinkUp" class="topbar-logo" />
        <span class="topbar-title">LinkUp <em>Admin</em></span>
      </div>
      <div class="topbar-right">
        <span class="topbar-user">{{ userEmail }}</span>
        <button class="btn-logout" @click="handleLogout">Cerrar sesión</button>
      </div>
    </header>

    <main class="dash-main">
      <!-- KPI CARDS -->
      <section class="kpi-row">
        <div class="kpi-card">
          <span class="kpi-icon">📋</span>
          <div>
            <div class="kpi-value">{{ totalCount }}</div>
            <div class="kpi-label">Total envíos</div>
          </div>
        </div>
        <div class="kpi-card kpi-afiliado">
          <span class="kpi-icon">🚀</span>
          <div>
            <div class="kpi-value">{{ afiliadoCount }}</div>
            <div class="kpi-label">Afiliados</div>
          </div>
        </div>
        <div class="kpi-card kpi-comercio">
          <span class="kpi-icon">🏪</span>
          <div>
            <div class="kpi-value">{{ comercioCount }}</div>
            <div class="kpi-label">Comercios</div>
          </div>
        </div>
        <div class="kpi-card kpi-newsletter">
          <span class="kpi-icon">📧</span>
          <div>
            <div class="kpi-value">{{ newsletterCount }}</div>
            <div class="kpi-label">Newsletter</div>
          </div>
        </div>
        <div class="kpi-card kpi-qualified">
          <span class="kpi-icon">✅</span>
          <div>
            <div class="kpi-value">{{ qualifiedCount }}</div>
            <div class="kpi-label">Calificados</div>
          </div>
        </div>
      </section>

      <!-- FILTERS -->
      <section class="filters-bar">
        <input
          v-model="searchQuery"
          class="filter-input filter-search"
          type="text"
          placeholder="Buscar por nombre, email o teléfono…"
        />

        <select v-model="filterLanding" class="filter-select">
          <option value="">Todos los orígenes</option>
          <option value="afiliado">Afiliado</option>
          <option value="comercio">Comercio</option>
          <option value="newsletter">Newsletter</option>
        </select>

        <select v-model="filterStatus" class="filter-select">
          <option value="">Todos los estados</option>
          <option value="new">Nuevo</option>
          <option value="contacted">Contactado</option>
          <option value="converted">Convertido</option>
          <option value="discarded">Descartado</option>
        </select>

        <select v-model="filterDays" class="filter-select">
          <option value="0">Todo el tiempo</option>
          <option value="7">Últimos 7 días</option>
          <option value="30">Últimos 30 días</option>
          <option value="90">Últimos 90 días</option>
        </select>

        <button class="btn-refresh" @click="loadSubmissions" :disabled="loading">
          <span v-if="loading" class="mini-spinner"></span>
          <span v-else>↺ Actualizar</span>
        </button>
      </section>

      <!-- ERROR STATE -->
      <div v-if="fetchError" class="error-banner">
        ⚠️ {{ fetchError }}
      </div>

      <!-- TABLE -->
      <section class="table-wrap">
        <div v-if="loading && !submissions.length" class="loading-state">
          <span class="big-spinner"></span>
          <p>Cargando envíos…</p>
        </div>

        <div v-else-if="!filteredRows.length && !loading" class="empty-state">
          <span class="empty-icon">🗂️</span>
          <p>No hay resultados con los filtros actuales.</p>
        </div>

        <table v-else class="data-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Origen</th>
              <th>Contacto</th>
              <th>Puntuación</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in filteredRows"
              :key="row.id"
              class="data-row"
              @click="openDetail(row)"
            >
              <td class="td-date">{{ formatDate(row.createdAt) }}</td>
              <td>
                <span class="badge" :class="'badge-' + row.landingId">
                  {{ landingLabel(row.landingId) }}
                </span>
              </td>
              <td class="td-contact">{{ contactInfo(row) }}</td>
              <td class="td-score">
                <template v-if="row.score !== undefined">
                  <span class="score-pill" :class="scorePillClass(row)">
                    {{ row.score }}
                    <span class="score-max">/ {{ row.maxScore ?? (row.landingId === 'afiliado' ? 14 : 20) }}</span>
                  </span>
                </template>
                <span v-else class="muted">—</span>
              </td>
              <td>
                <span class="status-badge" :class="'status-' + (row.status || 'new')">
                  {{ statusLabel(row.status) }}
                </span>
              </td>
              <td class="td-action">
                <button class="btn-view" @click.stop="openDetail(row)">Ver →</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="filteredRows.length" class="table-footer">
          Mostrando {{ filteredRows.length }} de {{ submissions.length }} registros
        </div>
      </section>
    </main>

    <!-- DETAIL MODAL -->
    <Teleport to="body">
      <div v-if="activeRow" class="modal-overlay" @click.self="closeDetail">
        <div class="modal-card">
          <div class="modal-header">
            <div class="modal-title">
              <span class="badge" :class="'badge-' + activeRow.landingId">
                {{ landingLabel(activeRow.landingId) }}
              </span>
              <span class="modal-date">{{ formatDate(activeRow.createdAt) }}</span>
            </div>
            <button class="modal-close" @click="closeDetail">✕</button>
          </div>

          <div class="modal-body">
            <!-- Contact info -->
            <div class="detail-section">
              <h3 class="detail-section-title">Contacto</h3>
              <div class="detail-grid">
                <template v-if="activeRow.nombre">
                  <span class="detail-label">Nombre</span>
                  <span>{{ activeRow.nombre }}</span>
                </template>
                <template v-if="activeRow.telefono">
                  <span class="detail-label">Teléfono</span>
                  <a :href="'https://wa.me/' + sanitizePhone(activeRow.telefono)" target="_blank" rel="noopener" class="wa-link">
                    {{ activeRow.telefono }} 💬
                  </a>
                </template>
                <template v-if="activeRow.email">
                  <span class="detail-label">Email</span>
                  <span>{{ activeRow.email }}</span>
                </template>
                <span class="detail-label">Landing</span>
                <span>{{ activeRow.landingId }}</span>
              </div>
            </div>

            <!-- Score -->
            <div v-if="activeRow.score !== undefined" class="detail-section">
              <h3 class="detail-section-title">Puntuación</h3>
              <div class="score-display">
                <span class="score-big" :class="scorePillClass(activeRow)">
                  {{ activeRow.score }} / {{ activeRow.maxScore ?? (activeRow.landingId === 'afiliado' ? 14 : 20) }}
                </span>
                <span class="score-tag" :class="scorePillClass(activeRow)">
                  {{ scoreTag(activeRow) }}
                </span>
              </div>
            </div>

            <!-- Answers -->
            <div v-if="activeRow.answers && Object.keys(activeRow.answers).length" class="detail-section">
              <h3 class="detail-section-title">Respuestas</h3>
              <div class="answers-list">
                <div v-for="(val, key) in activeRow.answers" :key="key" class="answer-row">
                  <span class="answer-q">{{ key }}</span>
                  <span class="answer-v">{{ val }}</span>
                </div>
              </div>
            </div>

            <!-- Status -->
            <div class="detail-section">
              <h3 class="detail-section-title">Estado</h3>
              <div class="status-controls">
                <button
                  v-for="s in statusOptions"
                  :key="s.value"
                  class="status-btn"
                  :class="{ active: (activeRow.status || 'new') === s.value }"
                  @click="updateStatus(activeRow, s.value)"
                >
                  {{ s.label }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { signOut } from 'firebase/auth'
import {
  collection, getDocs, updateDoc, doc, orderBy, query
} from 'firebase/firestore'
import { auth, db } from '../firebase'

const router = useRouter()
const userEmail = computed(() => auth.currentUser?.email ?? '')

// State
const submissions = ref([])
const loading     = ref(false)
const fetchError  = ref('')
const activeRow   = ref(null)

// Filters
const searchQuery   = ref('')
const filterLanding = ref('')
const filterStatus  = ref('')
const filterDays    = ref(0)

// Status options
const statusOptions = [
  { value: 'new',       label: 'Nuevo' },
  { value: 'contacted', label: 'Contactado' },
  { value: 'converted', label: 'Convertido' },
  { value: 'discarded', label: 'Descartado' }
]

// KPIs
const totalCount      = computed(() => submissions.value.length)
const afiliadoCount   = computed(() => submissions.value.filter(s => s.landingId === 'afiliado').length)
const comercioCount   = computed(() => submissions.value.filter(s => s.landingId === 'comercio').length)
const newsletterCount = computed(() => submissions.value.filter(s => s.landingId === 'newsletter').length)
const qualifiedCount  = computed(() => submissions.value.filter(s => s.isQualified).length)

// Filtered rows
const filteredRows = computed(() => {
  const q   = searchQuery.value.toLowerCase()
  const now = Date.now()
  const days = Number(filterDays.value)

  return submissions.value.filter(row => {
    if (filterLanding.value && row.landingId !== filterLanding.value) return false
    if (filterStatus.value  && (row.status || 'new') !== filterStatus.value) return false

    if (days > 0 && row.createdAt) {
      const rowTime = row.createdAt.toMillis
        ? row.createdAt.toMillis()
        : Number(row.createdAt)
      if (now - rowTime > days * 86_400_000) return false
    }

    if (q) {
      const hay = [row.nombre, row.email, row.telefono].filter(Boolean).join(' ').toLowerCase()
      if (!hay.includes(q)) return false
    }

    return true
  })
})

// Load data
async function loadSubmissions() {
  loading.value = true
  fetchError.value = ''
  try {
    const q   = query(collection(db, 'form_submissions'), orderBy('createdAt', 'desc'))
    const snap = await getDocs(q)
    submissions.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
  } catch (err) {
    console.error('[Admin] Firestore error:', err)
    fetchError.value = 'No se pudieron cargar los datos. Verifica permisos y conexión.'
  } finally {
    loading.value = false
  }
}

async function updateStatus(row, newStatus) {
  try {
    await updateDoc(doc(db, 'form_submissions', row.id), { status: newStatus })
    row.status = newStatus
    // also update in submissions array
    const idx = submissions.value.findIndex(s => s.id === row.id)
    if (idx !== -1) submissions.value[idx].status = newStatus
  } catch (err) {
    console.error('[Admin] updateDoc error:', err)
  }
}

// Auth
async function handleLogout() {
  await signOut(auth)
  router.push('/login')
}

// Detail modal
function openDetail(row) { activeRow.value = row }
function closeDetail() { activeRow.value = null }

// Helpers
function formatDate(ts) {
  if (!ts) return '—'
  const d = ts.toDate ? ts.toDate() : new Date(ts)
  return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

function contactInfo(row) {
  if (row.nombre && row.telefono) return `${row.nombre} · ${row.telefono}`
  if (row.nombre)   return row.nombre
  if (row.email)    return row.email
  return '—'
}

function landingLabel(id) {
  return { afiliado: 'Afiliado', comercio: 'Comercio', newsletter: 'Newsletter' }[id] ?? id
}

function statusLabel(s) {
  return { new: 'Nuevo', contacted: 'Contactado', converted: 'Convertido', discarded: 'Descartado' }[s] ?? 'Nuevo'
}

function scorePillClass(row) {
  if (row.landingId === 'afiliado') {
    if (row.score >= 10) return 'score-high'
    if (row.score >= 5)  return 'score-mid'
    return 'score-low'
  }
  if (row.landingId === 'comercio') {
    if (row.score >= 14) return 'score-high'
    if (row.score >= 7)  return 'score-mid'
    return 'score-low'
  }
  return ''
}

function scoreTag(row) {
  if (row.landingId === 'afiliado') {
    if (row.score >= 10) return 'Perfil ideal 🚀'
    if (row.score >= 5)  return 'Buena coincidencia 💡'
    return 'No encaja 🤔'
  }
  if (row.landingId === 'comercio') {
    if (row.score >= 14) return 'Ideal 🟢'
    if (row.score >= 7)  return 'Educable 🟡'
    return 'Descartable 🔴'
  }
  return ''
}

function sanitizePhone(phone) {
  return phone.replace(/\D/g, '')
}

onMounted(loadSubmissions)
</script>

<style scoped>
/* Layout */
.dash-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--dark);
}

/* Top bar */
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 56px;
  background: var(--dark-2);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
  flex-shrink: 0;
}

.topbar-left { display: flex; align-items: center; gap: 10px; }

.topbar-logo { width: 28px; height: 28px; object-fit: contain; }

.topbar-title {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.2px;
}

.topbar-title em {
  font-style: normal;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.topbar-right { display: flex; align-items: center; gap: 14px; }

.topbar-user {
  font-size: 13px;
  color: var(--muted);
}

.btn-logout {
  font-size: 13px;
  font-weight: 600;
  color: var(--muted);
  background: var(--dark-3);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 5px 12px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
}

.btn-logout:hover { color: var(--red); border-color: var(--red); }

/* Main content */
.dash-main {
  flex: 1;
  padding: 28px 24px;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* KPI cards */
.kpi-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
}

.kpi-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 14px;
}

.kpi-icon { font-size: 28px; line-height: 1; }

.kpi-value {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.5px;
  line-height: 1;
}

.kpi-label {
  font-size: 12px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-top: 3px;
}

.kpi-afiliado   .kpi-value { color: var(--accent); }
.kpi-comercio   .kpi-value { color: #a78bfa; }
.kpi-newsletter .kpi-value { color: #38bdf8; }
.kpi-qualified  .kpi-value { color: var(--green); }

/* Filters */
.filters-bar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}

.filter-input,
.filter-select {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  color: var(--text);
  outline: none;
  min-width: 0;
  transition: border-color 0.2s;
}

.filter-input:focus,
.filter-select:focus { border-color: var(--accent); }

.filter-search { flex: 1 1 220px; }

.filter-select { cursor: pointer; }

.btn-refresh {
  background: var(--dark-3);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: border-color 0.2s;
  white-space: nowrap;
}

.btn-refresh:hover:not(:disabled) { border-color: var(--accent); }
.btn-refresh:disabled { opacity: 0.5; cursor: not-allowed; }

/* Error banner */
.error-banner {
  background: rgba(248, 113, 113, 0.08);
  border: 1px solid rgba(248, 113, 113, 0.25);
  border-radius: 8px;
  padding: 12px 16px;
  color: var(--red);
  font-size: 14px;
}

/* Table */
.table-wrap {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
}

.loading-state,
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 64px 24px;
  color: var(--muted);
}

.empty-icon { font-size: 40px; }

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.data-table thead {
  background: var(--dark-3);
  border-bottom: 1px solid var(--border);
}

.data-table th {
  padding: 12px 16px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: var(--muted);
  white-space: nowrap;
}

.data-row {
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  transition: background 0.15s;
}

.data-row:last-child { border-bottom: none; }
.data-row:hover { background: var(--dark-3); }

.data-table td {
  padding: 12px 16px;
  vertical-align: middle;
}

.td-date { color: var(--muted); font-size: 13px; white-space: nowrap; }

.td-contact {
  max-width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.td-action { text-align: right; }

/* Badges */
.badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  padding: 3px 8px;
  border-radius: 100px;
}

.badge-afiliado   { background: rgba(255,145,77,0.15); color: var(--accent); }
.badge-comercio   { background: rgba(167,139,250,0.15); color: #a78bfa; }
.badge-newsletter { background: rgba(56,189,248,0.15); color: #38bdf8; }

/* Score pill */
.score-pill {
  display: inline-flex;
  align-items: baseline;
  gap: 2px;
  padding: 2px 8px;
  border-radius: 100px;
  font-weight: 700;
  font-size: 13px;
}

.score-max { font-size: 11px; opacity: 0.7; }

.score-high { background: rgba(52,211,153,0.15); color: var(--green); }
.score-mid  { background: rgba(251,191,36,0.15);  color: var(--yellow); }
.score-low  { background: rgba(248,113,113,0.15); color: var(--red); }

/* Status badge */
.status-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 100px;
}

.status-new       { background: rgba(99,102,241,0.15); color: #818cf8; }
.status-contacted { background: rgba(251,191,36,0.15);  color: var(--yellow); }
.status-converted { background: rgba(52,211,153,0.15);  color: var(--green); }
.status-discarded { background: rgba(248,113,113,0.15); color: var(--red); }

/* View button */
.btn-view {
  font-size: 12px;
  font-weight: 600;
  color: var(--muted);
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
}

.btn-view:hover { color: var(--text); border-color: var(--text); }

/* Table footer */
.table-footer {
  padding: 10px 16px;
  font-size: 12px;
  color: var(--muted);
  border-top: 1px solid var(--border);
  background: var(--dark-3);
}

/* Spinner */
.mini-spinner,
.big-spinner {
  display: inline-block;
  border-style: solid;
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

.mini-spinner { width: 14px; height: 14px; border-width: 2px; border-color: var(--border); border-top-color: var(--accent); }
.big-spinner  { width: 36px; height: 36px; border-width: 3px; border-color: var(--border); border-top-color: var(--accent); }

@keyframes spin { to { transform: rotate(360deg); } }

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  z-index: 1000;
  padding: 0;
}

.modal-card {
  background: var(--dark-2);
  border-left: 1px solid var(--border);
  width: 100%;
  max-width: 500px;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.25s ease;
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  background: var(--dark-2);
  z-index: 1;
}

.modal-title { display: flex; align-items: center; gap: 10px; }

.modal-date { font-size: 13px; color: var(--muted); }

.modal-close {
  background: transparent;
  border: none;
  color: var(--muted);
  font-size: 18px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: color 0.2s;
}

.modal-close:hover { color: var(--text); }

.modal-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

/* Detail sections */
.detail-section {}

.detail-section-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: var(--muted);
  margin-bottom: 12px;
}

.detail-grid {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 8px 16px;
  align-items: baseline;
}

.detail-label {
  font-size: 13px;
  color: var(--muted);
  font-weight: 500;
}

.wa-link { color: #4ade80; }
.wa-link:hover { text-decoration: underline; }

/* Score display */
.score-display { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }

.score-big {
  font-size: 32px;
  font-weight: 800;
  padding: 4px 14px;
  border-radius: 10px;
}

.score-tag {
  font-size: 14px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 100px;
}

/* Answers list */
.answers-list { display: flex; flex-direction: column; gap: 8px; }

.answer-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--dark-3);
  border-radius: 6px;
  padding: 8px 12px;
  gap: 12px;
}

.answer-q {
  font-size: 13px;
  color: var(--muted);
  flex: 0 0 auto;
}

.answer-v {
  font-size: 14px;
  font-weight: 600;
  text-align: right;
}

/* Status controls */
.status-controls { display: flex; gap: 8px; flex-wrap: wrap; }

.status-btn {
  padding: 7px 14px;
  font-size: 13px;
  font-weight: 600;
  background: var(--dark-3);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--muted);
  cursor: pointer;
  transition: all 0.2s;
}

.status-btn:hover { color: var(--text); border-color: var(--text); }

.status-btn.active {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(255, 145, 77, 0.1);
}

/* Muted text */
.muted { color: var(--muted); }

/* Responsive */
@media (max-width: 600px) {
  .dash-main { padding: 16px; }
  .topbar    { padding: 0 16px; }
  .topbar-user { display: none; }
  .modal-card { max-width: 100%; }
  .kpi-row { grid-template-columns: repeat(2, 1fr); }
}
</style>
