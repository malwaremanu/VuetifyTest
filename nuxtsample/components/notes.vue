<template>
  <v-app>
    <v-list lines="one">
      <v-list-item
        v-for="n in notes"
        :key="n"
        :title="'Item ' + n.title"       
      ></v-list-item>
    </v-list>


  </v-app>
</template>

<script>
export default {
  data() {
    return {
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
          created_on: "2023-10-05 15:30:00",
          created_by: "Jane Smith",
          updated_on: "2023-10-05 15:30:00",
          status: "done",
        },
        {
          title: "Project Deadline",
          created_on: "2023-10-04 09:15:00",
          created_by: "Alice Johnson",
          updated_on: "2023-10-06 11:45:00",
          status: "archived",
        },
      ],
    };
  },
  methods: {
    handleFabClick() {
      // Implement the action you want to perform when the FAB button is clicked
      console.log("FAB button clicked");
    },
  },
};
</script>
