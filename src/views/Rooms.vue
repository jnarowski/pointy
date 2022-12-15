<template>
  <div class="py-10">
    <header>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">Rooms</h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ul>
          <li v-for="room in rooms" :key="room.id">
            <span>{{ room.name }}</span>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { roomsRef } from '../firebase'
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

const rooms = useCollection(roomsRef)
</script>