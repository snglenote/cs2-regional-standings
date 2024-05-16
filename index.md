---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Counter-Strike Docs"
  # text: "A VitePress Site"
  # tagline: My great project tagline
  actions:
    - theme: brand
      text: Global Standings
      link: /src/counter-strike/regional_standings/standings_global
    - theme: brand
      text: Europe Standings
      link: /src/counter-strike/regional_standings/standings_europe
    - theme: brand
      text: Americas Standings
      link: /src/counter-strike/regional_standings/standings_americas
    - theme: brand
      text: Asia Standings
      link: /src/counter-strike/regional_standings/standings_asia

features:
  - title: <span id="global-standings-date">Loading...</span>
    details: Counter-Strike 2 team standings from Valve's official repository featuring global and regional rankings across Europe, Americas, and Asia. Explore detailed roster information including factors influencing final rank value such as bounty collected and LAN wins for a comprehensive view of team dynamics.
  - title: Major Supplemental Rulebook
    details: The Major Supplemental Rulebook outlines the standardized rules and requirements for Valve-sponsored Counter-Strike tournaments, ensuring consistency and fairness across all Major events.
  - title: Tournament Item Submission Guideline
    details: Counter Strike Major Championships feature guidelines for submitting Team and Player Autograph items, providing fans with an immersive event experience while offering participants an opportunity to share in proceeds from item sales.

---

<script>
fetch('/src/counter-strike/regional_standings/standings_global.md')
  .then(response => response.text())
  .then(text => {
    const match = text.match(/^### Standings as of (\d{4}-\d{2}-\d{2})/);
    if (match) {
      document.getElementById('global-standings-date').textContent = 'Standings as of ' + match[1];
    }
  });
</script>