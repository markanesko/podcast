<template>
    <audio ref="player" controls>
    </audio>

</template>

<script>
export default {
    name: 'player',

    props: {
        track: {
            type: String,
            default: "",
            required: true,
        }
    },

    watch: {
        track(value, oldValue) {
            this.$refs.player.src = value
            this.$refs.player.play()
        }
    },
}
</script>