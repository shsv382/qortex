<template>
    <main class="container">
        <slot></slot>
    </main>
</template>

<style lang="scss">
.container {
    @media (min-width: 768px) {
        width: 90%;
        margin: auto;
    }
}
</style>