<template>
  <button @click.prevent="logout" class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Logout
  </button>
</template>

<script>

export default {
  name: 'Logout',
  methods: {
      logout() {
          this.$auth.logout()
            .then(response => {
                console.log('logout ok!', response);
            })
            .catch(reason => {
                console.log('nope.', reason);
            })
      }
  }
}
</script>