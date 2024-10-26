import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useNewsStore = defineStore('news', () => {
  const news = ref<News[]>([])
  const sortedNews = computed(() => {
    return news.value.filter((el) => el.shortText.includes(searchQuery.value));
  })

  let searchQuery = ref("")

  function formatDate(dateString: string) {
    const date = new Date(dateString)

    const day = date.getDate()
    if (!day) return dateString
    const month = date.getMonth()
    const year = date.getFullYear()

    const monthNames = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ]
    const monthName = monthNames[month]

    const formattedDate = `${day} ${monthName} ${year} г.`
    return formattedDate
  }

  function setCurrentNews(state: News[], color: NewsColors, page: number) {
    state.map(el => (el.color = color))
    state.map(el => (el.page = page))
    state.map(el => (el.datePublish = formatDate(el.datePublish)))
    news.value = [...news.value, ...state]

    const duplicates: News[] = news.value.filter(el => el.page === page)
    if (duplicates.length) {
      news.value = news.value.filter(el => el.page !== page)
    }
    news.value = [...news.value, ...state]

    news.value.sort((a, b) => a.page - b.page)
  }

  async function fetchDefaultNews() {
    const page: number = 7
    const url: string = `https://domotekhnika.ru/api/v1/news?page=${page}`
    const res = await axios.get(url)

    setCurrentNews([...res.data.data.news], NewsColors.GREEN, page)
  }

  async function fetchRandomNews(color: NewsColors) {
    const pageNum: number = Math.floor(Math.random() * 10) + 1
    console.log('pageNum', pageNum)

    const url: string = `https://domotekhnika.ru/api/v1/news?page=${pageNum}`
    const res = await axios.get(url)

    setCurrentNews([...res.data.data.news], color, pageNum)
  }

  return { news, sortedNews, fetchDefaultNews, fetchRandomNews, NewsColors, searchQuery }
})

interface News {
  color: NewsColors
  page: number
  datePublish: string
  image: string
  shortText: string
  slug: string
  title: string
}

enum NewsColors {
  GREEN = 'GREEN',
  YELLOW = 'YELLOW',
  PINK = 'PINK',
}
