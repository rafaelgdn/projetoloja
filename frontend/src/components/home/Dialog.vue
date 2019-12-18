<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="80%">
            <template v-slot:activator="{ on }">
                <v-btn class="mr-3" color="primary" dark v-on="on" @click="nextOS">Cadastrar OS</v-btn>
                <v-btn color="secondary" dark @click="reload">Limpar</v-btn>
            </template>
            <keep-alive>
                <v-card>
                    <v-card-title
                        class="headline primary white--text justify-center font-weight-light"
                        primary-title
                    >Cadastro de Ordem de Serviço</v-card-title>

                    <v-card-text>
                        <CadastroOS
                            v-if="this.$store.state.dialogRegisterOS"
                            :osNextNumber="osNextNumber"
                        />
                    </v-card-text>
                </v-card>
            </keep-alive>
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
            osNextNumber: []
        };
    },
    computed: {
        dialog: {
            get() {
                return this.$store.state.dialogRegisterOS;
            },
            set(valor) {
                this.$store.commit("SetDialogRegisterOS", valor);
            }
        }
    },
    methods: {
        nextOS() {
            axios(`${baseApiUrl}/status`).then(res => {
                this.osNextNumber = res.data.osNextNumber + 1;
            });
            this.$store.commit("SetEditOrder", "");
        },
        reload() {
            this.$store.commit("reloadOS");
        }
    },
    deactivated() {
        this.CadastroOS.destroy();
        /* eslint-disable no-console */
        console.log("ok");
    }
};
</script>

<style>
</style>