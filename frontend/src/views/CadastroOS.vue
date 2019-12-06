<template>
    <v-container fluid class="pa-8 linha">
        <div>
            <h1
                class="headline font-weight-bold grey--text text--darken-2"
            >Cadastro de Ordem de Serviço</h1>
            <span
                class="text-capitalize caption font-weight-medium grey--text"
            >{{ this.$store.getters.date }}</span>
        </div>
        <v-card tile outlined class="mt-8" dense>
            <v-form v-model="valid">
                <v-container dense>
                    <v-row class="mb-0 pb-0">
                        <v-col class="pt-10 mb-0 pb-0">
                            <p
                                class="d-flex flex-nowrap subtitle-1 font-weight-bold grey--text text--darken-2"
                            >Cliente:</p>
                        </v-col>

                        <v-spacer></v-spacer>
                        <v-col cols="2" class="mb-0 pb-0">
                            <v-text-field v-model="os.numero" label="N° OS" single-line></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class="mt-0 pt-0">
                        <v-col cols="12" md="2">
                            <v-text-field
                                v-model="os.cliente.cpf"
                                :rules="cpfRules"
                                label="CPF"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="os.cliente.name" :rules="nameRules" label="Nome"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="os.cliente.email"
                                :rules="emailRules"
                                label="E-mail"
                            ></v-text-field>
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
                            <v-text-field
                                v-model="os.cliente.endereco.complemento"
                                label="Complemento"
                            ></v-text-field>
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
                    <p
                        class="subtitle-1 font-weight-bold grey--text text--darken-2 pt-5 mb-0"
                    >Produto:</p>
                    <v-row class="mt-0">
                        <v-col cols="12" md="2">
                            <v-text-field v-model="os.produto.marca" label="Marca"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field v-model="os.produto.modelo" label="Modelo"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field v-model="os.produto.defeito" label="Defeito Reclamado"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="os.produto.serie" label="Numero de Serie"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="justify-end mt-4">
                        <v-btn color="primary" class="mr-2">Salvar</v-btn>
                        <v-btn color="secondary">Cancelar</v-btn>
                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            os: {
                numero: "001",
                cliente: {
                    cpf: "",
                    name: "",
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
                    serie: ""
                },
                data: "",
                situacao: ""
            },
            cpfRules: [v => !!v || "Preencha o CPF"],
            nameRules: [v => !!v || "Preencha o nome do cliente"],
            emailRules: [
                v => !!v || "Preencha o email do cliente",
                v => /.+@.+/.test(v) || "E-mail must be valid"
            ]
        };
    }
};
</script>

<style>
</style>
