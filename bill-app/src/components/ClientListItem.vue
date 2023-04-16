<template>
  <tr>
    <td><i class="fa-regular fa-user px-2"></i>{{ client.firstName }} {{ client.lastName }}</td>
    <td style="width: 40%;">{{ client.company }}</td>
    <td>{{ client.addedDate }}</td>
    <td class="d-flex gap-2 justify-content-end">
      <BButton
        size="sm"
        variant="outline-danger"
        iconLeft="trash"
        @click="$emit('delete', this.client._id)"
      >
        Supprimer
      </BButton>
      <BButton
        size="sm"
        variant="outline-primary"
        iconLeft="pen"
        @click="$emit('edit', this.client._id)"
      >
        Éditer
      </BButton>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    client: {
      type: String,
      required: true
    },
    message: {
      type: String,
      default: '-'
    }
  }
}
</script>

<style lang="scss" scoped></style>
