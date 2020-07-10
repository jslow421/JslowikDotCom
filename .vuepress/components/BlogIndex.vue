<!--<template>-->
<!--    <div>-->
<!--        &lt;!&ndash; Loop through all posts. &ndash;&gt;-->
<!--        <div v-for="post in posts">-->
<!--            &lt;!&ndash; Create a link to the post's url. This can also be removed if you don't plan to have any images. &ndash;&gt;-->
<!--            <router-link :to="post.path">-->
<!--                &lt;!&ndash; If a post has the frontmatter "coverImage" then display that image. &ndash;&gt;-->
<!--                <div v-if="typeof post.frontmatter.coverImage !== 'undefined'" >-->
<!--                    <img :src="post.frontmatter.coverImage" alt="" />-->
<!--                </div>-->
<!--            </router-link>-->
<!--            &lt;!&ndash; End optional block which can be deleted. &ndash;&gt;-->
<!--            &lt;!&ndash; Display the post's frontmatter title &ndash;&gt;-->
<!--            <h3><router-link :to="post.path">{{ post.frontmatter.title }}</router-link></h3>-->
<!--            &lt;!&ndash; Display the post's frontmatter date. &ndash;&gt;-->
<!--            <p>Posted On: {{ formateDate(post.frontmatter.date) }}</p>-->
<!--            &lt;!&ndash; Display the post's frontmatter description. &ndash;&gt;-->
<!--            <p>{{ post.frontmatter.description. }}</p>-->
<!--            &lt;!&ndash; Add read more with a link. &ndash;&gt;-->
<!--            <p><router-link :to="post.path">Read More >>></router-link></p>-->
<!--        </div>-->
<!--        <a rel="alternate" type="application/rss+xml" href="/rss.xml">RSS</a>-->
<!--    </div>-->
<!--</template>-->
<!--<script>-->
<!--    // Import moment into our file-->
<!--    import moment from "moment"-->
<!--    export default {-->
<!--        props: [-->
<!--            // This will limit the amount of blog posts shown-->
<!--            'limit',-->
<!--        ],-->
<!--        methods: {-->
<!--            // Control how our data is formatted. You can change to format according to JS date format.-->
<!--            formateDate(date, format = 'MMM D, YY') {-->
<!--                return moment(date).format(format)-->
<!--            }-->
<!--        },-->
<!--        computed: {-->
<!--            // Build a list of all our posts ready to be displayed.-->
<!--            posts() {-->
<!--                let posts = this.$site.pages-->
<!--                    .filter(post => !post.frontmatter.blog_index)-->
<!--                    .filter(post => !post.path.startsWith('/archived/'))-->
<!--                    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));-->
<!--                if (this.limit > 0) {-->
<!--                    posts = posts.slice(0, this.limit);-->
<!--                }-->
<!--                return posts;-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->
