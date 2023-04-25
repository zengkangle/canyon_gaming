<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
export default {
    name: 'icon-svg',
    props: {
        iconname: {
            type: String,
            required: true
        }
    },
    computed: {
        iconName() {
            return `#${this.iconname}`
        }
    }
}
</script>

<style>
.svg-icon {
    width: 1.8em;
    height: 1.8em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>