<template>
    <v-card tile outlined>
        <v-card-title class="d-flex flex-nowrap">
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
            <template v-slot:item.action="{ item }">
                <v-icon dense class="mr-3" @click="addBudget(item)">attach_money</v-icon>
                <v-icon dense @click="editItem(item)">edit</v-icon>
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
            search: "",
            headers: [
                { text: "OS", value: "id" },
                { text: "Nome", value: "cliente.nome" },
                { text: "Telefone", value: "cliente.telefone" },
                { text: "Marca", value: "produto.marca" },
                { text: "Modelo", value: "produto.modelo" },
                { text: "Situação", value: "situacao" },
                { text: "Ações", value: "action", sortable: false }
            ]
        };
    },
    methods: {
        editItem(os) {
            this.$store.commit("SetDialogRegisterOS", true);
            this.$store.commit("SetEditOrder", os);
        },
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