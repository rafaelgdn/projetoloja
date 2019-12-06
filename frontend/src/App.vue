<template>
    <v-app>
        <Header />
        <v-content class="grey lighten-4">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import Header from "./components/header/Header.vue";

export default {
    name: "App",
    components: { Header },
    data: () => ({
        //
    })
};
</script>
