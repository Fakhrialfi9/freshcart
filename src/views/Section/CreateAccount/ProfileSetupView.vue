<script setup lang="ts">
import { ref, reactive } from 'vue'
import { alertBox, showAlert } from '../../../function/FunctionAlert'
import { useAuthUserStores } from '../../../stores/AuthUserStores'
import LogoFreshCart from '../../../assets/logo/logo-company/freshcart-logo.svg'
import AlertBoxComponents from '../../../components/AlertBoxComponents.vue'
import router from '../../../main/router'

// Default profile image URL
const defaultImage =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'

// Image source state
const imageSrc = ref('')

// Handle file change event for profile picture
const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]

  if (file && file.type.startsWith('image/')) {
    inputData.avatarUser = file
    const reader = new FileReader()
    reader.onload = () => {
      imageSrc.value = reader.result as string
    }
    reader.readAsDataURL(file)
  } else {
    inputData.avatarUser = ''
    imageSrc.value = ''
  }
}

// Error state
const error = ref<string | null>(null)

// Default textarea height
const textareaHeight = ref(150)

// Reactive state for input data
const inputData = reactive({
  avatarUser: '' as File | string,
  userName: '',
  bio: ''
})

// Reset input data
const DataSignup = () => {
  inputData.avatarUser = ''
  inputData.userName = ''
  inputData.bio = ''
}

// Access auth user store
const authSignin = useAuthUserStores()
const { signUpprofilesetup } = authSignin

// Handle submit form profile setup
const handleSubmitProfileSetup = async () => {
  try {
    error.value = null

    const formData = new FormData()
    formData.append('avatarUser', inputData.avatarUser)
    formData.append('userName', inputData.userName)
    formData.append('bio', inputData.bio)

    // Validate username uniqueness
    try {
      await signUpprofilesetup(formData)
    } catch (err: any) {
      // Menetapkan tipe any untuk err
      if (err.message === 'Username already exists') {
        error.value = 'Username already exists. Please choose a different username.'
        showAlert(error.value, 'error')
        return
      }
      throw err
    }

    DataSignup()

    // Delayed navigation to the next step if no errors
    setTimeout(() => {
      router.push('/createaccount/securityquestions')
    }, 1500)
  } catch (err: any) {
    console.error('Signup error:', err)

    // Handle other errors during sign-up
    error.value = 'Failed to signup. Please try again later.'
    showAlert(error.value, 'error')
  }
}
</script>

<template>
  <main class="MainCreateAccountContent">
    <div class="Container">
      <section class="CreateAccountContent">
        <div class="LogoFreshCart DisplayNone DisplayBlock-SM DisplayBlock-MD DisplayBlock-LG">
          <img :src="LogoFreshCart" alt="" />
          <p>|</p>
          <h6>Create Account</h6>
        </div>

        <div class="HeadingContentCreateAccount">
          <h5>Profile Setup</h5>
          <p>
            Upload your profile picture, set your display name and username, and write a short bio
          </p>
        </div>
        <div class="ProfileSetupContent">
          <form @submit.prevent="handleSubmitProfileSetup">
            <!-- Start Upload Avatar Profile -->
            <div class="ContainerInput">
              <label for="profile-picture">
                <div class="InputGroupFile">
                  <input
                    id="avatarUser"
                    type="file"
                    accept="image/*"
                    @change="handleFileChange"
                    required
                  />
                  <div class="CardBoxImage">
                    <img :src="imageSrc || defaultImage" alt="Profile Picture" />
                  </div>
                </div>
              </label>
            </div>
            <!-- End Upload Avatar Profile -->

            <!-- Start Input Username Profile -->
            <div class="ContainerInput">
              <label for="user-name">
                <h6>User Name*</h6>
                <input
                  id="userName"
                  type="text"
                  v-model="inputData.userName"
                  placeholder="eg: JohnDoe123"
                  required
                />
              </label>
            </div>
            <!-- End Input Username Profile -->

            <!-- Start Input Bio Profile -->
            <div class="ContainerInput">
              <label for="bio">
                <h6>Bio</h6>
                <textarea
                  id="PersonalBiography"
                  type="text"
                  :style="{ height: `${textareaHeight}px` }"
                  v-model="inputData.bio"
                  placeholder="Write a short bio about yourself"
                ></textarea>
              </label>
            </div>
            <!-- End Input Bio Profile -->
            <div class="ButtonCallToAction">
              <RouterLink to="/createaccount/contactinformation">
                <button type="submit">Back</button>
              </RouterLink>
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
      </section>
    </div>
    <AlertBoxComponents ref="alertBox" />
  </main>
</template>

<style scoped src="../../../assets/style/Views/CreateAccountView.css"></style>
