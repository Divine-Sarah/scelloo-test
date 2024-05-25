<template>
    <main>
        <div class="pagination">
            <!-- previous -->
            <button>&lt;</button>
            <span v-for="(item, index) in new Array(10)" :key="index">
                <button>{{ index + 1 }}</button></span>
            <!-- next -->
            <button>&gt;</button>

        </div>
    </main>
</template>

<script>

</script>
