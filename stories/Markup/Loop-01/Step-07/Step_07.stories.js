import Index from "./Index"
import Markup from "./Solution"
import PostTitle from "./PostTitle"
import avatar from "./img/avatar.jpg"

export default {
  title: `Markup/Loop-01/Step-07`,
  component: Markup,
}

export const Discussion = () => ({
  components: { Index },
  template: `<Index/>`,
})

const published = new Date(2017, 7, 6, 22, 14).getTime()

export const Solution = () => ({
  components: { Markup, PostTitle },
  template: `
    <div class="min-h-screen flex justify-center items-center bg-orange-300">
      <Markup 
        :published="content.published" 
        :comments="content.comments" 
        :author="content.author"
        :avatar="content.avatar">
          <PostTitle slot="title" main-heading="Be a man" sub-heading="Respect women" />
          <template slot="body">
              <p v-for="(paragraph,i) in content.text" :key="i">
                  {{ paragraph }}
              </p>
          </template>
      </Markup>
    </div>`,
  data() {
    return {
      content: {
        author: "john hanson",
        avatar,
        text: [
          `The desire to be respected by someone of the opposite sex is something that runs deep within everyone, 
            even though most people dont'take the time to find someone who truly respects them. It seems like people are
            just looking for someone to show them the slightest amount of respect. I am convinced one of the best ways to help  any relationship
            grow is by showing respect.`,
          `I have come to the conclusion that everyone longs to be respected. What is respect? Respect is showing someone 
          extra special attention, or high regard, based on a desire to show them how highly they are valued.`,
        ],
        published,
        comments: 23,
      },
    }
  },
})
