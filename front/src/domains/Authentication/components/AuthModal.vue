<template>
    <div v-if="value" class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline" v-click-outside="closeModal">
        <div>
            <template v-if="authType == 'login'">
                <Login v-on:success="closeModal()" />
                <div class="mt-4 flex items-center justify-end">
                    <div class="text-sm">
                        <button @click.prevent="switchAuthType('register')" class="font-medium text-pink-600 hover:text-pink-500">
                        Create new account
                        </button>
                    </div>
                </div>
            </template>

            <template v-if="authType == 'register'">
                <Register v-on:success="closeModal()" />
                <div class="mt-4 flex items-center justify-end">
                    <div class="text-sm">
                        <button  @click.prevent="switchAuthType('login')" class="font-medium text-indigo-600 hover:text-indigo-500">
                        Already an account?
                        </button>
                    </div>
                </div>
            </template>
        </div>
        </div>
    </div>
    </div>

</template>
<script>
import Login from './Login.vue'
import Register from './Register.vue'
export default {
    name: 'AuthModal',
    components: {
        Login,
        Register,
    },
    props: ['value'],
    data() {
        return {
            authType: 'login'
        }
    },
    methods: {
        closeModal () {
            this.$emit('input', false)
        },
        switchAuthType(type) {
            this.authType = type
        }
    }
}
</script>