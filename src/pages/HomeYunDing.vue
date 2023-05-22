<template>
    <div>
        <CardList :theme="theme"/>
    </div>
</template>

<script>
import CardList from "../components/CardList";

export default {
    name: 'HomeYunDing',
    data() {
        return {
            theme:'云顶之弈',
        };
    },
    components: {
        CardList,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
