<template>
  <div class="py-10">
    <header>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">Room</h1>
      </div>
    </header>
    <main v-if="record">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div>{{ record.name }}</div>
        <div class='mt-3 pt-3 border-t border-gray-100'>
          <FormKit type='text' v-model="form.name" />
          <FormKit type="submit" value="Submit" @click="handleUpdate" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import useRoom from '../composables/useRoom'

const route = useRoute()
const { form, record, update } = useRoom({ id: route.params.id as string })

const handleUpdate = () => {
  update({ name: form.value?.name })
}

</script>