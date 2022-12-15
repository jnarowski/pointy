<template>
  <h1> Create an Account </h1>
  <p> <input type='text' placeholder="Email" v-model='email' /> </p>
  <p> <input type='password' placeholder="Password" v-model='password' /> </p>
  <p> <button @click="register"> Submit </button> </p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { createOrganization, createUser } from '../firebase'

const email = ref('')
const password = ref('')
const router = useRouter()

const register = async () => {
  try {
    const userRef = await createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    const organization = await createOrganization({ name: 'Your Organization' })
    const user = await createUser({ uid: userRef.user.uid, organizationId: organization.id })
    console.log('Successfully registered!');
  } catch (error: any) {
    if (error) {
      console.log(error.code)
      alert(error.message);
    }
  }
}

</script>

