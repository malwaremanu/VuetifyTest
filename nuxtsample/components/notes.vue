<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="message" :append-icon="message ? 'mdi-send' : 'mdi-microphone'" :prepend-icon="icon"
            variant="filled" clear-icon="mdi-close-circle" clearable type="text"
            @click:append="sendMessage"></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-list lines="one">
      <v-list-item v-for="note in notes" :key="note" :title="note.title" :subtitle="note.subtitle">
        <template v-slot:append>
          <v-btn color="grey-lighten-1" icon="mdi-bin" variant="text"></v-btn>
          </template>
      </v-list-item>
    </v-list>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      message: 'asd',
      notes: [
        {
          title: "Meeting Agenda",
          created_on: "2023-10-06 10:00:00",
          created_by: "John Doe",
          updated_on: "2023-10-06 10:00:00",
          status: "draft",
        },
        {
          title: "Shopping List",
          subtitle: "something",
          created_on: "2023-10-05 15:30:00",
          created_by: "Jane Smith",
          updated_on: "2023-10-05 15:30:00",
          status: "done",
        },
        {
          title: "Project Deadline",
          subtitle: "something",
          created_on: "2023-10-04 09:15:00",
          created_by: "Alice Johnson",
          updated_on: "2023-10-06 11:45:00",
          status: "archived",
        },
      ],
    };
  },
  methods: {
    sendMessage() {
      var a = {
        title: this.message,
        created_on: new Date(),
        created_by: "Manupal",
        updated_on: new Date(),
        status: "archived",
      }

      this.notes.push(a)

      this.message = ''
    },
    handleFabClick() {
      // Implement the action you want to perform when the FAB button is clicked
      console.log("FAB button clicked");
    },
  },
};
</script>
