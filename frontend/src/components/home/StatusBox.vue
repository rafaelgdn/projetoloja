<template>
    <v-col cols="12" sm="6" lg="3">
        <v-card outlined class="pa-2">
            <v-row no-gutters>
                <v-col cols="3" class="d-flex justify-center align-center">
                    <v-icon
                        large
                        :color="cardIconColor"
                        class="material-icons-outlined"
                    >{{ cardIcon }}</v-icon>
                </v-col>
                <v-col cols="9">
                    <v-card-text>
                        <p class="caption grey--text ma-0">{{ cardTitle }}</p>
                        <p class="headline ma-0">{{ cardCount }}</p>
                    </v-card-text>
                </v-col>
            </v-row>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props: ["cardIcon", "cardTitle", "cardCount", "cardIconColor"]
};
</script>

<style>
</style>