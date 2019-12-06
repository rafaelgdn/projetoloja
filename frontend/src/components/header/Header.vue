<template>
    <nav>
        <v-navigation-drawer
            v-model="drawer"
            app
            style="background: linear-gradient(to right, #1488cc, #2b32b2)"
        >
            <v-row justify="center" class="mt-8">
                <v-avatar tile size="150px" width="190px">
                    <img src="@/assets/logo2.png" alt="logo" />
                </v-avatar>
            </v-row>
            <v-list dense class="mt-8" dark>
                <v-list-item
                    v-for="item in listItems"
                    :key="item.link"
                    link
                    :to="item.link"
                    class="pl-5"
                >
                    <v-list-item-action>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="subtitle-1">{{item.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar flat app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title class="headline">
                <span class="grey--text font-weight-black text--lighten-1">JR</span>
                <span class="grey--text font-weight-medium text--lighten-2 text-uppercase">Tech</span>
            </v-toolbar-title>
        </v-app-bar>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: true,
            listItems: [
                { link: "/", icon: "home", title: "Início" },
                { link: "/cadastro", icon: "assignment", title: "Cadastro OS" },
                { link: "/pesquisar", icon: "search", title: "Pesquisar OS" }
            ]
        };
    }
};
</script>

<style>
</style>