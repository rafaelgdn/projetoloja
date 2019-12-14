<template>
    <v-card tile outlined>
        <v-card-title class="d-flex flex-nowrap">
            <span class="d-flex flex-nowrap">Ordens de Serviço</span>
            <v-spacer style="width: 50%"></v-spacer>
            <v-text-field
                class="mr-10 mt-0 pt-0"
                v-model="search"
                append-icon="search"
                label="Procurar OS"
                single-line
                hide-details
            ></v-text-field>
            <Dialog />
        </v-card-title>
        <v-data-table :headers="headers" :items="this.$store.getters.getAllOS" :search="search">
            <template v-slot:item.situacao="{ item }">
                <v-chip color="transparent">
                    <v-avatar left>
                        <v-icon
                            class="material-icons-outlined"
                            :color="getColor(item.situacao)"
                            small
                        >{{ getIcon(item.situacao) }}</v-icon>
                    </v-avatar>
                    {{ item.situacao }}
                </v-chip>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
// import { baseApiUrl } from "@/global.js";
// import axios from "axios";
import Dialog from "./Dialog.vue";

export default {
    components: { Dialog },
    data() {
        return {
            serviceOrder: [],
            search: "",
            headers: [
                { text: "OS", value: "id" },
                { text: "Nome", value: "cliente.nome" },
                { text: "CPF", value: "cliente.cpf" },
                { text: "Telefone", value: "cliente.telefone" },
                { text: "Situação", value: "situacao", align: "center" }
            ]
        };
    },
    methods: {
        getColor(situacao) {
            if (situacao == "Aguardando Orçamento") return "primary";
            else if (situacao == "Aguardando Autorização") return "warning";
            else if (situacao == "Orçamento Autorizado") return "success";
            else return "purple";
        },
        getIcon(situacao) {
            if (situacao == "Aguardando Orçamento") return "assignment";
            else if (situacao == "Aguardando Autorização") return "info";
            else if (situacao == "Orçamento Autorizado") return "done";
            else return "thumb_up";
        }
    },
    mounted() {
        this.$store.commit("reloadOS");
    }
};
</script>

<style>
</style>