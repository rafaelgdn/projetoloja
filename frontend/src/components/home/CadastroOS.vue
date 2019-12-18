<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="2">
                    <v-text-field v-model="os.cliente.cpf" label="CLIENTE: CPF" required></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field v-model="os.cliente.nome" label="Nome"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field v-model="os.cliente.email" label="E-mail"></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                    <v-text-field v-model="os.cliente.telefone" label="Telefone"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field v-model="os.cliente.endereco.logradouro" label="Endereço"></v-text-field>
                </v-col>
                <v-col cols="12" md="1">
                    <v-text-field v-model="os.cliente.endereco.numero" label="Numero"></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                    <v-text-field v-model="os.cliente.endereco.complemento" label="Complemento"></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                    <v-text-field v-model="os.cliente.endereco.bairro" label="Bairro"></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                    <v-text-field v-model="os.cliente.endereco.cidade" label="Cidade"></v-text-field>
                </v-col>
                <v-col cols="12" md="1">
                    <v-text-field v-model="os.cliente.endereco.uf" label="UF"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field v-model="os.produto.marca" label="PRODUTO: Marca"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field v-model="os.produto.modelo" label="Modelo"></v-text-field>
                </v-col>
                <v-col cols="12" md="5">
                    <v-text-field v-model="os.produto.serie" label="Numero de Serie"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field v-model="os.produto.defeito" label="Defeito Reclamado"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="os.produto.acessorios" label="Acessórios"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model="os.obs" label="Observações"></v-text-field>
                </v-col>
            </v-row>
            <v-row class="justify-end mt-4">
                <v-btn color="primary" class="mr-2" @click="save">Salvar</v-btn>
                <v-btn color="secondary" @click="cancel">Cancelar</v-btn>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import { baseApiUrl } from "@/global.js";
// import { mapState } from "vuex";
import axios from "axios";

export default {
    mounted() {
        if (this.$store.state.editOrder) {
            this.os = this.$store.state.editOrder;
        }
    },
    props: ["osNextNumber"],
    // computed: mapState(["dialogRegisterOS", "editOrder"]),
    // watch: {
    //     dialogRegisterOS(newValue) {
    //         if (newValue && this.editOrder) {
    //             this.os = this.editOrder;
    //         }
    //     }
    // },
    methods: {
        async save() {
            await axios.post(`${baseApiUrl}/service-order`, this.os);
            this.$store.commit("reloadOS");
            this.$store.commit("reloadStatus");
            this.reset();
            this.$store.commit("SetDialogRegisterOS", false);
            this.$store.commit("SetEditOrder", "");
        },
        cancel() {
            this.reset();
            this.$store.commit("SetDialogRegisterOS", false);
            this.$store.commit("SetEditOrder", "");
        },
        reset() {
            this.os = {
                obs: "",
                cliente: {
                    cpf: "",
                    nome: "",
                    email: "",
                    telefone: "",
                    endereco: {
                        logradouro: "",
                        numero: "",
                        complemento: "",
                        bairro: "",
                        cidade: "",
                        uf: ""
                    }
                },
                produto: {
                    marca: "",
                    modelo: "",
                    defeito: "",
                    serie: "",
                    acessorios: ""
                }
            };
        }
    },
    data() {
        return {
            valid: false,
            os: {
                obs: "",
                cliente: {
                    cpf: "",
                    nome: "",
                    email: "",
                    telefone: "",
                    endereco: {
                        logradouro: "",
                        numero: "",
                        complemento: "",
                        bairro: "",
                        cidade: "",
                        uf: ""
                    }
                },
                produto: {
                    marca: "",
                    modelo: "",
                    defeito: "",
                    serie: "",
                    acessorios: ""
                }
            }
        };
    }
};
</script>

<style>
</style>
