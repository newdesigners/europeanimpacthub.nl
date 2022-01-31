<template>
  <div class="">
    <aside class="text-15 pb-5 lg:pb-9">
      <Breadcrumb />
    </aside>
    <article>
      <div class="sm:w-4/5 sm:mx-auto md:w-3/5">
        <p class="text-10 lg:text-20 text-black pb-2.5 lg:pb-4 text-center">
          <span class="uppercase">{{ blok.category }}</span>
          <span>|</span>
          <span class="uppercase">{{ formatDate(blok.date) }}</span>
        </p>
        <h1 class="text-13 lg:text-30 font-medium text-black pb-2.5 lg:pb-5 text-center">
          {{ blok.title }}
        </h1>
      </div>
      <figure
        class="
          w-full
          rounded-xl
          overflow-hidden
          relative
          bg-primary
          pt-[45%]
          lg:pt-[32%]
          overflow-hidden
          mb-4
          md:mb-8
        "
      >
        <img
          class="
            block
            max-h-full max-w-full
            h-full
            absolute
            top-0
            left-0
            right-0
            bottom-0
            object-cover object-center
          "
          v-if="blok.image"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
      </figure>
      <div class="sm:w-4/5 sm:mx-auto md:w-3/5 pb-8">
        <p
          class="text-black font-medium pb-8 md:pb-16 md:text-20 md:font-normal"
        >
          {{ blok.excerpt }}
        </p>
        <div class="rich-text rich-text--post">
          <rich-text-renderer v-if="content.body" :document="content.body" />
        </div>
      </div>
    </article>
    <aside class="sm:w-4/5 sm:mx-auto pb-5 lg:pb-10">
      <p class="font-bold text-10 lg:text-15 pb-2.5 text-black">Deel dit project</p>
      <div>
        <ul class="flex gap-2.5 lg:gap-6">
          <li v-for="(s, i) in socials" :key="i" class="flex items-center">
            <ShareNetwork
              :network="s"
              :url="path"
              :title="blok.title"
              :description="blok.excerpt"
            >
              <Resources class="w-4 h-4 lg:w-9 lg:h-9" :type="`icon-${s}`" />
            </ShareNetwork>
          </li>
          <li @click="copyUrl"><Resources class="w-4 h-4 lg:w-9 lg:h-9" type="icon-share" /></li>
        </ul>
      </div>
    </aside>
    <footer class="sm:w-4/5 sm:mx-auto">
      <h3 class="font-normal text-20 lg:text-30 text-black pb-3 lg:pb-5">Andere projecten</h3>
      <ul class="xl:flex gap-5">
        <li
          v-for="(p, i) in projects"
          :key="i"
          class="pb-5"
        >
          <NuxtLink
            :to="`/student-corner/project/another_slug_here_${i}`"
            class="flex"
          >
            <article class="flex gap-3.5 items-center lg:items-start">
              <figure class="w-[93px] h-[93px] lg:w-[200px] lg:h-[200px] rounded-md overflow-hidden">
                <img 
                  class="w-full h-full object-cover"
                  :src="p.image.filename"
                  :alt="p.image.alt"
                />
              </figure>
              <div class="text-black flex-1">
                <p class="uppercase pb-2 lg:text-15">
                  <span class="text-primary">{{ p.category }}</span>
                  <span class="text-black hidden lg:inline pl-5">{{ formatDate(p.date) }}</span>
                </p>
                <h4 class="font-normal text-15 lg:text-20 pb-2 max-w-[295px]">{{ p.name }}</h4>
                <p class="uppercase lg:hidden">{{ formatDate(p.date) }}</p>
              </div>
            </article>
          </NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    content() {
      return JSON.parse(`
        {
          "body": {
            "type": "doc",
            "content": [
              {
                "type": "heading",
                "attrs": {
                  "level": 2
                },
                "content": [
                  {
                    "text": "Title 2",
                    "type": "text"
                  }
                ]
              },
              {
                "type": "heading",
                "attrs": {
                  "level": 3
                },
                "content": [
                  {
                    "text": "Title 3",
                    "type": "text"
                  }
                ]
              },
              {
                "type": "heading",
                "attrs": {
                  "level": 4
                },
                "content": [
                  {
                    "text": "Title 4",
                    "type": "text"
                  }
                ]
              },
              {
                "type": "heading",
                "attrs": {
                  "level": 5
                },
                "content": [
                  {
                    "text": "Title 5",
                    "type": "text"
                  }
                ]
              },
              {
                "type": "heading",
                "attrs": {
                  "level": 6
                },
                "content": [
                  {
                    "text": "Title 6",
                    "type": "text"
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "text": "Dit zijn voorbeelden van vragen die de European Impact Hub in de afgelopen jaren voor organisaties, publiek en privaat, heeft beantwoord. Onze aanpak start vanuit een brede basiskennis van de theorie en praktijk van Europees werken. Dit vullen we aan met een toegepaste onderzoeksopzet gericht op uw casus. Onze rol eindigt niet bij het opleveren van een onderzoeksrapport. We zetten ons actief in voor praktische de uitrol en implementatie van onderzoeksbevindingen op de werkvloer, oftewel: impact!.",
                    "type": "text"
                  }
                ]
              },
              {
                "type": "bullet_list",
                "content": [
                  {
                    "type": "list_item",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "text": "Unordered list 1",
                            "type": "text"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "list_item",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "text": "Unordered list 2",
                            "type": "text"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "list_item",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "text": "Unordered list 3",
                            "type": "text"
                          }
                        ]
                      },
                      {
                        "type": "bullet_list",
                        "content": [
                          {
                            "type": "list_item",
                            "content": [
                              {
                                "type": "paragraph",
                                "content": [
                                  {
                                    "text": "Unordered list deep",
                                    "type": "text"
                                  }
                                ]
                              },
                              {
                                "type": "bullet_list",
                                "content": [
                                  {
                                    "type": "list_item",
                                    "content": [
                                      {
                                        "type": "paragraph",
                                        "content": [
                                          {
                                            "text": "Unordered list deeper",
                                            "type": "text"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "ordered_list",
                "attrs": {
                  "order": 1
                },
                "content": [
                  {
                    "type": "list_item",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "text": "Ordered list 1",
                            "type": "text"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "list_item",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "text": "Ordered list 2",
                            "type": "text"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "list_item",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "text": "Ordered list 3",
                            "type": "text"
                          }
                        ]
                      },
                      {
                        "type": "ordered_list",
                        "attrs": {
                          "order": 1
                        },
                        "content": [
                          {
                            "type": "list_item",
                            "content": [
                              {
                                "type": "paragraph",
                                "content": [
                                  {
                                    "text": "Ordered list deep",
                                    "type": "text"
                                  }
                                ]
                              },
                              {
                                "type": "ordered_list",
                                "attrs": {
                                  "order": 1
                                },
                                "content": [
                                  {
                                    "type": "list_item",
                                    "content": [
                                      {
                                        "type": "paragraph",
                                        "content": [
                                          {
                                            "text": "Ordered list deeper",
                                            "type": "text"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "image",
                    "attrs": {
                      "alt": "Studenten Haagse Hogeschool winnen Hackaton for Good",
                      "src": "https://a.storyblok.com/f/117396/1600x1066/49946b9837/studenten-haagse-hogeschool-winnen-hackaton-for-good.jpeg",
                      "title": ""
                    }
                  }
                ]
              },
              {
                "type": "blockquote",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "text": "Dit onderscheidt ons van ‘traditionele’ academisch onderzoekers. Kennis is er om verandering teweeg te brengen, niet om ergens op de plank te belanden.",
                        "type": "text"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "paragraph",
                "content": [
                  {
                    "text": "this is a link",
                    "type": "text",
                    "marks": [
                      {
                        "type": "link",
                        "attrs": {
                          "href": "https://tailwindcss.com/docs/customizing-spacing",
                          "uuid": null,
                          "anchor": null,
                          "target": null,
                          "linktype": "url"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      `);
    },
    socials() {
      return ["linkedin", "twitter"];
    },
    path() {
      return process.env.baseUrl + this.$nuxt.$route.fullPath;
    },
    projects() {
      return [
        {
          type: 'project',
          category : 'Minor',
          name: 'De titel van deze kaart (project) of een zin die de inhoud beschrijft.',
          date: '2021-05-06T11:00:23.869Z',
          image: {
            filename: 'https://picsum.photos/1350/430',
            alt: 'some alt text for image',
          },
          url: '/student-corner/projecten/slug_here',
        },
        {
          type: 'project',
          category : 'Minor',
          name: 'De titel van deze kaart (project) of een zin die de inhoud beschrijft.',
          date: '2021-05-06T11:00:23.869Z',
          image: {
            filename: 'https://picsum.photos/1350/431',
            alt: 'some alt text for image',
          },
          url: '/student-corner/projecten/slug_here',
        },
      ];
    }
  },
  props: {
    blok: {
      type: Object,
    },
  },
  methods: {
    async copyUrl() {
      console.log('ttt');
      try {
        let res = await this.$copyText(this.path);

      } catch (e) {
        console.error(e);
      }
    },
    formatDate(date) {
      return this.$moment(date).format("MMMM YYYY");
    },
  },
};
</script>