<script setup lang="ts">
import { ref, reactive } from 'vue'
import { alertBox, showAlert } from '../../../function/FunctionAlert'
import { useAuthUserStores } from '../../../stores/AuthUserStores'
import LogoFreshCart from '../../../assets/logo/logo-company/freshcart-logo.svg'
import AlertBoxComponents from '../../../components/AlertBoxComponents.vue'
import router from '../../../main/router/github'

const textareaHeight = ref(150)
const inputData = reactive({
  avatarUser: '',
  userName: '',
  bio: ''
})

const DataSignup = () => {
  inputData.avatarUser = ''
  inputData.userName = ''
  inputData.bio = ''
}

const authSignin = useAuthUserStores()
const { signUpprofilesetup } = authSignin

// Handle Submit Form Contact Information
const handleSubmitProfileSetup = async () => {
  try {
    await signUpprofilesetup(inputData)
    DataSignup()
    setTimeout(() => {
      router.push('/createaccount/securityquestions')
    }, 1500)
  } catch (error) {
    showAlert('Sign-up failed. Please try again later.', 'error')
    console.error('Signup error:', error)
  }
}

const defaultImage =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
const backgroundImage = ref('')

const imageSrc = ref('')

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files && input.files[0]
  if (file) {
    inputData.avatarUser = file.name
    imageSrc.value = URL.createObjectURL(file)
  } else {
    inputData.avatarUser = ''
    imageSrc.value = ''
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
