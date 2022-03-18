const data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

const timeframeSelectors = document.querySelectorAll(".timeframeSelector")
timeframeSelectors.forEach(selector => selector.addEventListener('click', updateCards))
const cards = document.getElementsByClassName("card")


function updateCards() {
  const timeframe = this.id
  for (let i = 0; i < cards.length; i++) {
      const currentTimeEl = cards[i].querySelector('.currentTime')
      const prevTimeEl = cards[i].querySelector('.previousTime')
      const prevTimeFrameEl = cards[i].querySelector(".prevTimeFrame")
  if (timeframe === "daily") {
      timeframeSelectors[0].classList.add('active')
      timeframeSelectors[1].classList.remove('active')
      timeframeSelectors[2].classList.remove('active')
      prevTimeFrameEl.textContent = "Yesterday"
      currentTimeEl.textContent = data[i].timeframes.daily.current
      prevTimeEl.textContent = data[i].timeframes.daily.previous
  } else if (timeframe === "weekly") {
      timeframeSelectors[0].classList.remove('active')
      timeframeSelectors[1].classList.add('active')
      timeframeSelectors[2].classList.remove('active')
      prevTimeFrameEl.textContent = "Last week"
      currentTimeEl.textContent = data[i].timeframes.weekly.current
      prevTimeEl.textContent = data[i].timeframes.weekly.previous
  } else {
      timeframeSelectors[0].classList.remove('active')
      timeframeSelectors[1].classList.remove('active')
      timeframeSelectors[2].classList.add('active')
      prevTimeFrameEl.textContent = "Last month"
      currentTimeEl.textContent = data[i].timeframes.monthly.current
      prevTimeEl.textContent = data[i].timeframes.monthly.previous
  }
   }
  }
  

  
  
  
  




  



