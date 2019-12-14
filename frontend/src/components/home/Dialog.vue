<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="80%">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on" @click="nextOS">Cadastrar OS</v-btn>
            </template>

            <v-card>
                <v-card-title
                    class="headline primary white--text justify-center font-weight-light"
                    primary-title
                >Cadastro de Ordem de Serviço</v-card-title>

                <v-card-text>
                    <CadastroOS @closeDialog="dialog = false" :osNextNumber="osNextNumber" />
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import CadastroOS from "./CadastroOS.vue";
import { baseApiUrl } from "@/global.js";
import axios from "axios";

export default {
    components: { CadastroOS },
    data() {
        return {
            dialog: false,
            osNextNumber: []
        };
    },
    methods: {
        nextOS() {
            axios(`${baseApiUrl}/status`).then(res => {
                this.osNextNumber = res.data.osNextNumber + 1;
            });
        }
    }
};
</script>

<style>
</style>