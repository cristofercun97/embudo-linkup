<template>
  <div class="dash-layout">
    <!-- TOP BAR -->
    <header class="topbar">
      <div class="topbar-left">
        <img :src="logoUrl" alt="LinkUp" class="topbar-logo" />
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
        <div class="kpi-card kpi-usdt">
          <span class="kpi-icon">💛</span>
          <div>
            <div class="kpi-value">{{ usdtCount }}</div>
            <div class="kpi-label">USDT</div>
          </div>
        </div>
      </section>

      <!-- TABS NAV -->
      <div class="tabs-nav">
        <button
          class="tab-btn"
          :class="{ 'tab-active': activeTab === 'enc-afiliados' }"
          @click="activeTab = 'enc-afiliados'"
        >🚀 Encuestas Afiliados</button>
        <button
          class="tab-btn"
          :class="{ 'tab-active': activeTab === 'enc-comercios' }"
          @click="activeTab = 'enc-comercios'"
        >🏪 Encuestas Comercios</button>
        <button
          class="tab-btn"
          :class="{ 'tab-active': activeTab === 'leads-afiliados' }"
          @click="activeTab = 'leads-afiliados'"
        >📌 Leads Afiliados</button>
        <button
          class="tab-btn"
          :class="{ 'tab-active': activeTab === 'leads-comercios' }"
          @click="activeTab = 'leads-comercios'"
        >📌 Leads Comercios</button>
        <button
          class="tab-btn"
          :class="{ 'tab-active': activeTab === 'enc-usdt' }"
          @click="activeTab = 'enc-usdt'"
        >💛 Encuesta USDT</button>
      </div>

      <!-- FILTERS -->
      <section v-if="activeTab === 'enc-afiliados' || activeTab === 'enc-comercios' || activeTab === 'enc-usdt'" class="filters-bar">
        <input
          v-model="searchQuery"
          class="filter-input filter-search"
          type="text"
          placeholder="Buscar por nombre, email o teléfono…"
        />

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
      <div v-if="(activeTab === 'enc-afiliados' || activeTab === 'enc-comercios' || activeTab === 'enc-usdt') && fetchError" class="error-banner">
        ⚠️ {{ fetchError }}
      </div>

      <!-- TABLE -->
      <section v-if="activeTab === 'enc-afiliados' || activeTab === 'enc-comercios' || activeTab === 'enc-usdt'" class="table-wrap">
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
              <td class="td-date" data-label="Fecha">{{ formatDate(row.createdAt) }}</td>
              <td data-label="Origen">
                <span class="badge" :class="'badge-' + row.landingId">
                  {{ landingLabel(row.landingId) }}
                </span>
              </td>
              <td class="td-contact" data-label="Contacto">{{ contactInfo(row) }}</td>
              <td class="td-score" data-label="Puntuación">
                <template v-if="row.score !== undefined">
                  <span class="score-pill" :class="scorePillClass(row)">
                    {{ row.score }}
                    <span class="score-max">/ {{ row.maxScore ?? (row.landingId === 'afiliado' ? 14 : 20) }}</span>
                  </span>
                </template>
                <span v-else class="muted">—</span>
              </td>
              <td data-label="Estado">
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
          Mostrando {{ filteredRows.length }} de {{ activeTab === 'enc-afiliados' ? afiliadoCount : activeTab === 'enc-usdt' ? usdtCount : comercioCount }} registros
        </div>
      </section>

      <!-- USDT STATS -->
      <section
        v-if="activeTab === 'enc-usdt' && usdtStats.some(q => q.total > 0)"
        class="stats-section"
      >
        <div class="stats-header">
          <h3 class="stats-title">💛 Distribución de respuestas — Encuesta USDT</h3>
          <p class="stats-sub">Medición por opción seleccionada. Detecta atracción, fricción, confianza e intención de adopción.</p>
        </div>
        <div class="stats-list">
          <div v-for="q in usdtStats" :key="q.key" class="stat-row">
            <div class="stat-content" style="flex:1; width:100%;">
              <div class="stat-label" style="margin-bottom:14px;">{{ q.label }}</div>
              <div v-for="opt in q.options" :key="opt.label" class="usdt-opt-row">
                <div class="usdt-opt-label">{{ opt.label }}</div>
                <div class="stat-bar-bg" style="flex:1; margin:0 12px;">
                  <div class="stat-bar-fill usdt-bar-fill" :style="{ width: opt.pct + '%' }"></div>
                </div>
                <div class="usdt-opt-count">{{ opt.count }} <span class="score-max">({{ opt.pct }}%)</span></div>
              </div>
              <div style="margin-top:8px; font-size:0.74rem; color:var(--muted);">{{ q.total }} respuesta{{ q.total !== 1 ? 's' : '' }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- QUESTION STATS -->
      <section
        v-if="(activeTab === 'enc-afiliados' || activeTab === 'enc-comercios') && questionStats.length"
        class="stats-section"
      >
        <div class="stats-header">
          <h3 class="stats-title">📊 Ranking de preguntas por afinidad</h3>
          <p class="stats-sub">Ordenado por promedio de respuesta (2 = máxima afinidad). Revela qué temas resuenan más con los encuestados.</p>
        </div>
        <div class="stats-list">
          <div v-for="(q, i) in questionStats" :key="q.key" class="stat-row">
            <div class="stat-rank" :class="i < 3 ? 'rank-top' : ''">{{ i + 1 }}</div>
            <div class="stat-content">
              <div class="stat-label">{{ q.label }}</div>
              <div class="stat-bar-row">
                <div class="stat-bar-bg">
                  <div class="stat-bar-fill stat-fill-high" :style="{ width: q.pctHigh + '%' }"></div>
                  <div class="stat-bar-fill stat-fill-mid"  :style="{ width: q.pctMid + '%' }"></div>
                  <div class="stat-bar-fill stat-fill-low"  :style="{ width: q.pctLow + '%' }"></div>
                </div>
                <div class="stat-legend">
                  <span class="stat-ct-high">{{ q.pctHigh }}% alto</span>
                  <span class="stat-ct-mid">{{ q.pctMid }}% medio</span>
                  <span class="stat-ct-low">{{ q.pctLow }}% bajo</span>
                  <span class="stat-total">{{ q.total }} resp.</span>
                </div>
              </div>
            </div>
            <div class="stat-avg" :class="statAvgClass(q.avgNum)">{{ q.avg }}</div>
          </div>
        </div>
      </section>

      <!-- LEADS AFILIADOS -->
      <section v-if="activeTab === 'leads-afiliados'" class="table-wrap">
        <div v-if="leadsError" class="error-banner">⚠️ {{ leadsError }}</div>
        <div v-else-if="leadsLoading" class="loading-state">
          <span class="big-spinner"></span>
          <p>Cargando leads…</p>
        </div>
        <div v-else-if="!leadsAfiliados.length" class="empty-state">
          <span class="empty-icon">📋</span>
          <p>Aún no hay leads de afiliados registrados.</p>
        </div>
        <table v-else class="data-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Email</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="lead in leadsAfiliados" :key="lead.id" class="data-row">
              <td class="td-date" data-label="Fecha">{{ formatDate(lead.createdAt) }}</td>
              <td data-label="Nombre">{{ lead.nombre || '—' }}</td>
              <td data-label="Edad">{{ lead.edad ?? '—' }}</td>
              <td data-label="Email">{{ lead.email || '—' }}</td>
              <td data-label="Teléfono">
                <a v-if="lead.telefono"
                   :href="'https://wa.me/' + sanitizePhone(lead.telefono)"
                   target="_blank" rel="noopener" class="wa-link">
                  {{ lead.telefono }} 💬
                </a>
                <span v-else>—</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="leadsAfiliados.length" class="table-footer">
          {{ leadsAfiliados.length }} lead{{ leadsAfiliados.length !== 1 ? 's' : '' }} de afiliados
        </div>
      </section>

      <!-- LEADS COMERCIOS -->
      <section v-if="activeTab === 'leads-comercios'" class="table-wrap">
        <div v-if="leadsError" class="error-banner">⚠️ {{ leadsError }}</div>
        <div v-else-if="leadsLoading" class="loading-state">
          <span class="big-spinner"></span>
          <p>Cargando leads…</p>
        </div>
        <div v-else-if="!leadsComercio.length" class="empty-state">
          <span class="empty-icon">🏪</span>
          <p>Aún no hay leads de comercios registrados.</p>
        </div>
        <table v-else class="data-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Nombre</th>
              <th>Nicho</th>
              <th>Negocio</th>
              <th>Email</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="lead in leadsComercio" :key="lead.id" class="data-row">
              <td class="td-date" data-label="Fecha">{{ formatDate(lead.createdAt) }}</td>
              <td data-label="Nombre">{{ lead.nombre || '—' }}</td>
              <td data-label="Nicho">{{ lead.nicho || '—' }}</td>
              <td data-label="Negocio">{{ lead.nombreNegocio || '—' }}</td>
              <td data-label="Email">{{ lead.email || '—' }}</td>
              <td data-label="Teléfono">
                <a v-if="lead.telefono"
                   :href="'https://wa.me/' + sanitizePhone(lead.telefono)"
                   target="_blank" rel="noopener" class="wa-link">
                  {{ lead.telefono }} 💬
                </a>
                <span v-else>—</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="leadsComercio.length" class="table-footer">
          {{ leadsComercio.length }} lead{{ leadsComercio.length !== 1 ? 's' : '' }} de comercios
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
import logoUrl from '../../../img/logo-linkup.png'

const router = useRouter()
const userEmail = computed(() => auth.currentUser?.email ?? '')

// State
const submissions = ref([])
const loading     = ref(false)
const fetchError  = ref('')
const activeRow   = ref(null)
const activeTab   = ref('enc-afiliados')

// Leads
const leads        = ref([])
const leadsLoading = ref(false)
const leadsError   = ref('')

// Filters
const searchQuery   = ref('')
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
const usdtCount       = computed(() => submissions.value.filter(s => s.landingId === 'usdt').length)

const leadsAfiliados = computed(() => leads.value.filter(l => l.landingId === 'afiliado'))
const leadsComercio  = computed(() => leads.value.filter(l => l.landingId === 'comercio'))

// USDT question/option definitions
const USDT_QUESTIONS = {
  q1: {
    label: 'Atractivo del modelo (USDT + Tarjeta)',
    options: ['🔥 Muy atractivo', '👍 Interesante', '🤔 Me da igual', '❌ No me interesa']
  },
  q2: {
    label: 'Comodidad con USDT — fricción real',
    options: ['✅ Sí, totalmente', '⚠️ Sí, con dudas', '❌ No confío en eso', '🤷 No entiendo USDT']
  },
  q3: {
    label: 'Preferencia de uso de ganancias',
    options: ['💸 Usarlas con tarjeta', '🏦 Retirarlas al banco', '📈 Inversión (cripto)', '🔄 Convertir a efectivo']
  },
  q4: {
    label: 'Factor de confianza — qué reforzar',
    options: ['🔐 Fácil y automático', '🏢 Empresa confiable', '📊 Ver mis ganancias', '👥 Prueba social']
  },
  q5: {
    label: 'Intención de uso — adopción real',
    options: ['🚀 Sí, de una', '👍 Probablemente sí', '🤔 No estoy seguro', '❌ No lo usaría']
  }
}

const usdtStats = computed(() => {
  const rows = submissions.value.filter(r => r.landingId === 'usdt' && r.answers)
  return Object.entries(USDT_QUESTIONS).map(([qKey, qDef]) => {
    const counts = [0, 0, 0, 0]
    let total = 0
    for (const row of rows) {
      const val = row.answers?.[qKey]
      if (val !== undefined && val >= 0 && val <= 3) {
        counts[val]++
        total++
      }
    }
    return {
      key: qKey,
      label: qDef.label,
      total,
      options: qDef.options.map((label, i) => ({
        label,
        count: counts[i],
        pct: total > 0 ? Math.round(counts[i] / total * 100) : 0
      }))
    }
  })
})

// Question labels for analytics
const QUESTION_LABELS = {
  afiliado: {
    q1: 'Hábitos de consumo',
    q2: 'Comportamiento de recomendación',
    q3: 'Tu influencia real',
    q4: 'Lo que más te importa',
    q5: 'Mentalidad sobre ingresos',
    q6: 'Relación con el comercio local',
    q7: 'Recomendaciones con valor'
  },
  comercio: {
    q1: 'Tipo de negocio',
    q2: 'Volumen de clientes',
    q3: 'Mayor desafío actual',
    q4: 'Estrategia de captación',
    q5: 'Urgencia de crecimiento',
    q6: 'Interés en captar sin publicidad',
    q7: 'Mentalidad hacia el modelo',
    q8: 'Validación de monetización',
    q9: 'Apertura digital',
    q10: 'Disposición a formar parte'
  }
}

const questionStats = computed(() => {
  const landingId = activeTab.value === 'enc-afiliados' ? 'afiliado' : 'comercio'
  const labels = QUESTION_LABELS[landingId]
  const rows = filteredRows.value.filter(r => r.answers && typeof r.answers === 'object')
  const stats = {}
  for (const row of rows) {
    for (const [qKey, val] of Object.entries(row.answers)) {
      if (!labels[qKey]) continue
      if (!stats[qKey]) stats[qKey] = { total: 0, sum: 0, counts: { 0: 0, 1: 0, 2: 0 } }
      const v = Number(val)
      stats[qKey].total++
      stats[qKey].sum += v
      stats[qKey].counts[v] = (stats[qKey].counts[v] || 0) + 1
    }
  }
  return Object.entries(stats)
    .filter(([k]) => labels[k])
    .map(([key, s]) => ({
      key,
      label: labels[key],
      total: s.total,
      avg: s.total > 0 ? (s.sum / s.total).toFixed(2) : '0.00',
      avgNum: s.total > 0 ? s.sum / s.total : 0,
      pctHigh: s.total > 0 ? Math.round((s.counts[2] || 0) / s.total * 100) : 0,
      pctMid:  s.total > 0 ? Math.round((s.counts[1] || 0) / s.total * 100) : 0,
      pctLow:  s.total > 0 ? Math.round((s.counts[0] || 0) / s.total * 100) : 0,
    }))
    .sort((a, b) => b.avgNum - a.avgNum)
})

// Filtered rows
const filteredRows = computed(() => {
  const q    = searchQuery.value.toLowerCase()
  const now  = Date.now()
  const days = Number(filterDays.value)
  const tabLanding = activeTab.value === 'enc-afiliados' ? 'afiliado'
                   : activeTab.value === 'enc-comercios'  ? 'comercio'
                   : activeTab.value === 'enc-usdt'        ? 'usdt'
                   : null

  return submissions.value.filter(row => {
    if (tabLanding && row.landingId !== tabLanding) return false
    if (filterStatus.value && (row.status || 'new') !== filterStatus.value) return false

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
  const path = 'form_submissions'
  try {
    const q    = query(collection(db, path), orderBy('createdAt', 'desc'))
    const snap = await getDocs(q)
    submissions.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
  } catch (err) {
    const isBlocked = err?.message?.includes('ERR_BLOCKED_BY_CLIENT') ||
                      err?.message?.includes('Failed to fetch') ||
                      err?.code === 'unavailable'
    const detail = `[${err.code ?? 'unknown'}] ${err.message ?? err}`
    console.error(`[Admin] /${path} —`, detail, err)
    fetchError.value = isBlocked
      ? `⚠️ Parece que el navegador o una extensión está bloqueando Firestore. Prueba en incógnito o deshabilita el adblocker. (${detail})`
      : `No se pudieron cargar envíos. ${detail}`
  } finally {
    loading.value = false
  }
}

async function loadLeads() {
  leadsLoading.value = true
  leadsError.value = ''
  const path = 'leads'
  try {
    const q    = query(collection(db, path), orderBy('createdAt', 'desc'))
    const snap = await getDocs(q)
    leads.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
  } catch (err) {
    const isBlocked = err?.message?.includes('ERR_BLOCKED_BY_CLIENT') ||
                      err?.message?.includes('Failed to fetch') ||
                      err?.code === 'unavailable'
    const detail = `[${err.code ?? 'unknown'}] ${err.message ?? err}`
    console.error(`[Admin] /${path} —`, detail, err)
    leadsError.value = isBlocked
      ? `⚠️ Parece que el navegador o una extensión está bloqueando Firestore. Prueba en incógnito o deshabilita el adblocker. (${detail})`
      : `No se pudieron cargar leads. ${detail}`
  } finally {
    leadsLoading.value = false
  }
}

async function updateStatus(row, newStatus) {
  try {
    await updateDoc(doc(db, 'form_submissions', row.id), { status: newStatus })
    row.status = newStatus
    const idx = submissions.value.findIndex(s => s.id === row.id)
    if (idx !== -1) submissions.value[idx].status = newStatus
  } catch (err) {
    console.error(`[Admin] updateDoc form_submissions/${row.id} — [${err.code}] ${err.message}`, err)
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
  if (row.landingId === 'usdt') return 'Anónimo'
  if (row.nombre && row.telefono) return `${row.nombre} · ${row.telefono}`
  if (row.nombre)   return row.nombre
  if (row.email)    return row.email
  return '—'
}

function landingLabel(id) {
  return { afiliado: 'Afiliado', comercio: 'Comercio', newsletter: 'Newsletter', usdt: 'USDT' }[id] ?? id
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
  if (row.landingId === 'usdt') return ''
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
  if (row.landingId === 'usdt') return 'Anónimo 💛'
  return ''
}

function sanitizePhone(phone) {
  return phone.replace(/\D/g, '')
}

function statAvgClass(avg) {
  if (avg >= 1.5) return 'avg-high'
  if (avg >= 0.8) return 'avg-mid'
  return 'avg-low'
}

onMounted(() => {
  loadSubmissions()
  loadLeads()
})
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
.kpi-usdt       .kpi-value { color: #fbbf24; }

/* USDT option breakdown rows */
.usdt-opt-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
}

.usdt-opt-label {
  width: 220px;
  flex-shrink: 0;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.8);
  line-height: 1.3;
}

.usdt-opt-count {
  flex-shrink: 0;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text);
  min-width: 60px;
  text-align: right;
}

.usdt-bar-fill {
  background: linear-gradient(90deg, #0d9488, #26c6a0);
  min-width: 2px;
}

@media (max-width: 600px) {
  .usdt-opt-label { width: 130px; font-size: 0.75rem; }
}

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
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
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
  min-width: 560px;
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

/* Tabs navigation */
.tabs-nav {
  display: flex;
  gap: 4px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 4px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  width: 100%;
}

.tabs-nav::-webkit-scrollbar { display: none; }

.tab-btn {
  padding: 8px 18px;
  font-size: 13px;
  font-weight: 600;
  color: var(--muted);
  background: transparent;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.18s;
  white-space: nowrap;
  font-family: inherit;
}

.tab-btn:hover { color: var(--text); }

.tab-active {
  background: var(--dark-3);
  color: var(--text);
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
}

/* Stats section */
.stats-section {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
}

.stats-header { margin-bottom: 20px; }

.stats-title {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 4px;
}

.stats-sub {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.5;
}

.stats-list { display: flex; flex-direction: column; gap: 16px; }

.stat-row {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.stat-rank {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 800;
  background: var(--dark-3);
  color: var(--muted);
  margin-top: 2px;
}

.rank-top { background: rgba(255,145,77,0.15); color: var(--accent); }

.stat-content { flex: 1; min-width: 0; }

.stat-label {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 7px;
}

.stat-bar-bg {
  height: 8px;
  background: var(--dark-3);
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  margin-bottom: 6px;
}

.stat-bar-fill { height: 100%; transition: width 0.4s ease; }

.stat-fill-high { background: var(--green); }
.stat-fill-mid  { background: var(--yellow); }
.stat-fill-low  { background: var(--red); }

.stat-legend {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

.stat-ct-high  { font-size: 11px; color: var(--green);  font-weight: 600; }
.stat-ct-mid   { font-size: 11px; color: var(--yellow); font-weight: 600; }
.stat-ct-low   { font-size: 11px; color: var(--red);    font-weight: 600; }
.stat-total    { font-size: 11px; color: var(--muted); margin-left: auto; }

.stat-avg {
  flex-shrink: 0;
  font-size: 22px;
  font-weight: 800;
  min-width: 50px;
  text-align: right;
  margin-top: 1px;
  letter-spacing: -0.5px;
}

.avg-high { color: var(--green); }
.avg-mid  { color: var(--yellow); }
.avg-low  { color: var(--red); }

/* =============================================
   RESPONSIVE — Tablet (max 768px)
   ============================================= */
@media (max-width: 768px) {
  .dash-main { padding: 16px; gap: 16px; }
  .topbar    { padding: 0 16px; }

  .kpi-row { grid-template-columns: repeat(3, 1fr); }

  /* Table → card layout */
  .data-table,
  .data-table tbody,
  .data-table tr,
  .data-table td { display: block; width: 100%; min-width: 0; }

  .data-table thead {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  .data-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 16px;
    padding: 14px 16px;
    margin: 0;
    border-radius: 0;
    border-bottom: 1px solid var(--border) !important;
  }

  .data-table td {
    padding: 0;
    border-bottom: none !important;
    display: flex;
    flex-direction: column;
    gap: 3px;
    font-size: 13px;
  }

  .data-table td::before {
    content: attr(data-label);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--muted);
  }

  .td-action {
    grid-column: 1 / -1;
    flex-direction: row !important;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid var(--border);
    padding-top: 10px !important;
    margin-top: 4px;
  }

  .td-action::before { display: none; }
  .td-contact { max-width: none; white-space: normal; overflow: visible; text-overflow: clip; }

  .modal-card { max-width: 100%; border-radius: 0; }

  .stats-section { padding: 16px; }
  .stat-total    { margin-left: 0; }
}

/* =============================================
   RESPONSIVE — Mobile (max 480px)
   ============================================= */
@media (max-width: 480px) {
  .dash-main   { padding: 12px; gap: 12px; }
  .topbar      { padding: 0 12px; height: 50px; }
  .topbar-user { display: none; }
  .topbar-title { font-size: 15px; }
  .btn-logout  { font-size: 12px; padding: 4px 10px; }

  .kpi-row   { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .kpi-card  { padding: 14px; gap: 10px; }
  .kpi-value { font-size: 22px; }
  .kpi-icon  { font-size: 22px; }

  .filters-bar { flex-direction: column; }
  .filter-input,
  .filter-select,
  .btn-refresh { width: 100%; }

  .data-row { grid-template-columns: 1fr; }

  .modal-card { border-left: none; }

  .stat-row  { gap: 8px; }
  .stat-avg  { font-size: 18px; min-width: 40px; }
  .stat-legend { gap: 8px; }
}
</style>
