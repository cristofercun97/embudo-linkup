<template>
  <router-view />
</template>

<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --dark:    #0f0f12;
  --dark-2:  #18181f;
  --dark-3:  #22222c;
  --card:    #1e1e28;
  --border:  #2e2e3e;
  --muted:   #9999b0;
  --text:    #e8e8f0;
  --grad-start: #8A3849;
  --grad-end:   #A95E8D;
  --accent:  #ff914d;
  --accent-2: #ffde59;
  --green:   #34d399;
  --red:     #f87171;
  --yellow:  #fbbf24;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background: var(--dark);
  color: var(--text);
  min-height: 100vh;
  font-size: 15px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }
</style>
