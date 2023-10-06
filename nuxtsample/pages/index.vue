<template>
  <v-app>
    <v-toolbar color="teal-darken-4 select-none">
      <v-toolbar-title>NSFDC</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu :location="center">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" v-model="location" icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in sitems" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>

          <v-list-item @click="goToSettingsPage">
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-tabs="title">
          <v-tab v-for="item in headers" :key="item" :value="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

      <v-window v-model="tab">
        <v-window-item value="Chats">
          <v-list :items="chat" item-props lines="three">
            <template v-slot:subtitle="{ subtitle }">
              <div v-html="subtitle"></div>
            </template>
          </v-list>

          <v-list :items="chat" item-props lines="three">
            <template v-slot:subtitle="{ subtitle }">
              <div v-html="subtitle"></div>
            </template>
          </v-list>
        </v-window-item>

        <v-window-item value="Calls" style="padding-top: 8px;">

          <v-list-item
            v-for="file in files"
            :key="file.title"
            :title="file.title"
            :subtitle="file.subtitle"
          >
            <template v-slot:prepend>
              <v-avatar :color="file.color">
                <v-icon color="white">{{ file.icon }}</v-icon>
              </v-avatar>
            </template>

            <template v-slot:append>
              <v-btn
                color="grey-lighten-1"
                icon="mdi-information"
                variant="text"
              ></v-btn>
            </template>
          </v-list-item>
        </v-window-item>

        <v-window-item value="Notes"> <Notes /> </v-window-item>
      </v-window>
  </v-app>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      chat: [
        {
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Karn Choudhary",
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { type: "divider", inset: true },
        {
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Summer BBQ",
          subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { type: "divider", inset: true },
        {
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { type: "divider", inset: true },
        {
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { type: "divider", inset: true },
        {
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
      files: [
        {
          color: "blue",
          icon: "mdi-clipboard-text",
          subtitle: "Jan 20, 2014",
          title: "Vacation itinerary",
        },
        {
          color: "amber",
          icon: "mdi-gesture-tap-button",
          subtitle: "Jan 10, 2014",
          title: "Kitchen remodel",
        },
      ],
      tab: ref(null),
      headers: ["Chats", "Calls", "Notes"],
      text: {
        Chats: "this is chat screen",
        Calls: "this is calls screen",
        Updates: "this is Updates screen",
      },
      sitems: [
        { title: "New group" },
        { title: "New broadcast" },
        { title: "Whatsapp Web" },
        { title: "Status" },
      ],
    };
  },
  methods: {
    goToSettingsPage() {
      // Use $router.push to navigate to the "settings" page
      this.$router.push("/settings");
    },
  },
};
</script>

<style>
/* In your CSS file or <style> section of a Vue component */
.select-none {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
</style>
