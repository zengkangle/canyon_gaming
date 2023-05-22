<template>
    <div>
        <CardList :theme="theme"/>
    </div>
</template>

<script>
import CardList from "../components/CardList";

export default {
    name: 'HomeProfession',
    data() {
        return {
            theme:'职业',
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
