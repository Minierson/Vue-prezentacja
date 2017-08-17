<template>
<v-container>
    <v-layout row wrap>
        <v-flex xs12 md6 offset-md3>
            <v-card>
                <v-card-text>
                    <v-container>
                        <form>
                            <v-layout row>
                                <v-flex>
                                    <h4>Przykładowy formularz</h4>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                    name="name"
                                    label="Enter name"
                                    type="text"
                                    required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                    name="email"
                                    label="Enter email"
                                    v-model="email"
                                    :rules="[rules.required, rules.email]"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                    name="password"
                                    label="Enter password"
                                    type="password"
                                    hint="At least 6 characters"
                                    v-model="password"
                                    min="6"
                                    :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                    :append-icon-cb="() => (e1 = !e1)"
                                    :type="e1 ? 'password' : 'text'"
                                    counter
                                    required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                        </form>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      e1: false,
      password: '',
      email: '',
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  }
}
</script>
