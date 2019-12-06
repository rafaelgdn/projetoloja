<template>
    <v-card tile outlined>
        <v-card-title>
            Ordens de Serviço
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="search"
                label="Procurar OS"
                single-line
                hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="ordensDeServico" :search="search">
            <template v-slot:item.situacao="{ item }">
                <v-chip :color="getColor(item.situacao)" dark>
                    <v-avatar left>
                        <v-icon small>{{ getIcon(item.situacao) }}</v-icon>
                    </v-avatar>
                    {{ item.situacao }}
                </v-chip>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    props: ["ordensDeServico"],
    data() {
        return {
            search: "",
            headers: [
                { text: "Numero OS", value: "numero" },
                { text: "Nome", value: "nome" },
                { text: "CPF", value: "cpf" },
                { text: "Telefone", value: "telefone" },
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
    }
};
</script>

<style>
</style>