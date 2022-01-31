<template>
  <div class="">
    <aside class="text-15 pb-5 lg:pb-9">
      <Breadcrumb />
    </aside>
    <article class="">
      <figure class="w-full rounded-xl overflow-hidden relative bg-primary pt-[45%] lg:pt-[32%] overflow-hidden mb-2.5 md:mb-8">
        <img class="block max-h-full max-w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover object-center"
          v-if="blok.image"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
      </figure>
      <div class="md:mx-auto md:w-3/5">
        <h1 class="text-black md:text-center text-18 md:text-35 pb-1.5 md:mb-3">
          {{ blok.title }}
        </h1>
        <p class="text-black font-medium pb-8 md:pb-16 md:text-20 md:font-normal">{{ blok.excerpt }}</p>
        <div class="rich-text rich-text--post">
          <rich-text-renderer
            v-if="content.body"
            :document="content.body"
          /> 
        </div>
      </div>
    </article>
    <footer class="mx-auto md:w-3/5">
      <!-- Todo: has to be modular. change people -->
      <Banner v-if="blok.type === 'service'"  />
    </footer>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
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
    },
    props: {
        blok: {
            type: Object,
        },
    },
    components: { Banner }
};
</script>