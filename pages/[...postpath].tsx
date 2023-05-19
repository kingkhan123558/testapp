<template>
  <div class="post-container">
    <h1>{{ post.title }}</h1>
    <img :src="post.featuredImage.node.sourceUrl" :alt="post.featuredImage.node.altText || post.title" />
    <article v-html="post.content" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { GetServerSidePropsContext } from 'nuxt';

interface PostProps {
  post: {
    title: string;
    excerpt: string;
    featuredImage: {
      node: {
        sourceUrl: string;
        altText: string;
      };
    };
    content: string;
    dateGmt: string;
    modifiedGmt: string;
  };
  host: string;
  path: string;
}

export default defineComponent({
  async asyncData({ req, params }: GetServerSidePropsContext) {
    const endpoint = 'https://news1x.live/graphql';
    const referringURL = req.headers?.referer || null;
    const pathArr = params?.postpath as string[];
    const path = pathArr.join('/');
    console.log(path);
    const fbclid = req.query?.fbclid;

    // redirect if facebook is the referer or request contains fbclid
    if (referringURL?.includes('facebook.com') || fbclid) {
      return {
        redirect: {
          path: `/${encodeURI(path)}`,
          statusCode: 302,
        },
      };
    }

    const graphQLClient = new GraphQLClient(endpoint);
    const query = `
      {
        post(id: "/${path}/", idType: URI) {
          title
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          content
          dateGmt
          modifiedGmt
        }
      }
    `;

    try {
      const { post } = await graphQLClient.request(query);

      if (!post) {
        return {
          notFound: true,
        };
      }

      return {
        post,
        host: req.headers.host,
        path,
      };
    } catch (error) {
      console.error('GraphQL request error:', error);
      return {
        notFound: true,
      };
    }
  },

  head() {
    return {
      title: this.post.title,
      meta: [
        { property: 'og:title', content: this.post.title },
        { property: 'og:description', content: this.removeTags(this.post.excerpt) },
        { property: 'og:type', content: 'article' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: this.host.split('.')[0] },
        { property: 'article:published_time', content: this.post.dateGmt },
        { property: 'article:modified_time', content: this.post.modifiedGmt },
        { property: 'og:image', content: this.post.featuredImage.node.sourceUrl },
        { property: 'og:image:alt', content: this.post.featuredImage.node.altText || this.post.title },
      ],
    };
  },

  methods: {
    removeTags(str: string) {
      if (!str) return '';
      return str.replace(/(<([^>]+)>)/gi, '').replace(/\[[^\]]*\]/, '');
    },
  },
});
</script>
