<template>
  <div class="container">
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main class="main">
      <h1 class="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p class="description">
        Get started by editing
        <code>pages/index.vue</code>
      </p>

      <div class="grid">
        <a href="https://nextjs.org/docs" class="card">
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" class="card">
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a href="https://github.com/vercel/next.js/tree/canary/examples" class="card">
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" class="card">
          <h2>Deploy &rarr;</h2>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
    </main>

    <footer class="footer">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span class="logo">
          <Image src="/vercel.svg" alt="Vercel Logo" width="72" height="16" />
        </span>
      </a>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  head() {
    return {
      title: 'Create Next App',
      meta: [
        { name: 'description', content: 'Generated by create next app' },
        { rel: 'icon', href: '/favicon.ico' },
      ],
    };
  },
});
</script>

<style scoped>
/* Add your component-specific styles here */
.container {
  /* styles from Home.module.css */
}

.main {
  /* styles from Home.module.css */
}

.title {
  /* styles from Home.module.css */
}

.description {
  /* styles from Home.module.css */
}

.grid {
  /* styles from Home.module.css */
}

.card {
  /* styles from Home.module.css */
}

.footer {
  /* styles from Home.module.css */
}

.logo {
  /* styles from Home.module.css */
}
</style>
