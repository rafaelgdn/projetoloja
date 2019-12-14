<template>
    <v-container fluid class="pa-8 linha">
        <div>
            <h1 class="headline font-weight-bold grey--text text--darken-2">Início</h1>
            <span
                class="text-capitalize caption font-weight-medium grey--text"
            >{{ this.$store.getters.date }}</span>
        </div>
        <v-row class="mt-8">
            <StatusBox
                cardIcon="assignment"
                cardIconColor="primary"
                cardTitle="Aguardando Orçamento"
                cardCount="0"
            />
            <StatusBox
                cardIcon="info"
                cardIconColor="warning"
                cardTitle="Aguardando Autorização"
                cardCount="0"
            />
            <StatusBox
                cardIcon="done"
                cardIconColor="success"
                cardTitle="Orçamento Autorizado"
                cardCount="0"
            />
            <StatusBox
                cardIcon="thumb_up"
                cardIconColor="purple"
                cardTitle="Aguardando Retirada"
                cardCount="0"
            />
        </v-row>
        <v-row>
            <v-col cols="12">
                <DetailsTable />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// @ is an alias to /src
import StatusBox from "@/components/home/StatusBox.vue";
import DetailsTable from "@/components/home/DetailsTable.vue";
import format from "date-fns/format";
import pt from "date-fns/locale/pt";

export default {
    components: { StatusBox, DetailsTable },
    computed: {
        date() {
            return format(new Date(), "eeee, d MMMM yyyy", {
                locale: pt
            });
        }
    },
    data() {
        return {};
    }
};
</script>

<style>
.linha {
    border-top: 1px solid rgb(233, 231, 231);
}
</style>