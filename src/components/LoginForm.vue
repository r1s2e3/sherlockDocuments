<template>
  <v-content class="auth-main">
    <v-container
      fill-height
      fluid>
      <v-layout
        align-center
        justify-center>
        <v-flex
          xs12
          sm8
          md4>
          <v-card
            class="elevation-12">
            <v-toolbar
              color="#BED3F6"
              class="flex justify-center"
            >
              <v-toolbar-title>Введите учетные данные</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form >
                <v-text-field
                  ref="username"
                  v-model="username"
                  :rules="[() => !!username || 'Это поле обязательное']"
                  prepend-icon="mdi-account"
                  label="Логин"
                  required
                />
                <v-text-field
                  ref="password"
                  v-model="password"
                  :rules="[() => !!password || 'Это поле обязательное']"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  label="Пароль"
                  placeholder="*********"
                  counter
                  required
                  @keydown.enter="login"
                  @click:append="showPassword = !showPassword"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                align-center
                class="auth-main--btn"
                justify-center
                color="#BED3F6"
                @click="login">
                Войти
              </v-btn>
              <v-spacer/>
            </v-card-actions>
            <v-snackbar
              v-model="snackbar"
              :color="color"
              :top="true"
            >
              {{ errorMessages }}
              <v-btn
                dark
                flat
                @click="snackbar = false"
              >
                Close
              </v-btn>
            </v-snackbar>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </v-content>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      errorMessages: 'Неверный Логин.',
      snackbar: false,
      color: 'general',
      showPassword: false
    }
  },
  methods: {
    login () {
      const username = this.username
      const password = this.password
      this.$store.dispatch('authRequest', {
        username,
        password
      })
        .then(() => this.$router.push('/dashboard'))
        .catch((err) => {
          console.log(err)
          this.snackbar = true
        }
        )
    }
  },
  metaInfo () {
    return {
      title: 'Super Secret | Login'
    }
  }
}
</script>

<style lang="scss">
  .auth-main {
    height: 100%;

    .v-toolbar__content {
      display: flex;
      justify-content: center;
    }
    .v-toolbar .v-toolbar__content .v-toolbar__title {
      font-size: 21px;
    }
  }
  .auth-main--btn {
    .v-btn__content {
      color: #495057 !important;
      text-transform: none;
      font-size: 16px;
    }
  }

  form {
    width: 360px;
  }
  .v-card__text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .v-btn {
    min-width: 140px;
    height: 40px;
    margin-bottom: 5px;
  }
</style>
