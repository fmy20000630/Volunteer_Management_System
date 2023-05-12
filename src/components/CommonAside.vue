<template>
  
</template>

<script>
    export default {
        name: 'CommonAside',
        data () {
            return {
                menuData: [
                    {
                        path: '/',
                        name: 'home',
                        label: '首页',
                        icon: '',
                        url: 'Home/Home'
                    },
                    {
                        path: '/personal',
                        name: 'personal',
                        label: '个人中心',
                        icon: '',
                        url: 'Personal/Personal'
                    },

                ]
            }
        }
    }
</script>

<style>

</style>