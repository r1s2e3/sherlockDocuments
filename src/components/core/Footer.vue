<template>
  <v-footer
    id="core-footer"
    app
    absolute
    height="82"
  >
    <div class="footer-items">
      <span
        v-for="link in links"
        :key="link.name"
      >
        <a
          :href="link.Link"
          class="tertiary--text footer-links">{{ link.name }}</a>
      </span>
    </div>
    <v-spacer/>
    <span class="font-weight-light copyright pr-2">
      Made by
      <a
        href=""
        target="_blank">
        SherlockDocs</a>
      Team
    </span>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: 'На главную',
        Link: '/dashboard'
      },
      {
        name: 'Сообщить о проблеме',
        Link: ''
      }
    ]
  })
}
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
